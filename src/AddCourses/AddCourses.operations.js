import { addCourseAction, removeCourseAction, removeRecCoursesAction } from './AddCourses.actions'

export function addCourse(index, course) {
  return (dispatch) => {
    dispatch(addCourseAction(index, course))
  }
}

export function removeCourse(index) {
  return (dispatch) => {
    dispatch(removeCourseAction(index))
  }
}

export function removeRecCourse(index) {
  return (dispatch) => {
    dispatch(removeRecCoursesAction(index))
  }
}
