import React from "react";

const SectionFour = () => {
  return (
    <div className="flex w-full gap-4 p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* LEFT → STATS */}
      <div className="flex-1 bg-white dark:bg-[#0B0F1A] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <h2 className="text-lg font-semibold mb-4">Habit Progress</h2>

        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Today</p>
          <h1 className="text-4xl font-bold">3 / 5</h1>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Consistency</span>
            <span>78%</span>
          </div>
          <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
            <div className="bg-green-500 h-2 rounded-full w-[78%]"></div>
          </div>
        </div>
      </div>

      {/* RIGHT → HABIT LIST */}
      <div className="flex-2 h-117 overflow-auto no-scrollbar bg-white dark:bg-[#0B0F1A] rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Daily Habits</h2>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white">
            + Add Habit
          </button>
        </div>

        <div className="space-y-3">
          {/* Habit Item */}
          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
            <div>
              <p className="font-medium">Read Quran</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Daily • 20 min
              </p>
            </div>

            <button className="w-6 h-6 rounded-full border-2 border-green-500 flex items-center justify-center">
              ✓
            </button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl bg-gray-100 dark:bg-gray-800">
            <div>
              <p className="font-medium">Workout</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Daily • 30 min
              </p>
            </div>

            <button className="w-6 h-6 rounded-full border-2 border-gray-400"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
