import MyClassComponent from "./MyClassComponent";
import Todos from "./Todos";
import MyFunctionComponent from "./MyFunctionComponent";
import "./styles.css";
import ReactLifeCycle from "./ReactLifeCycle";
import MyComponent from "./MyFunctionComponent";
import MyRefFunctionComponent from "./ReactFnComponentRef";
import ReactClComponentRef from "./ReactClComponentRef";

export default function App() {
  return (
    <div>
      {/* <ReactLifeCycle message='asdasdasd'/> */}
      {/* <MyComponent /> */}
      <MyRefFunctionComponent />
      {/* <ReactClComponentRef/> */}
    </div>
  );
}

// Todos({userId:1, title:'todo task', completed:true})
// new MyClassComponent({message:'hello class component'})
{
  /* <MyFunctionComponent message="hello function component" />
<MyClassComponent message="hello class component" isVisible={true} /> */
}
