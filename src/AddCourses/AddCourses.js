import React, { Component } from 'react';
import { connect } from 'react-redux'
import './AddCourses.css'

class AddCourses extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }



  render() {
    return (
      <div className="AddCourses">
        <input />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);
