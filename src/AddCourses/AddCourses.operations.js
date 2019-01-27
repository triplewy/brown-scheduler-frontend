import { addCourseAction, removeCourseAction } from './AddCourses.actions'

export function addCourse(course) {
  return (dispatch) => {
    dispatch(addCourseAction(course))
  }
}

export function removeCourse(course) {
  return (dispatch) => {
    dispatch(removeCourseAction(course))
  }
}
