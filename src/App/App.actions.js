export const GET_COURSES = 'GET_COURSES'
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS'
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE'

export const GET_CONCENTRATIONS_SUCCESS = 'GET_CONCENTRATIONS_SUCCESS'

export function getCoursesAction() {
  return {
    type: GET_COURSES
  }
}

export function getCoursesSuccessAction(data) {
  return {
    type: GET_COURSES_SUCCESS,
    data: data
  }
}

export function getCoursesFailureAction(error) {
  return {
    type: GET_COURSES_FAILURE,
    error: error
  }
}

export function getConcentrationsSuccessAction(data) {
  return {
    type: GET_CONCENTRATIONS_SUCCESS,
    data: data
  }
}
