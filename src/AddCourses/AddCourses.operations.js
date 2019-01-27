import { addCourseAction, removeCourseAction } from './AddCourses.actions'

export function addCourse(course) {
  return (dispatch) => {
    console.log('erhehrehrher');
    dispatch(addCourseAction(course))
  }
}

export function removeCourse(course) {
  return (dispatch) => {
    dispatch(removeCourseAction(course))
  }
}
