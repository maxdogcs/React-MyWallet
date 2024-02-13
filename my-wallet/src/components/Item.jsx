

export default function Item(props)
{
    return(
    <div>
    <label htmlFor="">item</label>
    <label> {props.id}</label>
    <label> {props.title}</label>

    </div>
    );
}