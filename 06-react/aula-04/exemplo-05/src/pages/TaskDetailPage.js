import tasks from '../tasks.json';
import { Link, useParams } from 'react-router-dom';
function TaskDetailPage(){

    const { taskId } = useParams();
    const task = tasks.find(t=> t.id == taskId);

    return(
        <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}
export default TaskDetailPage;