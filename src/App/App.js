import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCoursesSuccess, getConcentrationsSuccess } from './App.operations'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import SemesterCourse from '../SemesterCourse/SemesterCourse'
import AddCourses from '../AddCourses/AddCourses'
import ScheduleView from '../ScheduleView'
import UserInfo from '../UserInfo/UserInfo'
import RecommendedCourses from '../RecommendedCourses/RecommendedCourses';
import './App.css'
import '../general.scss'
import '../style.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'

    this.getCourses = this.getCourses.bind(this)
    this.getConcentrations = this.getConcentrations.bind(this)
  }

  componentDidMount() {
    this.props.client.auth.loginWithCredential(new AnonymousCredential())
    this.getCourses()
    this.getConcentrations()
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

  getConcentrations() {
    this.props.mongodb.collection('concentrations').find().asArray()
    .then(data => {
      this.props.setConcentrations(data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="main">
        <div className="left-side">
          <ScheduleView />
        </div>
        <div className="right-side">
          <UserInfo />
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
    setCourses: (data) => dispatch(getCoursesSuccess(data)),
    setConcentrations: (data) => dispatch(getConcentrationsSuccess(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
