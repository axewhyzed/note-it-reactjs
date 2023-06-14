import React, { useState } from 'react';
import Notes from './components/Notes';

const App = () => {
  const [inputList, setInputList] = useState('');
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    if (inputList.trim() !== '') {
      setItems((oldItems) => [...oldItems, inputList]);
      setInputList('');
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>Note It!</h1>
        <div className="input_container">
          <input
            type="text"
            placeholder="Add a new note"
            value={inputList}
            onChange={itemEvent}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                listOfItems();
              }
            }}
          />
          <button onClick={listOfItems}>+</button>
        </div>
        <ol>
          {Items.map((itemval, itemId) => (
            <Notes
              key={itemId}
              id={itemId}
              text={itemval}
              onSelect={deleteItems}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;