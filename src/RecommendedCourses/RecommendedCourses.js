import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

class RecommendedCourses extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="recommended-courses">
      <h1>Recommended Courses</h1>

        
      </div>
    );
  }
}

export default RecommendedCourses;
