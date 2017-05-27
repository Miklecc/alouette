import {SET_TEXT_GETTING, SET_TEXT_SUCCESS} from '../reducers/constants'

export function fetchSetText() {
    return {
        type: SET_TEXT_GETTING
    }
}

export function setTextSuccess(data) {
    return {
        type: SET_TEXT_SUCCESS,
        data
    }
}