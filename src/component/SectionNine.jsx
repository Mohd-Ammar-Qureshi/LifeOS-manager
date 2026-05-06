import React from "react";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const SectionNine = ({
  theme,
  setTheme,
  setIsLoggedIn,
  fname,
  setfname,
  lname,
  setlname,
  email,
  setemail,
}) => {
  // const [name, setName] = useState("Mister");
  // const [email, setEmail] = useState("mister@email.com");
  const name = fname + " " + lname;
  return (
    <div className="p-6 h-130 overflow-auto no-scrollbar max-w-4xl mx-auto text-black dark:text-white">
      {/* TITLE */}
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-4">
        {/* PROFILE */}
        <div className="bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>

          <div className="space-y-3">
            <div className="flex gap-2">
              <div>
                <label htmlFor="fname">first Name</label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                  className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
                />
              </div>
              <div>
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                  className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
                />
              </div>
            </div>
            <label htmlFor="fname">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-100 dark:bg-gray-800"
            />
          </div>
        </div>

        {/* APPEARANCE */}
        <div className="flex bg-white dark:bg-[#0B0F1A] p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold mr-5">Appearance</h2>

          <div className="flex gap-3">
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

          <button
            onClick={() => {
              localStorage.removeItem("user");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNine;
