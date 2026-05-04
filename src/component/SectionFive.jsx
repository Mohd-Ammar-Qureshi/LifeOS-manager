import React from "react";

const SectionFive = () => {
  return (
    <div className="flex  w-full gap-4 p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* LEFT → OVERVIEW */}
      <div className="flex-1 bg-white dark:bg-[#0B0F1A] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <h2 className="text-lg font-semibold mb-4">Goals Overview</h2>

        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Completed</p>
          <h1 className="text-4xl font-bold">2 / 6</h1>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full w-[35%]"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Personal</span>
            <span>60%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Career</span>
            <span>40%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Health</span>
            <span>20%</span>
          </div>
        </div>
      </div>

      {/* RIGHT → GOALS LIST */}
      <div className="flex-2 bg-white dark:bg-[#0B0F1A] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Goals</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white">
            + Add Goal
          </button>
        </div>

        <div className="space-y-4">
          {/* Goal Card */}
          <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">Build UI OS Project</p>
              <span className="text-sm text-blue-500">In Progress</span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Deadline: May 30
            </p>

            {/* Progress */}
            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full w-[70%]"></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
            <div className="flex justify-between items-center mb-2">
              <p className="font-medium">Workout 90 Days</p>
              <span className="text-sm text-green-500">Completed</span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Completed
            </p>

            <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
