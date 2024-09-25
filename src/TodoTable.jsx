
function TodoTable(props) {
    //saadaan propseilla välitettyä todos todotabliin
    //indexillä saadaan määrättyä mikä todo poistetaan
    return (
        <table>
            <tbody>
                <tr>
                    <th>Task</th>
                    <th>Date</th>
                </tr>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => props.handleDelete(index)}>Done</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoTable;