import {combineReducers} from 'redux'
import getImageReducer from './getImageReducer'
import setTextReducer from './setTextReducer'

const rootReducer = combineReducers({
    getImageReducer,
    setTextReducer
})

export default rootReducer