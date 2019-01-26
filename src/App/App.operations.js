import { getCoursesSuccessAction } from './App.actions'

export function getCoursesSuccess(data) {
  return (dispatch) => {
    dispatch(getCoursesSuccessAction(data))
  }
}
