import {createStore, applyMiddleware} from 'redux'
import app from './reducers/rootReducer'

import {createEpicMiddleware, combineEpics} from 'redux-observable'
import fetchUserEpic from './getImage/getImageEpic'

const combinedEpics = combineEpics(fetchUserEpic)

const epicMiddleware = createEpicMiddleware(combinedEpics)

export default function configureStore() {
    const store = createStore(app, applyMiddleware(epicMiddleware))
    return store
}