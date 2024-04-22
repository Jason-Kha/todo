import {Form} from "react-bootstrap";
import PropTypes from "prop-types";

const Task = ({ task }) => {

    return (
        <>
            <Form.Check type='checkbox' name='task' label={<Form.Control className='bg-transparent text-light border-0' type="text" value={task} placeholder='Enter task' />} />
        </>
    )
}


Task.propTypes = {
    task: PropTypes.string.isRequired,
}

Task.defaultProps = {
    'task': ""
}

export default Task;