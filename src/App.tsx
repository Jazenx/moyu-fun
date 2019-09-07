import React from 'react'
import { Provider } from 'react-redux'
import configStore from './redux/store'
import rootSaga from './redux/sagas/index'
import AppRouter from './routes/index'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

const store = configStore()
store.runSaga(rootSaga)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  )
}

export default App
