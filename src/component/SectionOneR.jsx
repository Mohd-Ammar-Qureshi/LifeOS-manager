import { Timer } from "lucide-react";
import React, { useEffect, useState } from "react";

const SectionOneR = () => {
  const [time, settime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      settime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const formatDate = time.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const formatTime = time.toLocaleTimeString("en-IN");

  return (
    <div className="w-2/9 flex flex-col gap-4">
      {/* Clock */}
      <div
        className={`dark:bg-[#0d121d] shadow-[0_5px_40px_rgba(0,0,0,0.1)] py-5 rounded-2xl text-center`}
      >
        <p className="text-sm text-gray-400">{formatDate}</p>
        <h2 className="text-xl font-semibold">{formatTime}</h2>
      </div>
      {/* Focus */}
      <div
        className={`gap-1 dark:bg-[#0d121d] shadow-[0_5px_40px_rgba(0,0,0,0.1)] py-4 px-2 rounded-2xl`}
      >
        <div className={`py-1 border-b-2 border-gray-100 dark:border-gray-400`}>
          <h3 className={`text-sm text-gray-700 dark:text-gray-400`}>
            finished Focus
          </h3>
          <p className="mt-2 font-semibold">Build Dashboard UI 🚀</p>
        </div>
        <div className={`py-1 border-b-2 border-gray-100 dark:border-gray-400`}>
          <h3 className={`text-sm text-gray-700 dark:text-gray-400`}>
            Today's Focus
          </h3>
          <p className="mt-2 font-semibold">Build Tasks UI 🚀</p>
        </div>
      </div>

      <div
        className={`dark:bg-[#0d121d] shadow-[0_5px_40px_rgba(0,0,0,0.1)] py-4 px-2 rounded-2xl`}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center">
          <span className={`text-sm text-gray-400`}>Tasks Done</span>
          <span className={`text-sm text-gray-400`}>40%</span>
        </div>

        {/* Main Value */}
        <div className="text-lg font-semibold mt-1">
          8 <span className={`text-gray-400 text-sm`}>/ 20</span>
        </div>

        {/* Progress Bar */}
        <div className={`w-full h-2 mt-3`}>
          <div
            className={`h-full bg-blue-500 rounded-full`}
            style={{ width: "40%" }}
          ></div>
        </div>
      </div>
      {/* Actions */}
      {/* <div
        className={`bg-[${boxbgcolor}] py-4 px-2 rounded-2xl flex flex-col gap-2 mt-auto`}
      >
        <button className="py-4 px-2 rounded-xl">Start Focus</button>
      </div> */}
    </div>
  );
};

export default SectionOneR;
