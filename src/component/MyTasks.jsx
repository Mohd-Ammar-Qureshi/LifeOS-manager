import React from "react";

const MyTasks = ({ task, per }) => {
  return (
    <div
      className="min-w-62.5 h-45 p-4 rounded-[18px] text-white relative
 bg-[linear-gradient(145deg,#111827,#0b1220)] shadow-[0_10px_25px_rgba(0,0,0,0.5),inset_0_0_0.5px_rgba(255,255,255,0.1)]"
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
        <div className="text-sm m-1 text-gray-600">📅{task.date}</div>
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Outer circle (progress background) */}
          <div className="absolute inset-0 rounded-full bg-gray-700"></div>

          {/* Progress circle */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#8b5cf6 ${per}%, #1f2937 0%)`,
            }}
          ></div>
          {/* Inner circle */}
          <div className="w-9 h-9 bg-[#0b1220] rounded-full flex items-center justify-center z-10">
            <span className="text-xs font-bold text-white">{per}</span>
            {/* change in later  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
