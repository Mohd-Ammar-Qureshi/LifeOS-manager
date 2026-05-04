import React from "react";

const MyTasks = ({ task, per }) => {
  return (
    <div
      className="min-w-62.5 h-45 p-4 rounded-[18px] relative
      bg-gray-100 dark:bg-[linear-gradient(145deg,#111827,#0b1220)] shadow-[0_5px_10px_rgba(0,0,0,0.5),inset_0_0_0.5px_rgba(255,255,255,0.1)]"
    >
      <div className="flex justify-between items-center">
        <input type="checkbox" />
        <div className="cursor-pointer">⋮</div>
      </div>
      <div className="text-lg">{task.task}⭐</div>
      <span className="inline-block m-1 px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 mb-3">
        {task.type}
      </span>
      <div className="flex justify-between items-center">
        <div className="text-sm m-1 text-gray-800 dark:text-gray-400">
          📅{task.date}
        </div>
        <div className="text-sm m-1 text-gray-800 dark:text-gray-400">
          &#x23F0;{task.time}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
