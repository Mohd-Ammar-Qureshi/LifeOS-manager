import React from "react";
import { useState, useEffect } from "react";

const SectionSeven = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load notes
  useEffect(() => {
    const saved = localStorage.getItem("notes_data");
    if (saved) setNotes(JSON.parse(saved));
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes_data", JSON.stringify(notes));
  }, [notes]);

  // Save or Update
  const handleSave = () => {
    if (!title.trim() && !note.trim()) return;

    if (editId) {
      // UPDATE
      const updated = notes.map((n) =>
        n.id === editId ? { ...n, title, text: note } : n,
      );
      setNotes(updated);
      setEditId(null);
    } else {
      // NEW NOTE
      const newNote = {
        id: Date.now(),
        title,
        text: note,
        date: new Date().toLocaleString(),
      };
      setNotes([newNote, ...notes]);
    }

    setTitle("");
    setNote("");
  };

  // Edit
  const handleEdit = (n) => {
    setTitle(n.title);
    setNote(n.text);
    setEditId(n.id);
  };

  // Delete
  const handleDelete = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="p-4 w-full h-130 overflow-auto no-scrollbar flex gap-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      {/* INPUT */}
      <div className="bg-white dark:bg-[#0B0F1A] p-4 rounded-2xl shadow">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title..."
          className="w-full mb-2 p-2 rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none"
        />

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note..."
          className="w-full h-28 p-3 rounded-xl bg-gray-100 dark:bg-gray-800 resize-none focus:outline-none"
        />

        <div className="flex justify-end mt-3 gap-2">
          {editId && (
            <button
              onClick={() => {
                setEditId(null);
                setTitle("");
                setNote("");
              }}
              className="px-3 py-2 rounded-xl bg-gray-300 dark:bg-gray-700"
            >
              Cancel
            </button>
          )}

          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white"
          >
            {editId ? "Update Note" : "Save Note"}
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="flex-1 overflow-y-auto space-y-3">
        {notes.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No notes yet
          </p>
        )}

        {notes.map((n) => (
          <div
            key={n.id}
            className="bg-white dark:bg-[#0B0F1A] p-4 rounded-2xl shadow"
          >
            <h3 className="font-semibold text-lg mb-1">
              {n.title || "Untitled"}
            </h3>

            <p className="mb-2 text-sm whitespace-pre-wrap">{n.text}</p>

            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
              <span>{n.date}</span>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(n)}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(n.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSeven;
