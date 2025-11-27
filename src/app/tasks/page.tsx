"use client";
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import Image from "next/image";


export default function TasksPage() {
  const [tasks, setTasks] = useState<{ title: string; done: boolean }[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { title: newTask, done: false }]);
    setNewTask("");
  };

  return (
    
    <div className="space-y-4">
       <div>
      <h2 className="text-xl font-bold mb-4">Bienvenue sur mon app</h2>

      <Image
        src="/logo.png"
        width={120}
        height={120}
        alt="Logo Next app"
        className="rounded-xl shadow"
      />
    </div>
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="flex gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border px-2 py-1"
          placeholder="New task..."
        />
        <button
          onClick={addTask}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, i) => (
          <TaskItem key={i} title={task.title} done={task.done} />
        ))}
      </ul>
    </div>

  );
}
