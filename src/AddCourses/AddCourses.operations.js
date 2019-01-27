import { addCourseAction, removeCourseAction } from './AddCourses.actions'

export function addCourse(index, course) {
  return (dispatch) => {
    dispatch(addCourseAction(index, course))
  }
}

export function removeCourse(course) {
  return (dispatch) => {
    dispatch(removeCourseAction(course))
  }
}
