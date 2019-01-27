import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCourse, removeCourse } from './AddCourses.operations'
import './AddCourses.css'

class AddCourses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentCourse: null,
      filteredCourses: [],
      showSuggestions: false,
      input: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.filterCourses = this.filterCourses.bind(this)
    this.renderAddedCourses = this.renderAddedCourses.bind(this)
  }

  componentDidMount() {
  }

  handleInput(e) {
    const filteredCourses = this.props.courses.filter(course =>
      course.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 || course.code.toLowerCase().search(e.target.value.toLowerCase()) > -1
    )
    this.setState({ filteredCourses: filteredCourses, input: e.target.value, showSuggestions: true })
  }

  handleClick(item) {
    this.props.handleAddCourse(item)
    this.setState({ currentCourse: item, showSuggestions: false })
  }

  filterCourses() {
    return this.state.filteredCourses.slice(0,5).map((item, index) => {
      return (
        <li key={index} onClick={() => this.handleClick(item)}>
          <p>{item.code}</p>
          <p>{item.title}</p>
        </li>
      )
    })
  }

  renderAddedCourses() {
    return this.props.addedCourses.map((item, index) => {
      return (
        <li key={index}>
          <p>{item.code}</p>
          <p>{item.title}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="AddCourses">
        <div className='selectedCourse'>
          {this.state.currentCourse ?
            <div>
              <p>{this.state.currentCourse.code}</p>
              <p>{this.state.currentCourse.title}</p>
            </div>
            :
            <input value={this.state.input} onChange={this.handleInput} placeholder='Type in a course here...'/>
          }
        </div>
        <div className='suggestions'>
          {this.state.showSuggestions ?
            <ul>
              {this.filterCourses()}
            </ul>
            :
            null
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.addCourse
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleAddCourse: (course) => dispatch(addCourse(course)),
    handleRemoveCourse: (course) => dispatch(removeCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);
