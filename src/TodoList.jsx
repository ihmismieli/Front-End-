import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [todo, setTodo] = useState({
        description: "",
        date: ""
    });

    const [todos, setTodos] = useState([]);

    const handleAdd = () => {

        if (!todo.description.trim()) {
            alert("Type description first!")
        } else {
            setTodos([todo, ...todos]);
            //kun halutaan asettaa arvot tyhjiksi
            setTodo({description: "", date: ""});
        }

    }

    return (
        <>
            <h3>My Todos</h3>
            <input
                type="text"
                placeholder="Description"
                value={todo.description}
                onChange={event => setTodo({ ...todo, description: event.target.value })}
            />
            <input
                type="date"
                placeholder="Date"
                value={todo.date}
                onChange={event => setTodo({ ...todo, date: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>
            <TodoTable todos={todos}/>
        </>
    );
}

export default TodoList;