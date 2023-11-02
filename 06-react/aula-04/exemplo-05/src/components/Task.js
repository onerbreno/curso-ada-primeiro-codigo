import { Link } from "react-router-dom";

function Task(props){

    return(
        
        <li><Link to={`tasks/${props.id}`}>{props.title}</Link></li>
    )
}

export default Task;