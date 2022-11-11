import React, {useState} from 'react';

const ListItem = (props) => {
    const [onEdit, setOnEdit] = useState(false);
    const handleOnEdit = () => {
        setOnEdit(true)
    }
    if(onEdit){
        return (
            <li>
                <input type="text" id={props.id} checked={props.todo.complete}
                       onChange={() => props.checkComplete(props.id)}
                />
                <button disabled={props.todo.complete} onClick={handleOnEdit}>Edit</button>
            </li>
        );
    } else {
        return (
            <li>
                <label htmlFor={props.id} className={props.todo.complete ? 'active':''}>
                    <input type="checkbox" id={props.id} checked={props.todo.complete}
                           onChange={() => props.checkComplete(props.id)}
                    />
                    {props.todo.name}
                </label>
                <button disabled={props.todo.complete} onClick={handleOnEdit} >Edit</button>
            </li>
        );
    }
};

export default ListItem;