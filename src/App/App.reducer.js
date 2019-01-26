import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import { GET_COURSES, GET_COURSES_SUCCESS, GET_COURSES_FAILURE } from './App.actions'

const client = Stitch.initializeAppClient('brown-scheduler-lyrwc')
const initialState = {
  client: client,
  mongodb: client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('brownDB'),
  loading: true,
  courses: [],
  error: '',
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        loading: true,
        error: ''
      }
    case GET_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.data,
        loading: false,
        error: '',
      }
    case GET_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}
