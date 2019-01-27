export const ADD_COURSE = 'ADD_COURSE'
export const REMOVE_COURSE = 'REMOVE_COURSE'

export function addCourseAction(course) {
  return {
    type: ADD_COURSE,
    course: course
  }
}

export function removeCourseAction(course) {
  return {
    type: REMOVE_COURSE,
    course: course
  }
}
