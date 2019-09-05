import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers'

// eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
)

export default function configStore() {
  const store: any = createStore(rootReducer, enhancer)
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
