import React from "react";
import ProgressCard from "./ProgressCard";

const ProgressCardBox = ({ typeCount }) => {
  const gradients = {
    deepWork: "bg-gradient-to-br from-indigo-600 via-purple-600 to-slate-900",
    quickTasks: "bg-gradient-to-br from-cyan-500 via-teal-500 to-slate-900",
    goalsAchive: "bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-900",
    habitsProgres:
      "bg-gradient-to-br from-amber-500 via-orange-600 to-slate-900",
  };

  return (
    <div className="flex flex-1 p-2 gap-2">
      <ProgressCard
        tasksText={"Deep Work"}
        tasksCount={typeCount["Deep Work"] || 0}
        tasksper={"40%"}
        tasksImg={"/src/assets/DeepWork.png"}
        bgColor={gradients.deepWork}
      />
      <ProgressCard
        tasksText={"Quick Tasks"}
        tasksCount={typeCount["Quick Task"] || 0}
        tasksper={"40%"}
        tasksImg={"/src/assets/QuickTasks.jpeg"}
        bgColor={gradients.quickTasks}
      />
      <ProgressCard
        tasksText={"Goals"}
        tasksCount={typeCount["Goal"] || 0}
        tasksper={73}
        tasksImg={"/src/assets/Goals.png"}
        bgColor={gradients.goalsAchive}
      />
      <ProgressCard
        tasksText={"Habits"}
        tasksCount={typeCount["Habite"] || 0}
        tasksImg={"/src/assets/Habits.png"}
        bgColor={gradients.habitsProgres}
        tasksper={80}
      />
    </div>
  );
};

export default ProgressCardBox;
