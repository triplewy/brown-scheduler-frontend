import { ADD_COURSE, REMOVE_COURSE, ADD_REC_COURSES, REMOVE_REC_COURSES, ADD_PATHWAY_COURSES } from './AddCourses.actions'

const initialState = {
  addedCourses: new Array(40),
  recCourses: new Array(40),
  pathwayCourses: [],
}

export default function addCourses(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        addedCourses: [...state.addedCourses.slice(0, action.index), action.course, ...state.addedCourses.slice(action.index + 1)]
      }
    case REMOVE_COURSE:
      return {
        ...state,
        addedCourses: [...state.addedCourses.slice(0, action.index), null, ...state.addedCourses.slice(action.index + 1)]
      }
    case ADD_REC_COURSES:
      return {
        ...state,
        recCourses: action.courses
      }
    case REMOVE_REC_COURSES:
      return {
        ...state,
        recCourses: [...state.recCourses.slice(0, action.index), null, ...state.recCourses.slice(action.index + 1)]
      }
    case ADD_PATHWAY_COURSES:
      console.log(action.courses);
      return {
        ...state,
        pathwayCourses: action.courses
      }
    default:
      return state
  }
}
