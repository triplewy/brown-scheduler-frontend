import { setYearAction, setConcentrationAction, removeConcentrationAction, setFirstPathwayAction, setSecondPathwayAction } from './UserInfo.actions'

export function setYear(year) {
  return (dispatch) => {
    dispatch(setYearAction(year))
  }
}
export function setConcentration(concentration) {
  return (dispatch) => {
    dispatch(setConcentrationAction(concentration))
  }
}

export function removeConcentration() {
  return (dispatch) => {
    dispatch(removeConcentrationAction())
  }
}

export function setFirstPathway(pathway) {
  return (dispatch) => {
    dispatch(setFirstPathwayAction(pathway))
  }
}

export function setSecondPathway(pathway) {
  return (dispatch) => {
    dispatch(setSecondPathwayAction(pathway))
  }
}
