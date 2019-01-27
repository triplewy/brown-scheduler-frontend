import { ADD_COURSE, REMOVE_COURSE } from './AddCourses.actions'

const initialState = {
  addedCourses: [],
}

export default function addCourses(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
    console.log('action.course', action.course);
      return {
        addedCourses: [...state.addedCourses, action.course]
      }
    case REMOVE_COURSE:
      return {
        ...state,
      }
    default:
      return state
  }
}
