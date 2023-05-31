import { useState } from "react";
import InputField from "./components/InputField/InputField";
import Tasks from "./components/Tasks/Tasks";

const Home = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [filter, setFilter] = useState("default");
  return (
    <>
      <InputField taskArray={taskArray}
                  setTaskArray={setTaskArray}
                  setFilter={setFilter} />
      <Tasks taskArray={taskArray}
             setTaskArray={setTaskArray}
             filter={filter} 
             setFilter={setFilter}/>
    </>
  );
}

export default Home;
