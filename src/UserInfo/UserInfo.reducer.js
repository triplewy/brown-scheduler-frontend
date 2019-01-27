import { SET_YEAR, SET_CONCENTRATION, REMOVE_CONCENTRATION, SET_FIRST_PATHWAY, SET_SECOND_PATHWAY } from './UserInfo.actions'

const initialState = {
  year: 2019,
  concentration: null,
  pathways: ['Systems', 'Data']
}

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR: {
      return {
        ...state,
        year: action.year
      }
    }
    case SET_CONCENTRATION:
      return {
        ...state,
        concentration: action.concentration
      }
    case REMOVE_CONCENTRATION:
      return {
        ...state,
        concentration: null
      }
    case SET_FIRST_PATHWAY:
      return {
        ...state,
        pathways: [action.pathway, state.pathways[1]]
      }
    case SET_SECOND_PATHWAY:
      return {
        ...state,
        pathways: [state.pathways[0], action.pathway]
      }
    default:
      return state
  }
}
