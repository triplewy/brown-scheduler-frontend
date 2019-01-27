import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import '../style.scss'

class RecommendedCourses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: false
    }

    this.getCourses = this.getCourses.bind(this);
    this.filterPathway = this.filterPathway.bind(this)
  }

  getRecommendations() {
    if (this.state.filter) {
      console.log(this.props.pathwayCourses);
      return this.props.pathwayCourses
    } else {
      const courses = this.props.recCourses.concat(this.props.addedCourses)
      const toRemove = courses.map(d => d ? d.code ? d.code : d : null); // replace with list of courses already added
      return this.props.uniq_courses.filter(function(d) {
        return toRemove.indexOf(d.code) < 0;
      });
    }
  }

  filterPathway() {
    console.log('herere');
    this.setState({ filter: !this.state.filter }, () => {
      this.getCourses()
    })
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
          console.log(row);
          return (
          <div className="course-description">
            {row.row._original.description}
          </div>);
        }}
      />
    )
  }

  render() {
    return (
      <div className="recommended-courses">
        <div>
          <h1>Browse Courses</h1>
          <button onClick={this.filterPathway}>Filter to my pathway</button>
        </div>
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
