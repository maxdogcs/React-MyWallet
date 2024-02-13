import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NewItem from './components/NewItem'
import ItemList from './components/ItemList'
import ItemFilter from './components/ItemFilter'
//import 'bootstrap/dist/css/bootstrap.min.css';

const initItemList = [{
  id: 0,
  title: "Hamburger",
  amount: 99,
  category: "1",
  payType: 0,
  isIncome: false,
}];
const initIncomeExpenIDs = [
  // { id: 0, checked: 0, title: "All" },
  { id: 1, checked: 1, title: "Income" },
  { id: 2, checked: 1, title: "Expense" }];
const initCategoryIDs = [
  // { id: 0, checked: 0, title: "All" },
  { id: 1, checked: 1, title: "Food" },
  { id: 2, checked: 1, title: "Drug" },
  { id: 3, checked: 1, title: "General items" },
  { id: 4, checked: 1, title: "Other" }];

function App() {


  //const [count, setCount] = useState(0)

  const [itemID, setItemID] = useState(1);
  const [itemList, setItemList] = useState(initItemList);

  const [categoryIDs, setCategoryIDs] = useState(initCategoryIDs);
  const [incExpIDs, setIncExpIDs] = useState(initIncomeExpenIDs);


  const [sortedList, setSortedList] = useState(initItemList);

  function getNewItemID() {
    setItemID(itemID + 1);
    console.log("itemID: " + itemID);
    return itemID;
  }
  const addNewItem = (newItem) => {
    console.log("addNewItem0");
    console.log(`${newItem.id} t${newItem.title}`);

    newItem.id = getNewItemID();
    setItemList([newItem, ...itemList]);

    console.log("addNewItem itemList.length: " + itemList.length);
    reCalculateItemList();
  }
  const editItem = (item) => {
    const targetItemIndex = itemList.findIndex(x.id == item.id);

    itemList[targetItemIndex] = item;
    setItemList([...itemList]);
    reCalculateItemList();
  }
  const deleteItem = (item) => {
    const filteredItemList = itemList.filter(x => x.id !== item.id);
    setItemList([...filteredItemList]);
    reCalculateItemList();
  }

  const isInCategory = (item_, categoryIDs_) => {
    console.log("isInCategory");
    const ids = categoryIDs_.filter(c => c.id == item_.category);
    console.log("cIDs: " + ids);
    console.log(...ids);
    if (ids.length >= 1) {
      console.log("true");
      return true;
    }
    else {
      return false;
    }
  }
  const isInInExpen = (item_, incExpIDs_) => {

    console.log("isInInExpen");

    if ((incExpIDs_[0].checked == 1) && (incExpIDs_[1] == 1)) {
      return true;
    }
    else {
      if ((incExpIDs_[0].checked == 1) && item_.isIncome) {
        return true;
      }

      if ((incExpIDs_[1].checked == 1) && !item_.isIncome) {
        return true;
      }
    }

    return false;
  }
  function reCalculateItemList2(itemlist_, categoryIDs_) {

    //console.log("reCalculateItemList:"+ categoryIDs);
    console.log(...categoryIDs_);
    console.log(...itemlist_);

    const activeCategoryIDs = categoryIDs_.filter(cate => cate.checked == 1);
    const newList = itemlist_.filter((item) => isInCategory(item, activeCategoryIDs));

    console.log("newLIst: " + newList.length);
    console.log(newList);
    console.log(...newList);
    //setSortedList([...newList]);
    return newList;
  }
  function reCalculateItemList() {

    //console.log("reCalculateItemList:"+ categoryIDs);
    // console.log(...categoryIDs_);
    // console.log(...itemlist_);

    const activeCategoryIDs = categoryIDs.filter(cate => cate.checked == 1);
    const newList0 = itemList.filter((item) => isInCategory(item, activeCategoryIDs));
    const newList = newList0.filter((item) => isInInExpen(item, incExpIDs));

    console.log("newLIst: " + newList.length);
    console.log(newList);
    console.log(...newList);

    //const newList =  reCalculateItemList2(itemList, categoryIDs);
    setSortedList([...newList]);

  }

  const onCategoryRadioChage = (id, isChecked, value) => {
    console.log("id: " + id);
    console.log("ischecked: " + isChecked);
    console.log("value: " + value);

    const numberID = Number(id);

    const categ = categoryIDs.find(cate => cate.id == numberID);
    if (isChecked)
      categ.checked = 1;
    else categ.checked = 0;

    setCategoryIDs([...categoryIDs]);

    reCalculateItemList();
  }
  const onIncExpCheckboxChange = (id, isChecked, value) => {
    // console.log("id: " + id);
    // console.log("ischecked: " + isChecked);
    // console.log("value: " + value);

    const numberID = Number(id);

    const categ = incExpIDs.find(cate => cate.id == numberID);
    if (isChecked)
      categ.checked = 1;
    else categ.checked = 0;

    setIncExpIDs([...incExpIDs]);

    reCalculateItemList();
  }
  //const sortedList_ = reCalculateItemList2(itemList, categoryIDs);

  return (
    <>
      <Header />
      <NewItem addNewItem={addNewItem} editItem={editItem} deleteItem={deleteItem} />

      <label>itemList: {itemList.length}</label>

      {/*itemList.map(item => <div key={item.id}>ID {item.id} Title {item.title} Category {item.category} IE {item.isIncome.toString()}</div>)*/}


      <ItemFilter itemList={itemList} incExpIDs={incExpIDs} categoryIDs={categoryIDs} onCategoryChange={onCategoryRadioChage} onInExpChange={onIncExpCheckboxChange} />


      {<ItemList sortedItemList={sortedList} />}

    </>
  )
}



export default App
