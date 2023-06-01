import { useEffect, useState } from "react";
import InputField from "./components/InputField/InputField";
import Tasks from "./components/Tasks/Tasks";
import "./Home.css";

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
    <div className="container">
      <InputField taskArray={taskArray}
                  setTaskArray={setTaskArray}
                  filter={filter}
                  setFilter={setFilter} />
      <Tasks taskArray={taskArray}
             setTaskArray={setTaskArray}
             filter={filter} 
             setFilter={setFilter}/>
    </div>
  );
}

export default Home;
