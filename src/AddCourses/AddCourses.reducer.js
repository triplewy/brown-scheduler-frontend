import { ADD_COURSE, REMOVE_COURSE } from './AddCourses.actions'

const initialState = {
  addedCourses: [],
}

export default function addCourses(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        addedCourses: [...state.addedCourses, action.course]
      }
    case REMOVE_COURSE:
      console.log(action.course);
      return {
        ...state,
        addedCourses: state.addedCourses.map(course => {
          if (course.title !== action.course.title) {
            return course
          }
        })
      }
    default:
      return state
  }
}
