import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCourse, removeCourse, removeRecCourse } from './AddCourses.operations'
import closeIcon from '../Icons/close-icon.png'
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
    this.handleRemove = this.handleRemove.bind(this)
    this.onClick = this.onClick.bind(this)
    this.filterCourses = this.filterCourses.bind(this)
    this.renderAddedCourses = this.renderAddedCourses.bind(this)
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.onClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onClick, false);
  }

  onClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.setState({ showSuggestions: false })
  }

  handleInput(e) {
    const filteredCourses = this.props.uniq_courses.filter(course =>
      (course.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 ||
      course.code.toLowerCase().search(e.target.value.toLowerCase()) > -1) &&
      this.props.addedCourses.indexOf(course) < 0 && this.props.recCourses.indexOf(course.code) < 0
    )
    this.setState({ filteredCourses: filteredCourses, input: e.target.value, showSuggestions: e.target.value && filteredCourses.length })
  }

  handleClick(item) {
    this.props.handleAddCourse(this.props.index, item)
    this.setState({ currentCourse: item, showSuggestions: false })
  }

  handleRemove() {
    if (this.props.recCourses[this.props.index]) {
      this.props.handleRemoveRecCourse(this.props.index)
    } else {
      this.props.handleRemoveCourse(this.props.index)
    }
    this.setState({ currentCourse: null, input: '' })
  }

  filterCourses() {
    return this.state.filteredCourses.slice(0,5).map((item, index) => {
      return (
        <li key={index} onClick={() => this.handleClick(item)}>
          <p><b>{item.code}</b> {item.title}</p>
        </li>
      )
    })
  }

  renderAddedCourses() {
    return this.props.addedCourses.map((item, index) => {
      return (
        <li key={index}>
          <p><b>{item.code}</b> {item.title}</p>
        </li>
      )
    })
  }

  render() {
    const recCourseCode = this.props.recCourses[this.props.index]
    const recCourse = recCourseCode ? this.props.courses[this.props.courses.findIndex(p => p.code == recCourseCode)] : null
    const currentCourse = recCourse ? recCourse : this.state.currentCourse
    return (
      <div className="semester-course" style={{backgroundColor: recCourse ? 'rgb(255, 45, 85)' : this.state.currentCourse ? 'rgb(76, 217, 100)' : '#b2b2b2'}} ref={node => this.node = node}>
        <div className='selected-course'>
          {currentCourse ?
            <div>
              <p><b>{currentCourse.code}</b> {currentCourse.title}</p>
              <img src={closeIcon} onClick={() => this.handleRemove()} />
            </div>
            :
            <input value={this.state.input} onChange={this.handleInput} placeholder='Type in a course here...' style={this.courseColor}/>
          }
        </div>
        {this.state.showSuggestions ?
          <div className='suggestions'>
            <ul>
              {this.filterCourses()}
            </ul>
          </div>
          :
          null
        }
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
    handleAddCourse: (index, course) => dispatch(addCourse(index, course)),
    handleRemoveCourse: (index) => dispatch(removeCourse(index)),
    handleRemoveRecCourse: (index) => dispatch(removeRecCourse(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCourses);
