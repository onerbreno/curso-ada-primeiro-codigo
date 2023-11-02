import tasks from '../tasks.json';
import Task from "./Task";
function TaskList(){


    return(
        <ul>
            {tasks.map(task => <Task key={task.id} id={task.id} title={task.title}/>)}
        </ul>
    )
}

export default TaskList;