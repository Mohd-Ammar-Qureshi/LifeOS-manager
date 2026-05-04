import React from "react";
import { useState, useEffect } from "react";
import { Bell, Search, Sun, Moon } from "lucide-react";

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className="flex w-full p-3 justify-between">
      <div className="flex-3">
        <h2 className="text-xl sm:text-2xl font-semibold truncate">
          Good Day, Mister! 👋
        </h2>
        <p className="text-gray-800 dark:text-gray-400 text-sm sm:text-base truncate">
          Let's make today amazing
        </p>
      </div>
      <div className="flex flex-8 flex-wrap justify-between">
        <div className="flex flex-2 items-center px-5">
          <span className="pr-2">
            <Search />
          </span>
          <input
            type="text"
            placeholder="Search tasks, notes..."
            className="w-full bg-gray-100 dark:bg-[#0B0F1A] text-black dark:text-white border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex flex-1 m-1  justify-between  items-center">
          <div className="active:text-gray-500">
            <Bell />
          </div>

          <div className="flex">
            <div
              onClick={() => setTheme("light")}
              className={`p-2 rounded-lg transition ${
                theme === "light"
                  ? "bg-gray-200 text-black shadow"
                  : "text-gray-400"
              }`}
            >
              <Sun size={20} />
            </div>

            <div
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-lg transition ${
                theme === "dark"
                  ? "bg-gray-700 text-white shadow"
                  : "text-black"
              }`}
            >
              <Moon size={20} />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl truncate transition">
            + Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
