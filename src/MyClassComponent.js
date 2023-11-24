const { Component } = require("react");

class MyClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.counter}</button>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

export default MyClassComponent;
