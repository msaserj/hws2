import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
             // need to fix
            return [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                } else if (action.payload === 'down') {
                    if (a.name > b.name) {
                        return -1
                    }
                    if (a.name < b.name) {
                        return 1
                    }
                }
                return 0
            })
        }
        case 'check': {

            return [...state].filter(age => age.age > 18) // need to fix
        }
        default:
            return state
    }
}
