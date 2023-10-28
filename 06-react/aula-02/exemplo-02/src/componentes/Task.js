import PropTypes from 'prop-types';

const Task = (props) => {
    return(
        <div className="task">
            <input type="checkbox" id="task1"/>
            <p>{props.name}</p>
        </div>
    )
}

Task.propTypes  = {
    name: PropTypes.string.isRequired
};


export default Task;