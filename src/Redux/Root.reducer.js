import { combineReducers } from 'redux';
import app from '../App/App.reducer'
import addCourse from '../AddCourses/AddCourses.reducer'

export default combineReducers({
  app,
  addCourse
});
