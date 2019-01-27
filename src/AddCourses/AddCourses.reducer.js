import { ADD_COURSE, REMOVE_COURSE } from './AddCourses.actions'

const initialState = {
  addedCourses: new Array(40),
}

export default function addCourses(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        addedCourses: [...state.addedCourses.slice(0, action.index), action.course, ...state.addedCourses.slice(action.index + 1)]
      }
    case REMOVE_COURSE:
      return {
        ...state,
        addedCourses: [...state.addedCourses.slice(0, action.index), null, ...state.addedCourses.slice(action.index + 1)]
      }
    default:
      return state
  }
}
