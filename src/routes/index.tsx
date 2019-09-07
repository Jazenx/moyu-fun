import React, { Suspense, lazy } from 'react'
import Loading from '../components/Loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const AsyncMoyuView = lazy(() => import(/* webpackChunkName: "user" */ './../views/moyu'))
const AsyncLoginView = lazy(() => import(/* webpackChunkName: "login" */ './../views/login'))
const AsyncUserView = lazy(() => import(/* webpackChunkName: "user" */ './../views/user'))

interface IRoutes {
  path: string
  key: string
  component: React.FC
}

const routes = [
  {
    path: '/',
    exact: true,
    key: 'moyu',
    component: AsyncMoyuView
  },
  {
    path: '/login',
    key: 'login',
    component: AsyncLoginView
  },
  {
    path: '/User',
    key: 'User',
    component: AsyncUserView
  }
]

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(router => (
          <Route key={router.key} exact={router.exact} path={router.path} component={router.component} />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default AppRouter
