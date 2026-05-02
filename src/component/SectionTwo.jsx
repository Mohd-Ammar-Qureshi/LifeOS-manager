import React, { useState, useEffect } from "react";

const SectionTwo = ({ tasks, setTasks, typeCount, setTypeCount }) => {
  const [inputType, setInputType] = useState("");
  const [inputTask, setInputTask] = useState("");
  const [inputTime, setInputTime] = useState("");
  const [InputDetails, setInputDetails] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Add / Update Task
  const handleAddTask = () => {
    if (!inputTask.trim() || !inputType.trim() || !inputTime.trim()) return;

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newTask = {
      type: inputType,
      task: inputTask,
      time: inputTime,
      details: InputDetails,
      date: formattedDate,
    };

    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = newTask;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks((prev) => [...prev, newTask]);
    }
    setInputTask("");
    setInputType("");
    setInputTime("");
    setInputDetails("");
  };

  // Delete Task
  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Edit Task
  const handleEdit = (index) => {
    setInputTask(tasks[index].task);
    setInputType(tasks[index].type);
    setInputTime(tasks[index].time);
    setInputDetails(tasks[index].details);
    setEditIndex(index);
  };
  useEffect(() => {
    const count = tasks.reduce((acc, item) => {
      const type = item.type || "Other";
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    setTypeCount(count); // ✅ send to parent
  }, [tasks]);
  return (
    <div className="flex gap-6 w-full p-6">
      {/* LEFT - ADD TASK */}
      <div className="w-1/3 bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-xl mb-4">Add Task</h2>

        <div className="w-full flex gap-2 mb-4">
          <input
            type="text"
            list="taskTypes"
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            placeholder="Select type"
            className="w-full p-3 rounded-xl bg-gray-800 outline-none"
          />

          <datalist id="taskTypes">
            <option value="Deep Work" />
            <option value="Quick Task" />
            <option value="Goal" />
            <option value="Habit" />
          </datalist>
        </div>
        <div className="w-full flex gap-2 mb-4">
          <input
            type="text"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
            placeholder="Enter Task..."
            className="w-full p-3 rounded-xl bg-gray-800 outline-none"
          />
        </div>
        <div className="w-full flex gap-2 mb-4">
          <input
            type="time"
            value={inputTime}
            onChange={(e) => setInputTime(e.target.value)}
            placeholder="Type(Deep Work,Quick, Goal, Habits...)"
            className="w-1/2 p-3 rounded-xl bg-gray-800 outline-none"
          />

          <input
            type="text"
            value={InputDetails}
            onChange={(e) => setInputDetails(e.target.value)}
            placeholder="Enter Details..."
            className="w-1/2 p-3 rounded-xl bg-gray-800 outline-none"
          />
        </div>

        <button
          onClick={handleAddTask}
          className="w-full bg-blue-600 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </div>

      {/* RIGHT - TASK LIST */}
      <div className="w-2/3 h-117 overflow-auto no-scrollbar bg-gray-900 p-6 rounded-2xl">
        <h2 className="text-xl mb-4">My Tasks</h2>
        <div className="mb-4 flex gap-3 flex-wrap">
          {Object.entries(typeCount).map(([type, count]) => (
            <div
              key={type}
              className="px-3 py-1 bg-indigo-600 rounded-full text-sm"
            >
              {type} ({count})
            </div>
          ))}
        </div>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet</p>
        ) : (
          <div className="flex flex-col gap-3">
            {tasks.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-800 p-3 rounded-xl"
              >
                {/* Task Info */}
                <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-md">
                  {/* Top Row */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="bg-gray-800 px-2 py-1 rounded-lg">
                      {item.type}
                    </span>
                    <span>{item.date}</span>
                  </div>

                  {/* Task Title */}
                  <h2 className="text-lg font-semibold mt-2">{item.task}</h2>

                  {/* Time */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    ⏰ <span>{item.time}</span>
                  </div>

                  {/* Details */}
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="px-3 py-1 bg-yellow-500 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="px-3 py-1 bg-red-500 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTwo;
