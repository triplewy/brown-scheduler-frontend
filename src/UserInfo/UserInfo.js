import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import { connect } from 'react-redux'
import { setYear, setConcentration, setFirstPathway, setSecondPathway } from './UserInfo.operations'
import { algorithm } from '../algorithm'
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
    this.renderSuggestions = this.renderSuggestions.bind(this)
  }

  handleInput(e) {
    const filteredConcentrations = this.props.concentrations.filter(concentration =>
      concentration.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 ||
      concentration.code.toLowerCase().search(e.target.value.toLowerCase()) > -1
    )
    this.setState({ filteredConcentrations: filteredConcentrations, concentrationInput: e.target.value, showSuggestions: true })
  }

  handleClick(item) {
    this.props.handleSetConcentration(item)
    this.setState({ showSuggestions: false })
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
              <p>{this.props.concentration.code}</p>
              <p>{this.props.concentration.title}</p>
            </div>
            :
            <input type="text" value={this.state.concentrationInput} onChange={this.handleInput}/>
          }
          {this.state.showSuggestions ?
            <ul>
              {this.renderSuggestions()}
            </ul>
            :
            null
          }

        </div>
        <p>Pathways</p>
        <select>
          <option value='Systems'>Systems</option>
          <option value='Data'>Data</option>
          <option value='Artifical Intelligence/Machine Learning'>Artifical Intelligence/Machine Learning</option>
          <option value='Theory'>Theory</option>
          <option value='Security'>Security</option>
          <option value='Visual Computing'>Visual Computing</option>
          <option value='Computer Architecture'>Computer Architecture</option>
          <option value='Computational Biology'>Computational Biology</option>
          <option value='Design'>Design</option>
        </select>
        <select>
          <option value='Systems'>Systems</option>
          <option value='Data'>Data</option>
          <option value='Artifical Intelligence/Machine Learning'>Artifical Intelligence/Machine Learning</option>
          <option value='Theory'>Theory</option>
          <option value='Security'>Security</option>
          <option value='Visual Computing'>Visual Computing</option>
          <option value='Computer Architecture'>Computer Architecture</option>
          <option value='Computational Biology'>Computational Biology</option>
          <option value='Design'>Design</option>
        </select>
        <button onClick={() => algorithm(
          this.props.courses,
          this.props.concentrations,
          this.props.year,
          this.props.concentration,
          this.props.pathways,
          this.props.takenCourses
        )}>Generate Schedule</button>
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
    handleSetFirstPathway: (pathway) => dispatch(setFirstPathway(pathway)),
    handleSetSecondPathway: (pathway) => dispatch(setSecondPathway(pathway))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
