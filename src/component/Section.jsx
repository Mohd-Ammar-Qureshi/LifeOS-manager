import React from "react";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import SectionNine from "./SectionNine";

const Section = ({
  active,
  setActive,
  tasks,
  setTasks,
  typeCount,
  setTypeCount,
  theme,
  setTheme,
  setIsLoggedIn,
  fname,
  setfname,
  lname,
  setlname,
  email,
  setemail,
}) => {
  return (
    <div className="flex-6">
      <Navbar
        theme={theme}
        setTheme={setTheme}
        active={active}
        setActive={setActive}
      />

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
        {active === "settings" && (
          <SectionNine
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
        )}
      </div>
    </div>
  );
};

export default Section;
