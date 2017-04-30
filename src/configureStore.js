import { createStore, applyMiddleware } from 'redux'
import app from './reducers/index'

import { createEpicMiddleware } from 'redux-observable'
import fetchUserEpic from './epic'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore () {
    const store = createStore(app, applyMiddleware(epicMiddleware))
    return store
}