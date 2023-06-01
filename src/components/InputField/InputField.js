import { useRef, useState } from "react";
import "./InputField.css"

const InputField = ({taskArray, setTaskArray, setFilter, filter}) => {
    const [InputField, setInputField] = useState("");
    const input = useRef();

    const Submit = () => {
        if ( InputField === "" || InputField.length > 80 ) {
            return;
        }
        const task = {
            "task": InputField,
            "completed": 0
        };
        setTaskArray( (tasks) => [...tasks, task] );
        input.current.value = "";
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