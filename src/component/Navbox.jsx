import React from "react";
import { useState } from "react";
import {
  House,
  CalendarCheck,
  LampDesk,
  SportShoe,
  Goal,
  ChartColumnIncreasing,
  BookHeart,
  CalendarDays,
  Settings,
  EllipsisVertical,
} from "lucide-react";

const Navbox = ({ setActive, active }) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: House },
    { id: "tasks", label: "Tasks", icon: CalendarCheck },
    { id: "focus", label: "Focus Mode", icon: LampDesk },
    { id: "habits", label: "Habits", icon: SportShoe },
    { id: "goals", label: "Goals", icon: Goal },
    { id: "analytics", label: "Analytics", icon: ChartColumnIncreasing },
    { id: "notes", label: "Notes", icon: BookHeart },
    { id: "calendar", label: "Calendar", icon: CalendarDays },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  return (
    <>
      <div className="p-2 bg-gray-200 dark:bg-[#0d121d] rounded-2xl flex flex-1 flex-col justify-between h-screen">
        <div>
          <div className="flex items-center text-2xl font-bold p-5">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6D5DFC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* <!-- Outer Circle (Life/System) --> */}
              <circle cx="12" cy="12" r="10" />
              {/* <!-- Pulse Line (Focus / Activity) --> */}
              <path d="M4 12h4l2-4 4 8 2-4h4" />
              {/* <!-- Small Grid Dot --> */}
              <circle cx="12" cy="6" r="1" />
            </svg>
            LifeOS
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 m-1 rounded-xl py-2 px-5 cursor-pointer transition ${
                  active === item.id
                    ? "bg-indigo-700 text-white"
                    : "dark:text-gray-400 hover:bg-indigo-500 hover:text-white"
                }`}
              >
                <Icon size={20} />
                {item.label}
              </div>
            );
          })}
        </div>
        <div onClick={() => setActive("settings")}>
          <div className="flex items-center py-2 px-2 gap-2">
            <div className="w-12 h-12">
              <img
                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 shadow"
                src="https://thumbs.dreamstime.com/b/woman-praying-free…ng-free-birds-enjoying-nature-sunset-99680945.jpg"
                alt="profile"
              />
            </div>
            <div>
              <p className="text-sm font-bold truncate">Mohd Ammar</p>
              <p className="text-xs text-gray-500 truncate">stay Productive!</p>
            </div>
            <div>
              <EllipsisVertical
                size={16}
                strokeWidth={1.25}
                absoluteStrokeWidth
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbox;
