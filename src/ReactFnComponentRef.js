import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useState,
  Component
} from "react";

// export function MyRefFunctionComponent() {
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const [password, setPassword] = useState("");
//   console.log("render");

//   const handleClick = () => {
//     console.log(emailRef.current.value, passwordRef.current.value);
//   };

//   const handleReset = () => {
//     emailRef.current.value = "";
//     passwordRef.current.value = "";
//   };

//   function handlePassword(event) {
//     const {
//       target: { value }
//     } = event;
//     setPassword(() => value);
//   }
//   return (
//     <div>
//       <input ref={emailRef} placeholder="enter your email" type="email" />
//       <br />
//       <input
//         value={password}
//         onChange={handlePassword}
//         placeholder="enter your password"
//         type="password"
//       />
//       <br />
//       {password.length < 5 && <label>password must have 5 char</label>}
//       <br />
//       <button onClick={handleClick}>Submit</button>
//       <button onClick={handleReset}>reset</button>
//     </div>
//   );
// }

// Child component that accepts and uses the forwarded ref

// const RefComponent = (props, ref) => {
//   const [counter, setCounter] = useState(0);
//   // Use useImperativeHandle to expose functions or values to the parent component
//   useImperativeHandle(ref, () => ({
//     // Function to perform some action in the child component
//     getCounterVal: () => {
//       return counter;
//     },
//     setCounter: (val) => {
//       setCounter(val);
//     },
//     counter
//     // You can expose other values or functions here
//   }));

//   const handleClick = ()=>{
//     setCounter((prev)=>1+prev)
//   }

//   return (
//     <div>
//       Child component content
//      <button onClick={handleClick}>{counter}</button>
//     </div>
//   );
// }

// const ChildComponent = forwardRef(RefComponent);

// Parent component that creates a ref and passes it to the child component

class ChildComponent extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }
  getCounterVal = () => {
    return this.state.counter;
  };

  setCounter(val) {
    this.setState({ counter: val });
  }

  handleClick = () => {
    this.setState((prev) => ({ counter: prev.counter + 1 }));
  };

  render() {
    return (
      <div>
        Child component content
        <button onClick={this.handleClick}>{this.state.counter}</button>
      </div>
    );
  }
}

const ParentComponent = () => {
  // Create a ref using the useRef hook
  const childRef = useRef();

  // Function to trigger the child function using the ref
  const handleButtonClick = () => {
    if (childRef.current) {
      // Call the exposed function in the child component
      const counterval = childRef.current.getCounterVal();
      console.log(counterval);
    }
  };

  return (
    <div>
      {/* Pass the ref to the child component */}
      <ChildComponent ref={childRef} />
      Button to trigger the child function
      <button onClick={handleButtonClick}>Call Child Function</button>
    </div>
  );
};

export default ParentComponent;

// when to use refs
// 1. Accessing DOM Elements:
// 2. Managing focus
// 3. Triggering Imperative animations
// 4. Interacting with 3rd party lib
// 5. Accessing child component

// when not to use react refs
// 1. Avoiding direct dom manupulation
// 2. State management
// 3. Conditional rendering
// 4. avoding excessive use
