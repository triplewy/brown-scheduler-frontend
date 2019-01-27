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

  getRecommendations() {
    const toRemove = this.props.addedCourses.map(d => d ? d.code : null); // replace with list of courses already added
    return this.props.uniq_courses.filter(function(d) {
      return toRemove.indexOf(d.code) < 0;
    });
  }

  getCourses() {
    const data = this.getRecommendations();
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
    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        SubComponent={row =>  {
          return (
          <div className="course-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla lorem odio, quis cursus dolor volutpat sit amet. Sed id quam sit amet dolor varius scelerisque. Vestibulum nec efficitur q
          </div>);
        }}
      />
    )
  }

  render() {
    return (
      <div className="recommended-courses">
      <h1>Browse Courses</h1>
      {this.getCourses()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.addCourses
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedCourses);
