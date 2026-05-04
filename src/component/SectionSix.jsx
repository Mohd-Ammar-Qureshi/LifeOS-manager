import React from "react";

const SectionSix = () => {
  return (
    <div className="p-4 w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* TOP STATS */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="p-4 bg-white dark:bg-[#0B0F1A] rounded-2xl shadow">
          <p className="text-sm text-gray-500">Focus Time</p>
          <h2 className="text-2xl font-bold">2h 30m</h2>
        </div>

        <div className="p-4 bg-white dark:bg-[#0B0F1A] rounded-2xl shadow">
          <p className="text-sm text-gray-500">Sessions</p>
          <h2 className="text-2xl font-bold">4</h2>
        </div>

        <div className="p-4 bg-white dark:bg-[#0B0F1A] rounded-2xl shadow">
          <p className="text-sm text-gray-500">Completion</p>
          <h2 className="text-2xl font-bold">66%</h2>
        </div>
      </div>

      {/* WEEKLY CHART (simple) */}
      <div className="bg-white dark:bg-[#0B0F1A] p-4 rounded-2xl shadow mb-4">
        <h3 className="mb-3 font-semibold">Weekly Focus</h3>

        <div className="flex items-end gap-2 h-32">
          {[40, 80, 30, 90, 60, 20, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gray-300 dark:bg-gray-700 rounded"
            >
              <div
                className="bg-blue-500 rounded"
                style={{ height: `${h}%` }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="bg-white dark:bg-[#0B0F1A] p-4 rounded-2xl shadow">
        <h3 className="mb-3 font-semibold">Insights</h3>

        <p className="text-gray-600 dark:text-gray-400">
          🔥 Your most productive day is Thursday.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          ⚡ You focus better in the morning.
        </p>
      </div>
    </div>
  );
};

export default SectionSix;
