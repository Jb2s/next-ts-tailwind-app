"use client";

type TaskItemProps = {
  title: string;
  done: boolean;
  onDelete: () => void;
  onUpdate: () => void;
};

export default function TaskItem({ title, onDelete, onUpdate }: TaskItemProps) {
  return (
    <div className="border p-3 rounded-md flex items-center justify-between">
      <span>{title}</span>
      <div className="flex gap-2">
        <button
          onClick={onUpdate}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
