import React, {useState, useContext} from 'react';
import {DataContext} from "./DataProvider";

const Footer = () => {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);
    const [active, setActive] = useContext(DataContext);
    const [complete , setComplete] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        })
        setTodos(newTodos);
        setCheckAll(!checkAll);
    };

    const newTodosComplete = () => {
       return  todos.filter( todo => todo.complete === false)
    }
    const allTodo = () => {
        const newActive = [...todos];
            console.log(newActive)
        // setTodos(newTodosComplete());
        // setCheckAll(false);
        setActive(newActive.filter( todo => todo.complete === false || todo.complete === true));
    }

    const activeTodo = () => {
        const newActive = [...active];
        setActive(newActive.filter( todo => todo.complete === false));
    }

    const completeTodo = () => {
        const newComplete = [...complete];
        setComplete(newComplete.filter( todo => todo.complete === true));
    }

    return (
        <>
            {todos.length === 0 ? <h2> Congratulations! Nothings To Do </h2>
                : <div className="row">
                    <label htmlFor="all">
                        <input type="checkbox" name="all" id="all"
                               onChange={handleCheckAll}
                               checked={checkAll}
                        />
                        All
                    </label>
                    <p>
                        You have {newTodosComplete().length} to do
                    </p>
                    <button id="all" onClick={allTodo}>All</button>
                    <button id="active" onClick={activeTodo}> Active </button>
                    <button id="complete" onClick={completeTodo} > Complete </button>

                </div>
            }
        </>
    );
};

export default Footer;