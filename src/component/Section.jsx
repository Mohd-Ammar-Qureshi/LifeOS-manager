import React from "react";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";
import SectionSeven from "./SectionSeven";
import SectionSix from "./SectionSix";

const Section = ({
  active,
  tasks,
  setTasks,
  typeCount,
  setTypeCount,
  theme,
  setTheme,
}) => {
  return (
    <div className="flex-6">
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="flex">
        {active === "dashboard" && (
          <SectionOne tasks={tasks} typeCount={typeCount} theme={theme} />
        )}
        {active === "tasks" && (
          <SectionTwo
            tasks={tasks}
            setTasks={setTasks}
            typeCount={typeCount}
            setTypeCount={setTypeCount}
            theme={theme}
          />
        )}
        {active === "focus" && <SectionThree theme={theme} />}
        {active === "habits" && <SectionFour theme={theme} />}
        {active === "goals" && <SectionFive theme={theme} />}
        {active === "analytics" && <SectionSix theme={theme} />}
        {active === "notes" && <SectionSeven theme={theme} />}
        {active === "calendar" && <SectionEight theme={theme} />}
        {active === "settings" && <SectionNine theme={theme} />}
      </div>
    </div>
  );
};

export default Section;
