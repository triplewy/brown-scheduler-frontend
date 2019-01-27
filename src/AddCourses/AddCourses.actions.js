export const ADD_COURSE = 'ADD_COURSE'
export const REMOVE_COURSE = 'REMOVE_COURSE'

export function addCourseAction(index, course) {
  return {
    type: ADD_COURSE,
    index: index,
    course: course
  }
}

export function removeCourseAction(index) {
  return {
    type: REMOVE_COURSE,
    index: index
  }
}
