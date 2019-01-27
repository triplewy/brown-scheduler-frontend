import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

class RecommendedCourses extends Component {
  constructor(props) {
    super(props)
    this.getCourses = this.getCourses.bind(this);
  }


  getCourses() {
    const data = this.props.courses;
    const columns = [{
      Header: 'Code',
      accessor: 'code'
    }, {
      Header: 'Name',
      accessor: 'title'
    },{
      Header: 'Course Score',
      accessor: 'course_rating'
    },{
      Header: 'Professor Score',
      accessor: 'prof_rating'
    },{
      Header: 'Avg Hours',
      accessor: 'avg_hours'
    },{
      Header: 'Max Hours',
      accessor: 'max_hours'
    }, {
      Header: 'Class Size',
      accessor: 'class_size'
    }]
    return (<ReactTable data={data} columns={columns} />)
  }

  componentDidMount() {
    // getCourses();
  }

  render() {
    return (
      <div className="recommended-courses">
      <h1>Recommended Courses</h1>
      {this.getCourses()}     
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
