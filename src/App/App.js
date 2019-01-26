import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import ScheduleView from '../ScheduleView'
import UserInfo from '../UserInfo'
import RecommendedCourses from '../RecommendedCourses';
import '../general.scss'
import '../style.scss'

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
