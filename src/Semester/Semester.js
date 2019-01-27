import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import AddCourse from './../AddCourses/AddCourses'

class Semester extends Component {
  constructor(props) {
    super(props)
    this.semesterNum = "1";
  }

  fakeCourses = [
      {courseName: "Creating Modern Web apps", courseId: "CS1320"},
      {courseName: "Creating Modern Web apps", courseId: "CS1320"},
      {courseName: "Creating Modern Web apps", courseId: "CS1320"},
      {courseName: "Creating Modern Web apps", courseId: "CS1320"},
      {courseName: "Creating Modern Web apps", courseId: "CS1320"}
  ]

  render() {

    return (
      <div className="semester">
        <h3>Semester {this.semesterNum}</h3>
        <div className="course-list">
            {this.fakeCourses.map((course) => <AddCourse />)}
        </div>
      </div>
    );
  }
}

export default Semester;
