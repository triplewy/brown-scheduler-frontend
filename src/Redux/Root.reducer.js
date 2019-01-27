import { combineReducers } from 'redux';
import app from '../App/App.reducer'
import addCourse from '../AddCourses/AddCourses.reducer'
import userInfo from '../UserInfo/UserInfo.reducer'

export default combineReducers({
  app,
  addCourse,
  userInfo
});
