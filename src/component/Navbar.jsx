import React from "react";
import { useState, useEffect } from "react";
import { Bell, Search, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  // Apply theme to HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className="flex w-full p-3 justify-between">
      <div className="flex-3">
        <h2 className="text-xl sm:text-2xl font-semibold truncate">
          Good Day, Mister! 👋
        </h2>
        <p className="text-gray-500 text-sm sm:text-base truncate">
          Let's make today amazing
        </p>
      </div>
      <div className="flex flex-8 flex-wrap justify-between">
        <div className="flex flex-2 items-center px-5">
          <span className="pr-2">
            {" "}
            <Search />{" "}
          </span>
          <input
            type="text"
            placeholder="Search tasks, notes..."
            className="w-full bg-[#0B0F1A] text-white border border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className=" flex flex-1 m-1 active:text-gray-500 justify-between  items-center">
          <div>
            <Bell />
          </div>

          <div className="flex">
            <div
              id="light"
              onClick={() => setTheme("light")}
              className={`p-2 rounded-lg transition ${
                theme === "light"
                  ? "bg-white text-black shadow"
                  : "text-gray-400"
              }`}
            >
              <Sun />
            </div>
            <div
              id="dark"
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-lg transition ${
                theme === "dark"
                  ? "bg-white text-black shadow"
                  : "text-gray-400"
              }`}
            >
              <Moon />
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
