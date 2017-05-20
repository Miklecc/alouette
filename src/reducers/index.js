import { combineReducers } from 'redux'
import appData from './dataReducer'
import setTextReducer from './setTextReducer'

const rootReducer = combineReducers({
    appData,
    setTextReducer
})

export default rootReducer