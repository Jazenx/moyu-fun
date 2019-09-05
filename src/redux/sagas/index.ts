import { all } from 'redux-saga/effects'
import * as User from './user'

export default function* rootSaga() {
  yield all([User.login])
}
