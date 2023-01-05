import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (err: string) => void, setName: (nm: string) => void, addUserCallback: (name: string) => void) => {
    if (name) {
        addUserCallback(name)
        setName("")
    } else {
        setError(" enter name")
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (err: string) => void) => { // если имя пустое - показать ошибку
    if(!name) {
        setError("empty field")
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => { // если нажата кнопка Enter - добавить
    addUser()
}



const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setName(e.currentTarget.value)
        error && setError('errrror')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            pureOnEnter(e, addUser)
        }

    }

    const totalUsers = users.length
    console.log(totalUsers)
    const lastUserName = users.length? users[users.length-1].name : ""

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
