import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

class UserInfo extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div className="user-info">
        <form>
            <input type="text" name="grad-year"/>
            <input type="text" name="degree-type"/>
            <input type="submit" value="autofill courses"/>
        </form>
      </div>
    );
  }
}

export default UserInfo;
