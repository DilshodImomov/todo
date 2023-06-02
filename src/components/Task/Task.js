import { useRef, useState } from "react";
import "./Task.css";
import Popup from "reactjs-popup";
import menuImg from "./menu.png";

const Task = ({task, taskArray, setTaskArray}) => {
    const pTag = useRef();
    const checkbox = useRef();
    const [editValue, setEditValue] = useState(task.task);
    const [error, setError] = useState("");

    const clicked = (e) => {
        task.completed = 1 - task.completed;
        if ( task.completed === 1 ) {
            pTag.current.style.textDecoration = "line-through";
            checkbox.current.checked = "true";
        }
        else {
            pTag.current.style.textDecoration = "";
            checkbox.current.checked = "";
        }
    }

    const deleteTask = () => {
        setTaskArray( taskArray.filter(taskItem => taskItem !== task) );
    };
    let strikeStyle = "";
    if (task.completed === 1) {
        strikeStyle = "line-through";
    }

    const editTaskState = (event) => {
        setEditValue(event.target.value);
    }

    const changeTask = (close) => {
        if ( editValue === "" ) {
            setError("* Task cannot be empty!");
        }
        else if ( editValue.length > 50 ) {
            setError("* Task cannot exceed 50 characters!");
        }
        else {
            setError("");
            task.task = editValue;
            pTag.current.textContent = editValue;
            close();
        }
    }
 
    return (
        <div className="taskRow">
            <div className="wrapper">
                <input ref={checkbox} type="checkbox" defaultChecked={task.completed} onClick={clicked} key={Math.random()}/>
                <div className="taskBlock" onClick={clicked}>
                    <p ref={pTag} style={{textDecoration:strikeStyle}} >{task.task}</p>
                </div>
                {/* <button onClick={editTask}>Edit</button> */}
                <Popup trigger={<img className="menuImg" src={menuImg} alt="" />}
                        modal
                        >
                    {close => (
                        <div className="modal">
                            <button className="close" onClick={close}>&times;</button>
                            <input type="text" defaultValue={task.task} onChange={editTaskState}/>
                            <p className="error">{error}</p>
                            <div className="buttons">
                                <button onClick={() => {
                                    deleteTask();
                                    close()
                                }}>Delete</button>
                                <button onClick={() => {
                                    changeTask(close);
                                }}>Change</button>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
            <hr />
        </div>
    );
}

export default Task;