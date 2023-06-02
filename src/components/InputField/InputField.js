import { useRef, useState } from "react";
import "./InputField.css"

const InputField = ({taskArray, setTaskArray, setFilter, filter}) => {
    const [InputField, setInputField] = useState("");
    const [error, setError] = useState("");
    const input = useRef();

    const Submit = () => {
        if ( InputField === "" ) {
            setError("* Task cannot be empty!");
            return;
        }
        if ( InputField.length > 50 ) {
            setError("* Task cannot exceed 50 characters!");
            return;
        }
        const task = {
            "task": InputField,
            "completed": 0
        };
        setTaskArray( (tasks) => [...tasks, task] );
        input.current.value = "";
        setInputField("");
        setError("");
        console.log(taskArray);
    };

    const saveToStorage = () => {
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
    }

    return (
        <div>
            <input className="task-input" placeholder="Add a new task" ref={input} type="text" onChange={(event) => {
                setInputField(event.target.value);
            }} onKeyDown={ (event) => {
                if ( event.key === "Enter" ) {
                    Submit();
                }
            } }/>
            <p className="error">{error}</p>
            <div className="links">
                <p
                onClick={() => {setFilter("default");}}
                className={`${filter==="default"?"active":""}`}>All</p>
                <p 
                onClick={() => {setFilter("incomplete");}}
                className={`${filter==="incomplete"?"active":""}`}>Incomplete</p>
                <p 
                onClick={() => {setFilter("completed");}}
                className={`${filter==="completed"?"active":""}`}>Completed</p>
                <button onClick={saveToStorage}>Save</button>
            </div>
            <hr />

        </div>
    );
}
export default InputField;