import { USER } from '../../constants/ActionTypes'

const USER_STATE = {
  user: {}
}

export default function user(state = USER_STATE, action: any) {
  switch (action.type) {
    case USER.ADD_USER_INFO:
      return Object.assign({}, state, action.user)
    case USER.DELETE_USER_INFO:
      return Object.assign({}, state, action.user)
    default:
      return state
  }
}
