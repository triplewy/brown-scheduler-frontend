import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import './App.css';
import './style.scss';
import './general.scss';

import ScheduleView from './ScheduleView';

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'
  }
  componentDidMount() {
    this.client = Stitch.initializeAppClient(this.appId)
    this.mongodb = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('brownDB')
    this.client.auth.loginWithCredential(new AnonymousCredential())
      // this.mongodb
      //   .collection('courses')
      //   .find()
      //   .asArray())


  }

  render() {
    return (
      <div className="main">
        <ScheduleView />
      </div>
    );
  }
}

export default App;
