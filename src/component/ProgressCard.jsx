import React from "react";

const ProgressCard = (props) => {
  return (
    <div className={`w-3xs p-1 rounded-2xl ${props.bgColor}`}>
      <div className="flex gap-2 p-2 items-center">
        <img
          className="w-13 h-13 rounded-full object-cover border-2 border-gray-300 shadow"
          src={props.tasksImg}
          alt="emoji"
        />
        <div className="flex flex-col m-1 items-center">
          <p className="text-xl font-bold">{props.tasksText}</p>
          <p className="p2 text-2xl font-bold">{props.tasksCount}</p>{" "}
          <p className="p3">Tasks</p>
        </div>
      </div>
      <div className=" p-2">
        <div className="flex px-1 justify-between items-center">
          <div className="w-4/5 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${props.tasksper}%` }}
            ></div>
          </div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right-icon lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
        <span>{props.tasksper}</span>completed
      </div>
    </div>
  );
};

export default ProgressCard;
