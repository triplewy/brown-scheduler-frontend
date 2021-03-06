export const ADD_COURSE = 'ADD_COURSE'
export const REMOVE_COURSE = 'REMOVE_COURSE'
export const ADD_REC_COURSES = 'ADD_REC_COURSES'
export const REMOVE_REC_COURSES = 'REMOVE_REC_COURSES'
export const ADD_PATHWAY_COURSES = 'ADD_PATHWAY_COURSES'

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

export function addRecCoursesAction(courses) {
  return {
    type: ADD_REC_COURSES,
    courses: courses
  }
}

export function removeRecCoursesAction(index) {
  return {
    type: REMOVE_REC_COURSES,
    index: index
  }
}

export function addPathwayCoursesAction(courses) {
  return {
    type: ADD_PATHWAY_COURSES,
    courses: courses
  }
}
