import React from "react";

const Lists = (props) => {

  return (
    <div>
        <button onClick={() => {
            props.onSelect(props.id)
        }}>X</button>
        <li>{props.value}</li>
    </div>
  );
};

export default Lists;
