// React has four built-in methods that gets called, in this order, when mounting a component:

import { Component } from "react";

// ////// Mounting /////
// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()

// ////// Updation /////
//getDerivedStateFromProps()
//shouldComponentUpdate()
//render()
//getSnapshotBeforeUpdate()
//componentDidUpdate()

class ReactLifeCycle extends Component {
  // phase-1-mounting-method-1
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    console.log("mounting phase 1 - constructor");
  }

  shouldComponentUpdate(props, state) {
    return true;
  }

  // phase-1-mounting-method-2
  // static getDerivedStateFromProps(props, state) {
  //   console.log("Updation phase 2 - getDerivedStateFromProps");
  //   return { counter: 0 };
  // }

  // phase-1-mounting-method-4
  componentDidMount() {
    console.log("mounting phase 1 - componentDidMount");
  }

  componentDidUpdate() {
    console.log("Updation phase 2 - componentDidUpdate");
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1
      };
    });
  };

  // getSnapshotBeforeUpdate(props, state) {
  //   console.log(props, state);
  //   // console.log("Updation phase 2 - getSnapshotBeforeUpdate");
  // }

  // phase-1-mounting-method-3
  render() {
    // console.log("mounting phase 1 - render");
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.counter}</button>
        {this.state.counter <= 5 && <Title />}
      </div>
    );
  }
}

class Title extends Component {
  componentWillUnmount() {
    console.log("component is unmounted...");
  }
  render() {
    return <h1>React lifecycle</h1>;
  }
}

export default ReactLifeCycle;
