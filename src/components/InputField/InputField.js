import { useRef, useState } from "react";

const InputField = ({taskArray, setTaskArray, setFilter}) => {
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

    const sortTasks = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div>
            <input ref={input} type="text" onChange={(event) => {
                setInputField(event.target.value);
            }} onKeyDown={ (event) => {
                if ( event.key === "Enter" ) {
                    Submit();
                }
            } }/>
            <select onChange={sortTasks}>
                <option value="default">Default</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    );
}
export default InputField;