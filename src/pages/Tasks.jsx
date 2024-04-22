import Container from "react-bootstrap/Container";
import Task from "../components/Task";

const Tasks = () => {
    const taskItems = [
        { task: 'laundry' },
        { task: 'take out trash' },
        { task: 'feed cat' },
        { task: 'work' }
    ];

    return(
        <div className='bg-dark text-light'>
            <Container>
                <h1>Tasks</h1>
                <ul>
                    {
                        taskItems.map((task) => (<li className='list-unstyled' key={task.task}><Task task={task.task} /></li>))
                    }
                </ul>

            </Container>
        </div>
    )
}

export default Tasks;