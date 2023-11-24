import { useState } from "react";

const Todos = ({ userId, title, completed }) => {
  const [] = useState();
  return (
    <div style={{ border: "1px solid", width: "400px" }}>
      <h4>User ID: {userId}</h4>
      <h2>{title}</h2>
      <input type="checkbox" checked={completed} />
    </div>
  );
};

export default Todos;
