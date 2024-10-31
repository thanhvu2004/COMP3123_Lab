import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to FullStack Development - | </h1>
          <h2>React JS Programming Week09 Lab excerise</h2>
          <Info id="101411302" name="Conor Le" school="George Brown College" />
        </header>
      </div>
    );
  }
}

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      city: "Toronto",
    }
  }
  render() {
    return (
      <div>
        <p>ID: {this.props.id}</p>
        <p>Name: {this.props.name}</p>
        <p>School: {this.props.school}, {this.state.city}</p>
      </div>
    );
  }
}

Info.defaultProps = {
  id: "Your ID",
  name: "Your Name",
  school: "Your School",
}

export default App;
