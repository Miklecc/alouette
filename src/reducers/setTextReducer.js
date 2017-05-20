import { SET_TEXT_GETTING, SET_TEXT_SUCCESS } from '../constants'
import { initialState } from './dataReducer'

export default function setTextReducer (state = initialState, action) {
    switch (action.type) {
        case SET_TEXT_GETTING:
            return {
                ...state,
                enteredText: 'getting text'
            }
        case SET_TEXT_SUCCESS:
            return {
                ...state,
                enteredText: action.enteredText
            }
        default:
            return state
    }
}