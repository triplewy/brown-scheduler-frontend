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
    }]
    return (<ReactTable data={data} columns={columns} />)
  }

  createRow(row) {
    return {
      code: row.code,
      name: row.title
    }
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
