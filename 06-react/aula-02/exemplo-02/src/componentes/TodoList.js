import Task from "./Task";

const TodoList = () => {
    return(
        <div className="todo-list">
            <Task name="Criar o primeiro programa de computador da história"/>
            <Task name="Escrever contribuições para o desenvolvimento da teoria da computação"/>
            <Task name="Incentivar o desenvolvimento de computadores"/>
        </div>
    )
}

export default TodoList;