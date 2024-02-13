import Item from "./Item";
import React, { useState } from "react";


export default function ItemList({sortedItemList}) {
    //console.log("sortedItemList:"+props.sortedItemList.lenght);
    //const [sortedList2, setSortedList2] = useState(props.sortedItemList);
    // const sortedList2 = props.sortedItemList;

    const isEmptyList = () => {
        console.log("sortedItemList:" + sortedItemList.length);
        if (sortedItemList.lenght <= 0)
            return true;
        else
            return false;
    }

    return (
        <><div>
            {<div style={{ display: "block", background: "blue" }}>
                <span>Hello world</span>
            </div>}
            {isEmptyList() && <h3>Empty</h3>}
            <p>start loop</p>

            {
                sortedItemList.map(i =>
                    <Item key={i.id} id={i.id} title={i.title} />



                )
            }

            <p>end loop</p>
        </div>
        </>
    );
}