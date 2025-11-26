"use client";
import { useState, useEffect } from "react";
import { Button } from "./Button";

type TodoItemProps = {
  title: string;
  done?: boolean; // optionnel
};

export function TodoItem({ title, done = false }: TodoItemProps) {
  const [isDone, setIsDone] = useState<boolean>(done);

  // --- useEffect : se déclenche à chaque changement de isDone ---
  useEffect(() => {
    console.log(`La tâche "${title}" a changé :`, isDone ? "Terminée" : "En cours");
  }, [isDone]);

  return (
    <div className="flex items-center justify-between w-full p-3 m-3 border rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => setIsDone(!isDone)}
          className="h-5 w-5"
        />
        <span className={isDone ? "line-through text-gray-500" : ""}>
          {title}
        </span>
      </div>

      <Button
        label={isDone ? "Annuler" : "Valider"}
        variant={isDone ? "secondary" : "primary"}
        onClick={() => setIsDone(!isDone)}
      />
    </div>
  );
}
