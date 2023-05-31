import "./Task.css";
const Task = ({task, taskArray, setTaskArray}) => {

    const clicked = (e) => {
        task.completed = 1 - task.completed;
        let target = e.target;
        if ( target.firstElementChild !== null ) {
            target = target.firstElementChild;
        }
        if ( task.completed === 1 ) {
            target.style.textDecoration = "line-through";
        }
        else {
            target.style.textDecoration = "";

        }
        console.log(e);
    }

    const deleteTask = () => {
        setTaskArray( taskArray.filter(taskItem => taskItem !== task) );
    };
    let strikeStyle = "";
    if (task.completed === 1) {
        strikeStyle = "line-through";
    }

    return (
        <div className="wrapper">
            <div onClick={clicked}>
                <p style={{textDecoration:strikeStyle}} >{task.task}</p>
            </div>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
}

export default Task;