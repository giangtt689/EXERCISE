import React, {useState} from 'react';

const ListItem = (props) => {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(props.todo.name);
    const handleOnEdit = () => {
        setOnEdit(true)
    }
    const handleSave = id => {
        setOnEdit(false);
        if (editValue){
            props.handleEditTodos(editValue, id)
        } else {
            setEditValue(props.todo.name)
        }
    }
    if(onEdit){
        return (
            <li>
                <input type="text" id="editValue"
                       value={editValue}
                       name ="editValue"
                       onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                />
                <button  onClick={() => handleSave(props.id)}>Save</button>
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