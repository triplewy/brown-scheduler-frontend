import { getCoursesSuccessAction, getConcentrationsSuccessAction } from './App.actions'

export function getCoursesSuccess(data) {
  return (dispatch) => {
    dispatch(getCoursesSuccessAction(data))
  }
}

export function getConcentrationsSuccess(data) {
  return (dispatch) => {
    dispatch(getConcentrationsSuccessAction(data))
  }
}
