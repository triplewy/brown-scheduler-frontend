import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import SemesterCourse from '../SemesterCourse'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'

  }
  componentDidMount() {
    this.props.client.auth.loginWithCredential(new AnonymousCredential())
    // this.props.mongodb
    //   .collection('courses')
    //   .find()
    //   .asArray().then(data => {
    //     console.log(data);
    //   })
  }

  render() {
    return (
      <div className="App">
      <SemesterCourse />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
