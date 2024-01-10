import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NewItem from './components/NewItem'
import ItemList from './components/ItemList'
import ItemFilter from './components/ItemFilter'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  const [itemID, setItemID] = useState(1);
  const [itemList, setItemList] = useState([]);

  function getNewItemID() {
    setItemID(itemID + 1);
    return itemID;
  }
  const addNewItem = (newItem) => {
    newItem.id = getNewItemID();
    setItemList([newItem, ...itemList]);
  }
  const editItem = (item) => {
    const targetItemIndex = itemList.findIndex(x.id == item.id);

    itemList[targetItemIndex] = item;
    setItemList([...itemList]);
  }
  const deleteItem = (item) => {
    const filteredItemList = itemList.filter(x => x.id !== item.id);
    setItemList([...filteredItemList]);
  }

  return (
    <>
      <Header />
      <NewItem addNewItem={addNewItem} editItem={editItem} />
      <ItemFilter itemList={itemList} />


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}



export default App
