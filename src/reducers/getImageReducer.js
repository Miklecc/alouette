import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './constants'

export const initialState = {
    phrase: '',
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function getImageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                phrase: action.phrase,
                isFetching: true
            }
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}