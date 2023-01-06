const initState = {
    themeId: "1"
}
type ActionType = {
    type: 'SET_THEME_ID'
    id: string
}
type StateType = {
    themeId: string
}

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}
export const changeThemeId = (id: string): ActionType => ({ type: 'SET_THEME_ID', id }) // fix any