import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCoursesSuccess } from './App.operations'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import SemesterCourse from '../SemesterCourse'
import AddCourses from '../AddCourses/AddCourses'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'

    this.getCourses = this.getCourses.bind(this)
  }

  componentDidMount() {
    this.props.client.auth.loginWithCredential(new AnonymousCredential())
    this.getCourses()
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
    return (
      <div className="App">
        <SemesterCourse />
        <AddCourses />
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
