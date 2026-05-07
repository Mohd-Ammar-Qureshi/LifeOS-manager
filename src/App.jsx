import { useState, useEffect } from "react";
import Navbox from "./component/Navbox";
import Section from "./component/Section";
import Login from "./component/Login";

function App() {
  const [active, setActive] = useState("dashboard"); //shared state
  const [tasks, setTasks] = useState([]);
  const [typeCount, setTypeCount] = useState({});
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    const fname = JSON.parse(localStorage.getItem("fname"));
    if (fname) setfname(fname);
  }, []);
  useEffect(() => {
    localStorage.setItem("fname", JSON.stringify(fname));
  }, [fname]);

  useEffect(() => {
    const lname = JSON.parse(localStorage.getItem("lname"));
    if (lname) setlname(lname);
  }, []);
  useEffect(() => {
    localStorage.setItem("lname", JSON.stringify(lname));
  }, [lname]);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (email) setemail(email);
  }, []);
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    const count = tasks.reduce((acc, item) => {
      const type = item.type || "Other";
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    setTypeCount(count);
  }, [tasks]); // ✅ ONLY depend on tasks
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return IsLoggedIn ? (
    <div className="min-h-screen min-w-screen flex bg-white dark:bg-[#0B0F1A] text-black dark:text-white overflow-auto">
      <Navbox
        active={active}
        setActive={setActive}
        theme={theme}
        fname={fname}
        setfname={setfname}
        lname={lname}
        setlname={setlname}
        email={email}
        setemail={setemail}
      />
      <Section
        active={active}
        setActive={setActive}
        tasks={tasks}
        setTasks={setTasks}
        typeCount={typeCount}
        setTypeCount={setTypeCount}
        theme={theme}
        setTheme={setTheme}
        setIsLoggedIn={setIsLoggedIn}
        fname={fname}
        setfname={setfname}
        lname={lname}
        setlname={setlname}
        email={email}
        setemail={setemail}
      />
    </div>
  ) : (
    <div>
      <Login
        setIsLoggedIn={setIsLoggedIn}
        theme={theme}
        fname={fname}
        setfname={setfname}
        lname={lname}
        setlname={setlname}
        email={email}
        setemail={setemail}
      />
    </div>
  );
}

export default App;
