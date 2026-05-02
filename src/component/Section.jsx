import React from "react";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";

const Section = ({ active, tasks, setTasks, typeCount, setTypeCount }) => {
  return (
    <div className="flex-6">
      <Navbar />

      <div className="flex">
        {active === "dashboard" && (
          <SectionOne tasks={tasks} typeCount={typeCount} />
        )}
        {active === "tasks" && (
          <SectionTwo
            tasks={tasks}
            setTasks={setTasks}
            typeCount={typeCount}
            setTypeCount={setTypeCount}
          />
        )}
        {active === "focus" && <SectionThree />}
      </div>
    </div>
  );
};

export default Section;
