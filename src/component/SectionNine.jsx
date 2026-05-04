import React from "react";
import { useState } from "react";

const SectionNine = ({ theme, setTheme }) => {
  const [name, setName] = useState("Mister");
  const [email, setEmail] = useState("mister@email.com");

  return (
    <div className="p-6 h-130 overflow-auto no-scrollbar max-w-4xl mx-auto text-black dark:text-white">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6">
        {/* PROFILE */}
        <div className="bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>

          <div className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            />
          </div>
        </div>

        {/* APPEARANCE */}
        <div className="bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold mb-4">Appearance</h2>

          <div className="flex gap-3">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded-xl ${
                theme === "light"
                  ? "bg-gray-200 text-black shadow"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              Light
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded-xl ${
                theme === "dark"
                  ? "bg-gray-700 text-white shadow"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              Dark
            </button>
          </div>
        </div>

        {/* APP PREFERENCES */}
        <div className="bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>

          <div className="flex justify-between items-center">
            <span>Enable Notifications</span>
            <input type="checkbox" />
          </div>

          <div className="flex justify-between items-center mt-3">
            <span>Auto Start Focus Mode</span>
            <input type="checkbox" />
          </div>
        </div>

        {/* LOGOUT */}
        <div className="bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex justify-between items-center">
          <span className="text-red-500 font-medium">Account</span>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
