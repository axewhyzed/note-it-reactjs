import React, { useState } from 'react'
import Notes from './components/Notes'

const App = () => {
  const [inputList, setInputList] = useState("");

  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList('');
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, eleId) => {
        return eleId !== id;
      })
    })
    console.log("bork");
  };

  return (
    <div className='main_div'>
      <div className='center_div' >
        <br />
        <h1>Note it !</h1>
        <br />
        <input type="text"
          placeholder='Add a new note'
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {Items.map((itemval, itemId) => {
            return <Notes
              key={itemId}
              id={itemId}
              text={itemval}
              onSelect={deleteItems}
            />
          })}
        </ol>
      </div>
    </div>
  )
}

export default App