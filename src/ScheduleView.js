import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import Semester from './Semester/Semester'

class ScheduleView extends Component {
  constructor(props) {
    super(props)
    this.numSemesters = 8
  }

  createSemesterList() {
    let list = [];
    for (let i = 0; i < this.numSemesters; i++) {
      list.push(<Semester key={i} index={i} />)
    }
    return list;
  }


  render() {
    return (
      <div className="schedule-view">
        {this.createSemesterList()}
      </div>
    );
  }
}

export default ScheduleView;
