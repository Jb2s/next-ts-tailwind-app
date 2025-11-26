"use client";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  // Liste de todos
  const todos = [
    { id: 1, title: "Apprendre React" },
    { id: 2, title: "Faire les courses" },
    { id: 3, title: "Lire un livre" },
    { id: 4, title: "Exercice Next.js" },
  ];

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}   // clé unique obligatoire pour React
          title={todo.title}
        />
      ))}
    </div>
  );
}
