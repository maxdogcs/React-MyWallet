import { useState } from "react";
import ItemList from "./ItemList";


export default function ItemFilter({itemList, incExpIDs, categoryIDs, onCategoryChange,onInExpChange}) {

    const getChecked = (categoryID) => {

        console.log("getcheck:" + categoryID)
        let result = "false";
        if (categoryIDs[Number(categoryID)].checked == 1)
            result = "true";
        return "true";
    }


    return (<>
        <div>
            <div style={{ display: "block", background: "blue" }}>
                <span>Hello world</span>
            </div>
            <>
                <label htmlFor="">il </label>
            </>
            <div>
                <h4>Filter</h4>

                <div>
                    <label htmlFor="">Category : </label>
                    {categoryIDs.map(c =>
                        <>
                            <input type="checkbox" id={c.id} key={c.id}
                                onChange={e => onCategoryChange(e.target.id, e.target.checked, e.target.value)}
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
                            <input type="checkbox" id={c.id} key={c.id}
                                onChange={e => onInExpChange(e.target.id, e.target.checked, e.target.value)}
                                // checked={c.checked}
                                checked={c.checked}

                            />
                            <label > {c.title} </label>
                        </>
                    )}
                </div>


            </div>

        </div>

    </>);
}