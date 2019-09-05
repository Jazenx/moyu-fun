import { USER } from '../../constants/ActionTypes'

export const addUserInfo = (user: any) => ({
  type: USER.ADD_USER_INFO,
  user
})

export const deleteUserInfo = (user: any) => ({
  type: USER.DELETE_USER_INFO,
  user
})
