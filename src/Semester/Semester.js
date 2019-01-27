import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import AddCourse from './../AddCourses/AddCourses'

class Semester extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="semester">
        <h3>Semester {this.props.index + 1}</h3>
        <div className="course-list">
          <AddCourse index={this.props.index * 5} />
          <AddCourse index={this.props.index * 5 + 1} />
          <AddCourse index={this.props.index * 5 + 2} />
          <AddCourse index={this.props.index * 5 + 3} />
          <AddCourse index={this.props.index * 5 + 4} />
        </div>
      </div>
    );
  }
}

export default Semester;
