import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { hello } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 'Leonan' }
    console.log('Constructor App (Component)');
  }

  componentDidMount() {
    console.log('Component Created');
  }

  onClickButton = () => {
    this.props.myComponentAction(this.state);
    console.log('Action executed')
  }
  
  render() {
    console.log('State ->' , this.state)
    console.log('Props ->' , this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button type="button" onClick={ () => this.onClickButton()}> Click To call Action</button>
      </div>
    );
  }
}

//data
const mapStateToProps = (state) => {
  console.log('MapStateToProps', state);
  return {
    myMsg: state.msg
  }
}

//actions
const mapDispatchToProps = (dispatch) => {
  return {
    myComponentAction: (data) => dispatch(hello(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
