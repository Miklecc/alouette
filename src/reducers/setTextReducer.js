import {SET_TEXT_GETTING, SET_TEXT_SUCCESS} from './constants'
import {initialStateText} from './getImageReducer'

export default function setTextReducer(state = initialStateText, action) {
    switch (action.type) {
        case SET_TEXT_GETTING:
            return {
                ...state,
                enteredText: 'getting text'
            }
        case SET_TEXT_SUCCESS:
            return {
                ...state,
                enteredText: action.data
            }
        default:
            return state
    }
}