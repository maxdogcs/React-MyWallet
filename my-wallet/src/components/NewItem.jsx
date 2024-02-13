import { useState } from "react";
//import { Button } from "react-bootstrap";


export function ItemRecord(title) {
    this.id = id;
    this.title = title;
    this.amount = 0;
    this.category = "none";
    this.payType = payType;
    this.transType = 0;
}

export default function NewItem({ addNewItem, editItem, deleteItem }) {
    const [editMode, setEditMode] = useState(false);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("1");
    const [payType, setPayType] = useState(0);
    const [isIncome, setIsIncome] = useState(false);

    const onClickAddBTN = () => {
        //const a = 2;
        //const newRecord = new ItemRecord("sfdsf");
        //console.log(newRecord.name);

        console.log(title+":"+amount+":"+category+":"+payType+":"+isIncome);

        const newItem = {
            id:0,
            title:title,
            amount:amount,
            category:category,
            payType:payType,
            isIncome:isIncome,
        };

        addNewItem(newItem);
    }

    const onClickNewRecordBTN = () => {
        setEditMode(true);
    }

    const onClickCancelBTN = () => {
        setEditMode(false);
    }

    const onCategoryChange = (value) => {
        setCategory(value);
    }

    const onIncomeChange = (value) => {
        setIsIncome(value);
    }

    const onExpenChange = (value) => {
        setIsIncome(!value);
    }

    const onPayTypeChange = (value) => {
        setPayType(value);
    }

    return (
        <>
            {!editMode && (
                <div>
                    <button onClick={onClickNewRecordBTN}>Add</button>
     
                </div>
            )}
            {editMode &&
                (<div>
                    <label htmlFor="">New Item</label>
                    <div>
                        <div>
                            <div>
                                <input checked={!isIncome} type="checkbox" value={!isIncome} onChange={e => { onExpenChange(e.target.checked) }} />
                                <label htmlFor="">Expense </label>
                                <input checked={isIncome} type="checkbox" value={isIncome} onChange={e => { onIncomeChange(e.target.checked) }} />
                                <label htmlFor="">Income</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Title </label>
                            <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="title" />
                        </div>
                        <div>
                            <label htmlFor="">Amount </label>
                            <input type="number" onChange={e => setAmount(e.target.value)} value={amount} name="amont" id="amont" min="0" max="100000" step="100" />
                        </div>
                        <div>
                            <label htmlFor="">Category </label>
                            <select value={category} onChange={e => onCategoryChange(e.target.value)} className="select-header">
                              {/* <option value="0">None</option>*/}
                                <option value="1">Food</option>
                                <option value="2">Drug</option>
                                <option value="3">General items</option>
                                <option value="4">Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Pay Type </label>
                            <select value={payType} onChange={e => onPayTypeChange(e.target.value)} className="select-header">
                                <option value="0">Cash</option>
                                <option value="1">Credit Card</option>
                                <option value="2">Debit Card</option>
                                <option value="3">Money transfer</option>
                            </select>
                        </div>

                    </div>
                    <button onClick={onClickAddBTN}>Add</button>
                    <button onClick={onClickCancelBTN}>Cancel</button>
                </div>)
            }
        </>
    );
}

