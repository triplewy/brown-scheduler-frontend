import React, { Component } from 'react';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import { connect } from 'react-redux'
import { setConcentration } from './UserInfo.operations'
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
    this.renderSuggestions = this.renderSuggestions.bind(this)
  }

  handleInput(e) {
    console.log(this.props.concentrations);
    const filteredConcentrations = this.props.concentrations.filter(concentration =>
      concentration.title.toLowerCase().search(e.target.value.toLowerCase()) > -1 ||
      concentration.code.toLowerCase().search(e.target.value.toLowerCase()) > -1
    )
    this.setState({ filteredConcentrations: filteredConcentrations, concentrationInput: e.target.value, showSuggestions: true })
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
        <select>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        <p>Concentration</p>
        <div>
          <input type="text" value={this.state.concentrationInput} onChange={this.handleInput}/>
          <ul>
            {this.renderSuggestions()}
          </ul>
        </div>
        <p>Pathway</p>
        <select>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        <select>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        <button>Generate Schedule</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.app,
    ...state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSetConcentration: (concentration) => dispatch(setConcentration(concentration))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
