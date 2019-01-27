import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import AddCourses from '../AddCourses/AddCourses'

class SemesterCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false
    }
    this.courseName = "Creating Modern Web Apps";
    this.courseId = "CSCI1320";
  }

  courseColor = {
      backgroundColor: '#b2b2b2'
  };

  render() {
    return (
      <div className="semester-course" style={this.courseColor}>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SemesterCourse);
