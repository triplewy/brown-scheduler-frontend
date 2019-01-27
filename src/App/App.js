import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCoursesSuccess } from './App.operations'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import SemesterCourse from '../SemesterCourse'
import AddCourses from '../AddCourses/AddCourses'
import ScheduleView from '../ScheduleView'
import UserInfo from '../UserInfo'
import RecommendedCourses from '../RecommendedCourses';
import './App.css'
import '../general.scss'
import '../style.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'

    this.getCourses = this.getCourses.bind(this)
  }

  componentDidMount() {
    console.log("hi");
    this.props.client.auth.loginWithCredential(new AnonymousCredential())
    this.getCourses();
  }

  suggestIntermediate(taken) {   
    
  }

  getCourses() {
    this.props.mongodb.collection('courses').find().asArray()
    .then(data => {
      this.props.setCourses(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    console.log(this.props.courses);
    return (
      <div className="main">
        <div className="left-side">
          <h1>Semester View</h1>
          <ScheduleView />
        </div>
        <div className="right-side">
          <UserInfo />
          <AddCourses />
          <RecommendedCourses />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCourses: (data) => dispatch(getCoursesSuccess(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
