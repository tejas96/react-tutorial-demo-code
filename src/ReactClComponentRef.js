import { Component, createRef } from "react";

export default class ReactClComponentRef extends Component {
  constructor() {
    super();
    this.emailRef = createRef();
    this.pass = createRef();
  }

  componentDidMount() {
    this.emailRef.current.focus();
  }

  render() {
    return (
      <input ref={this.emailRef} placeholder="enter your email" type="email" />
    );
  }
}
