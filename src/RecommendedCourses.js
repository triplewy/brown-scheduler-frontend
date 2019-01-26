import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

class RecommendedCourses extends Component {
  constructor(props) {
    super(props)
    this.getCourses = this.getCourses.bind(this);
  }


  getCourses(e) {
    this.props.mongodb.collection('courses')
      .find()
      .toArray()
      .then(data => {
        console.log(data);
      });
  }

  componentDidMount() {
    // getCourses();
    console.log(this.props.courses);
  }

  render() {

    return (
      <div className="recommended-courses">
      <h1>Recommended Courses</h1>
      <div></div>        
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

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedCourses);
