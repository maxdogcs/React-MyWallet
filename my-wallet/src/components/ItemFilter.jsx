import { useState } from "react";
import ItemList from "./ItemList";


export default function ItemFilter({ itemList }) {

    const sortedList = itemList;

    const onIERadioChage = () => {

    }
    const initIncomeExpenIDs = [
        { id: 0, checked: 0, title: "All" },
        { id: 1, checked: 0, title: "Income" },
        { id: 2, checked: 0, title: "Expense" }];
    const initCategoryIDs = [
        { id: 0, checked: 0, title: "All" },
        { id: 1, checked: 0, title: "Food" },
        { id: 2, checked: 0, title: "Drug" },
        { id: 3, checked: 0, title: "General items" },
        { id: 4, checked: 0, title: "Other" }];
    const [curCategory, setCurCategory] = useState(0);
    const [categoryIDs, setCategoryIDs] = useState(initCategoryIDs);
    const [incExpIDs, setIncExpIDs] = useState(initIncomeExpenIDs);
    const onCategoryRadioChage = (id, isChecked, value) => {
        console.log("id: " + id);
        console.log("ischecked: " + isChecked);
        console.log("value: " + value);

        const numberID = Number(id);

        if (id <= 0) {
            if (isChecked)
                categoryIDs.map(x => x.checked = 1);
            else
                categoryIDs.map(x => x.checked = 0);
        }
        else {
            if (isChecked)
                categoryIDs[id].checked = 1
            else {
                categoryIDs[id].checked = 0;
                categoryIDs[0].checked = 0;
            }
        }
        setCategoryIDs([...categoryIDs]);
    }

    const getChecked = (categoryID) => {

        console.log("getcheck:" + categoryID)
        let result = "false";
        if (categoryIDs[Number(categoryID)].checked == 1)
            result = "true";
        return "true";
    }

    const onIncExpCheckboxChange = (id, isChecked, value) => {
        console.log("id: " + id);
        console.log("ischecked: " + isChecked);
        console.log("value: " + value);

        const numberID = Number(id);

        if (id <= 0) {
            if (isChecked)
            incExpIDs.map(x => x.checked = 1);
            else
            incExpIDs.map(x => x.checked = 0);
        }
        else {
            if (isChecked)
            incExpIDs[id].checked = 1
            else {
                incExpIDs[id].checked = 0;
                incExpIDs[0].checked = 0;
            }
        }
        setIncExpIDs([...incExpIDs]);
    }

    function reCalculateItemList()
    {
        
    }

    return (<>
        <div>
            <div style={{ display: "block", background: "blue" }}>
                <span>Hello world</span>
            </div>
            <div>
                <h4>Filter</h4>

                <div>
                    <label htmlFor="">Category : </label>
                    {categoryIDs.map(c =>
                        <>
                            <input type="checkbox" id={c.id}
                                onChange={e => onCategoryRadioChage(e.target.id, e.target.checked, e.target.value)}
                                // checked={c.checked}
                                checked={c.checked}

                            />
                            <label > {c.title} </label>
                        </>
                    )}
                </div>
                <div>
                    <label htmlFor="">Income/Expense </label>

                    {incExpIDs.map(c =>
                        <>
                            <input type="checkbox" id={c.id}
                                onChange={e => onIncExpCheckboxChange(e.target.id, e.target.checked, e.target.value)}
                                // checked={c.checked}
                                checked={c.checked}

                            />
                            <label > {c.title} </label>
                        </>
                    )}
                </div>


            </div>

        </div>

        <ItemList sortedItemList={sortedList} />
    </>);
}