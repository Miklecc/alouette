import {createStore, applyMiddleware} from 'redux'
import app from './reducers/rootReducer'

import {createEpicMiddleware} from 'redux-observable'
import fetchUserEpic from './getImage/getImageEpic'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
    const store = createStore(app, applyMiddleware(epicMiddleware))
    return store
}