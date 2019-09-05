import React from 'react'
import { Provider } from 'react-redux'
import configStore from './redux/store'
import rootSaga from './redux/sagas/index'
import AppRouter from './routes/index'

const store = configStore()
store.runSaga(rootSaga)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
