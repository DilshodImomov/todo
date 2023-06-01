import { useRef, useState } from "react";
import "./Task.css";
import Popup from "reactjs-popup";
import menuImg from "./menu.png";
import Tasks from "../Tasks/Tasks";

const Task = ({task, taskArray, setTaskArray}) => {
    const pTag = useRef();
    const checkbox = useRef();
    const [editValue, setEditValue] = useState(task.task);

    const clicked = (e) => {
        task.completed = 1 - task.completed;
        console.log(task);
        if ( task.completed === 1 ) {
            pTag.current.style.textDecoration = "line-through";
            checkbox.current.checked = "true";
        }
        else {
            pTag.current.style.textDecoration = "";
            checkbox.current.checked = "";
            console.log(checkbox);
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
                            <div className="buttons">
                                <button onClick={() => {
                                    close();
                                    deleteTask();
                                }}>Delete</button>
                                <button onClick={changeTask}>Change</button>
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