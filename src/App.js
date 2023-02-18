import { React, useState } from "react";
import "./App.css";
import Lists from "./Lists";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const removeItem = (id) => {
    // console.log('deleted')
    setItems((oldItems) => {
      return oldItems.filter((arrEle,index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App  main-div">
      <div className="center-div">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add an Item"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick={listItems}>+</button>
        <ol>
          {items.map((item, index) => {
            return <Lists key={index} id={index} value={item} onSelect={removeItem} />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
