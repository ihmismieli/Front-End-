import { useState } from "react";
import TodoTable from "./TodoTable";
function TodoList() {

    const [todo, setTodo] = useState({
        description: "",
        date: "",
        priority: ""
    });

    const [todos, setTodos] = useState([]);


    const handleAdd = () => {

        if (!todo.description.trim()) {
            alert("Type description first!")
        } else {
            setTodos([todo, ...todos]);
            //kun halutaan asettaa arvot tyhjiksi
            setTodo({ description: "", date: "", priority: "" });
        }

    }

    const handleDelete = (row) => {
        //filtteri iteroi läpi funktion, palauttaa boolean arvon, jos se on false niin se ei palauta sitä arvoa ja poistaa sen listasta
        //asetetaan todos.filter(todo, index) setTodos, jotta saadaan tietty todo poistettua ja loput näytettyä
        //jos elementin index on eri kuin row, se säilytetään
        setTodos(todos.filter((todo, index) => index != row));
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
                type="text"
                placeholder="Priority"
                value={todo.priority}
                onChange={event => setTodo({ ...todo, priority: event.target.value })}
            />
            <input
                type="date"
                placeholder="Date"
                value={todo.date}
                onChange={event => setTodo({ ...todo, date: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>

            <TodoTable handleDelete={handleDelete} todos={todos} />
        </>
    );
}

export default TodoList;

