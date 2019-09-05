import { USER } from './../../constants/ActionTypes'
import { takeEvery } from 'redux-saga/effects'

function test() {
  console.log('saga: add user')
}

export function* login() {
  yield takeEvery(USER.ADD_USER_INFO, test)
}
