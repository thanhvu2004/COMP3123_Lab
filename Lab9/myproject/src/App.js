import logo from './logo.svg';
import './App.css';

// function component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// class component
import React from 'react';
class App extends React.Component {
  constructor(props) {
    // used to pass data from parent to child components
    super(props);
    this.state = {
      // used to store data that the component may need
      name: "World",
      time: new Date(),
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  sayHi = () => {
    alert("Hi");
  };

  render() {
    // crucial method since it defines what will be rendered in the DOM
    return (
      <div className="App">
        {/* Create and call class Info to display here */}
        {/* Also set course prop, if I dont set course prop then the default value will be display */}
        <Info course="Comp3123" />

        <h1>Hello, {this.state.name}!</h1>
        <h2>My name is Conor</h2>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
        <hr />
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <hr />
        <button onClick={this.sayHi}>Say Hi</button>
      </div>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.course}</h1>
      </div>
    )
  }
}

// default props
// If no course prop is passed, the default value will be used
// If I dont pass course prop and set the default value, there will be blank
Info.defaultProps = {
  course: "Comp None"
};

export default App;