import { useState, useEffect } from "react";
import Navbox from "./component/Navbox";
import Section from "./component/Section";

function App() {
  const [active, setActive] = useState("dashboard"); //shared state
  const [tasks, setTasks] = useState([]);
  const [typeCount, setTypeCount] = useState({});
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className="min-h-screen min-w-screen flex bg-[#0B0F1A] text-gray-100 overflow-auto">
      <Navbox active={active} setActive={setActive} />
      <Section
        active={active}
        tasks={tasks}
        setTasks={setTasks}
        typeCount={typeCount}
        setTypeCount={setTypeCount}
      />
    </div>
  );
}

export default App;
