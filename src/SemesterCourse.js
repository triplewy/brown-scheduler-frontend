import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

class SemesterCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active: false
    }
    this.courseName = "Creating Modern Web Apps";
    this.courseId = "CSCI1320";
    this.generateSuggestions = this.generateSuggestions.bind(this);
  }

  courseColor = {
      backgroundColor: '#b2b2b2'
  };

  generateSuggestions(e) {
    console.log(this.props.db);
      this.props.mongodb.collection('courses')
      .find()
      .asArray()
      .then(data => {
        for (let i of data) {
            console.log(i.title);
        }
      });
  }

  render() {
    return (
      <div className="semester-course" style={this.courseColor}>
        <div onClick={this.generateSuggestions} contentEditable={true}><p><b>{this.courseId}</b>{this.courseName}</p></div>
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
