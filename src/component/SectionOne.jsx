import React from "react";
import MyTasks from "./MyTasks";
import ProgressCardBox from "./ProgressCardBox";
import SectionOneR from "./SectionOneR";
import { TextAlignJustify, LayoutGrid } from "lucide-react";
const SectionOne = ({ tasks, typeCount, theme }) => {
  return (
    <>
      <div className="w-3/4 flex flex-col " id="dashboard">
        <ProgressCardBox typeCount={typeCount} theme={theme} />
        <div className="flex flex-col">
          <div className="flex p-3 items-center justify-between">
            <div className="font-bold text-lg">My Tasks</div>
            <div className="flex gap-1">
              <div className="bg-gray-100 dark:bg-[#0d121d] p-2 rounded-2xl">
                View All
              </div>
              <span className="bg-gray-100 dark:bg-gray-950 p-2 rounded-xl">
                <LayoutGrid />
              </span>
              <span className="bg-gray-100 dark:bg-gray-950 p-2 rounded-xl">
                <TextAlignJustify />
              </span>
            </div>
          </div>
          <div className="flex px-10 flex-wrap mr-auto flex-row-reverse gap-2 h-60 overflow-y-auto no-scrollbar scroll-smooth">
            {tasks.map((item) => (
              <MyTasks key={item.id} task={item} per={40} theme={theme} />
            ))}
          </div>
        </div>
      </div>
      <SectionOneR theme={theme} />
    </>
  );
};

export default SectionOne;
