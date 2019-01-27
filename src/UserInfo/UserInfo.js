import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import './UserInfo.css'

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="user-info">
        <p>Graduation Year</p>
        <select>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        <p>Concentration</p>
        <input type="text" name="concentration"/>
        <button>Generate Schedule</button>
      </div>
    );
  }
}

export default UserInfo;
