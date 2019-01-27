import { combineReducers } from 'redux';
import app from '../App/App.reducer'
import addCourses from '../AddCourses/AddCourses.reducer'
import userInfo from '../UserInfo/UserInfo.reducer'

export default combineReducers({
  app,
  addCourses,
  userInfo
});
