import { useRef, useState } from "react";
import "./Task.css";
import Popup from "reactjs-popup";

const Task = ({task, taskArray, setTaskArray}) => {
    const pTag = useRef();
    const [editValue, setEditValue] = useState(task.task);

    const clicked = (e) => {
        task.completed = 1 - task.completed;
        console.log(pTag);
        if ( task.completed === 1 ) {
            pTag.current.style.textDecoration = "line-through";
        }
        else {
            pTag.current.style.textDecoration = "";

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

    const editTaskState = (event) => {
        console.log(event);
        setEditValue(event.target.value);
        console.log(editValue);
    }

    const changeTask = () => {
        if ( editValue !== "" && editValue.length <= 80 ) {
            task.task = editValue;
            pTag.current.textContent = editValue;
        }
    }
 
    return (
        <div className="wrapper">
            <div onClick={clicked}>
                <p ref={pTag} style={{textDecoration:strikeStyle}} >{task.task}</p>
            </div>
            {/* <button onClick={editTask}>Edit</button> */}
            <Popup trigger={<button>Edit</button>}
                    modal
                    >
                {close => (
                    <div className="modal">
                        <button className="close" onClick={close}>&times;</button>
                        <input type="text" defaultValue={task.task} onChange={editTaskState}/>
                        <button onClick={deleteTask}>Delete</button>
                        <button onClick={changeTask}>Change</button>
                    </div>
                )}
            </Popup>
        </div>
    );
}

export default Task;