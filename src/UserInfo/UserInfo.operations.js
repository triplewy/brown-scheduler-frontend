import { setConcentrationAction } from './UserInfo.actions'

export function setConcentration(concentration) {
  return (dispatch) => {
    dispatch(setConcentrationAction(concentration))
  }
}
