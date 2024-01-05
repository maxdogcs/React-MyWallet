import ItemList from "./ItemList";


export default function ItemFilter() {
    return (<>
        <div>
            <div style={{ display: "block", background: "blue" }}>
                <span>Hello world</span>
            </div>
            <label htmlFor="">Filter: </label>
            <input type="radio" /><input type="radio" /><input type="radio" />
        </div>
        <ItemList />
    </>);
}