import { useEffect, useState } from "react";
import InputField from "./components/InputField/InputField";
import Tasks from "./components/Tasks/Tasks";

const Home = () => {
  const [taskArray, setTaskArray] = useState([]);
  const [filter, setFilter] = useState("default");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("taskArray"));
    if ( data !== null ) {
      setTaskArray(JSON.parse(localStorage.getItem("taskArray")))
    }
  }, []);
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
