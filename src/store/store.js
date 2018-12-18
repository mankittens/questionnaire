import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { connectRoutes } from 'redux-first-router'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './root'
import routes from './routes'

const noop = x => x

// router
// ------

const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  // thunk: routerThunk,
} = connectRoutes(routes)

// reducers
// --------

const combinedReducers = combineReducers({
  location: routerReducer,
  ...reducers,
  // add more reducers here...
})

// middleware & enhancers
// ----------------------

const isDev = process.env.NODE_ENV === 'development'
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__

const appliedLogger = (isDev && applyMiddleware(logger)) || noop // log redux actions to console
const reduxDevTools = (isDev && devTools && devTools()) || noop // make redux dev tools plugin work

const composedEnhancers = compose(
  routerEnhancer, // must come first
  applyMiddleware(routerMiddleware), // must come after router enhancer
  applyMiddleware(thunk), // must come after router middleware
  appliedLogger, // must come last
  reduxDevTools // must come laster
)

// store
// -----

const store = createStore(
  combinedReducers,
  {}, // initial state
  composedEnhancers
)

export default store
