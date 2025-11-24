"use client";
import { useState } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Compteur : {count}</h2>
      <div className="flex gap-2">
        <Button label="+" onClick={() => setCount(count + 1)} variant="primary" />
        <Button label="-" onClick={() => setCount(Math.max(0, count - 1))} variant="secondary" />
        <Button label="Reset" onClick={() => setCount(0)} variant="secondary" />
      </div>
    </div>
  );
}
