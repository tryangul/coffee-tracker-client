import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './root_reducer'

const logger = createLogger({
    stateTransformer: (state) => state.toJS(),
})

const middleware = [ logger, thunk ]

const createStoreWithMiddleware = applyMiddleware.apply(this, middleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store