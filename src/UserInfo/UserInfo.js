import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import { connect } from 'react-redux'
import { setYear, setConcentration, removeConcentration, setFirstPathway, setSecondPathway, setRecCourses, addPathwayCourses } from './UserInfo.operations'
import { algorithm } from '../algorithm'
import closeIcon from '../Icons/close-icon.png'
import './UserInfo.css'

class UserInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filteredConcentrations: [],
      concentrationInput: '',
      showSuggestions: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.renderSuggestions = this.renderSuggestions.bind(this)
    this.handleAlgorithm = this.handleAlgorithm.bind(this)
  }

  handleInput(e) {
    const filteredConcentrations = this.props.concentrations.filter(concentration =>
      concentration.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 ||
      concentration.code.toLowerCase().search(e.target.value.toLowerCase()) > -1
    )
    this.setState({ filteredConcentrations: filteredConcentrations, concentrationInput: e.target.value, showSuggestions: e.target.value })
  }

  handleClick(item) {
    this.props.handleSetConcentration(item)
    this.setState({ showSuggestions: false })
  }

  handleRemove() {
    this.props.handleRemoveConcentration()
    this.setState({ concentrationInput: '' })
  }

  renderSuggestions() {
    return this.state.filteredConcentrations.slice(0,5).map((item, index) => {
      return (
        <li key={index} onClick={() => this.handleClick(item)}>
          <p>{item.code}</p>
          <p>{item.title}</p>
        </li>
      )
    })
  }

  handleAlgorithm() {
    const recCourses = algorithm(
      this.props.courses,
      this.props.concentrations,
      this.props.year,
      this.props.concentration,
      this.props.pathways,
      this.props.addedCourses
    )

    this.props.handleSetRecCourses(recCourses.semesters)
    var pathwayCourses = []
    for (var pathway in recCourses.related_untaken) {
      pathwayCourses = pathwayCourses.concat(recCourses.related_untaken[pathway])
    }
    this.props.handleAddPathwayCourses(pathwayCourses.map(item => {
      return this.props.courses[this.props.courses.findIndex(course => course.code == item)]
    }))
  }


  render() {
    return (
      <div className="user-info">
        <p>Graduation Year</p>
        <select onChange={(e) => this.props.handleSetYear(e.target.value)}>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
        </select>
        <p>Concentration</p>
        <div className='suggestions'>
          {this.props.concentration ?
            <div>
              <p><b>{this.props.concentration.code}</b> {this.props.concentration.title}</p>
              <img src={closeIcon} onClick={this.handleRemove}/>
            </div>
            :
            <input type="text" value={this.state.concentrationInput} onChange={this.handleInput} placeholder="Type your concentration here..."/>
          }
          {this.state.showSuggestions ?
            <ul>
              {this.renderSuggestions()}
            </ul>
            :
            null
          }

        </div>
        {this.props.concentration && this.props.concentration.code === 'COMP-SCB' ?
          <div className='pathways'>
            <p>Pathways</p>
            <div>
              <select onChange={(e) => this.props.handleSetFirstPathway(e.target.value)}>
                <option value='Systems'>Systems</option>
                <option value='Data'>Data</option>
                <option value='Artificial Intelligence/Machine Learning'>Artificial Intelligence/Machine Learning</option>
                <option value='Theory'>Theory</option>
                <option value='Security'>Security</option>
                <option value='Visual Computing'>Visual Computing</option>
                <option value='Computer Architecture'>Computer Architecture</option>
                <option value='Computational Biology'>Computational Biology</option>
                <option value='Design'>Design</option>
              </select>
              <select defaultValue='Data' onChange={(e) => this.props.handleSetSecondPathway(e.target.value)}>
                <option value='Systems'>Systems</option>
                <option value='Data'>Data</option>
                <option value='Artificial Intelligence/Machine Learning'>Artificial Intelligence/Machine Learning</option>
                <option value='Theory'>Theory</option>
                <option value='Security'>Security</option>
                <option value='Visual Computing'>Visual Computing</option>
                <option value='Computer Architecture'>Computer Architecture</option>
                <option value='Computational Biology'>Computational Biology</option>
                <option value='Design'>Design</option>
              </select>
            </div>
          </div>
          :
          null
        }


        <button onClick={this.handleAlgorithm} disabled={!this.props.concentration}>Generate Schedule</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.userInfo,
    ...state.addCourses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetYear: (year) => dispatch(setYear(year)),
    handleSetConcentration: (concentration) => dispatch(setConcentration(concentration)),
    handleRemoveConcentration: () => dispatch(removeConcentration()),
    handleSetFirstPathway: (pathway) => dispatch(setFirstPathway(pathway)),
    handleSetSecondPathway: (pathway) => dispatch(setSecondPathway(pathway)),
    handleSetRecCourses: (courses) => dispatch(setRecCourses(courses)),
    handleAddPathwayCourses: (courses) => dispatch(addPathwayCourses(courses))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
