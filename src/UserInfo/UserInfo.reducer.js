import { SET_CONCENTRATION } from './UserInfo.actions'

const initialState = {
  concentration: null,
}

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case SET_CONCENTRATION:
      return {
        concentration: action.concentration
      }
    default:
      return state
  }
}
