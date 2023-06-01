import Task from "../Task/Task";
import "./Tasks.css";

const Tasks = ({taskArray, setTaskArray, filter}) => {

    return (
        <div className="taskContainer">
            { taskArray.map((task, i) => {
                if ( (filter === "completed" && task.completed === 1) ||
                    (filter === "incomplete" && task.completed === 0) ||
                    (filter === "default")
                ) {
                    return (
                        <Task task={task} taskArray={taskArray} setTaskArray={setTaskArray} key={i}/>
                    );
                }
                    return null;
            }) }
        </div>
    );
}
export default Tasks;