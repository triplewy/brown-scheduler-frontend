import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.appId = 'brown-scheduler-lyrwc'

  }
  componentDidMount() {
    this.client = Stitch.initializeAppClient(this.appId)
    this.mongodb = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('brownDB')
    this.client.auth.loginWithCredential(new AnonymousCredential())
    setTimeout(() => { 
      this.mongodb
        .collection('courses')
        .find()
        .asArray().then(data => {
          console.log(data);
          
        })
    }, 3000)


  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
        </header>
      </div>
    );
  }
}

export default App;
