import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCHING_DATA_PROGRESS } from '../reducers/constants'

export function fetchData(phrase) {
    return {
        type: FETCHING_DATA,
        phrase
    }
}

export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export function getDataFailure(error) {
    return {
        type: FETCHING_DATA_FAILURE,
        errorMessage: error
    }
}


export function getDataProgress(progress) {
    return {
        type: FETCHING_DATA_PROGRESS,
        progress
    }
}