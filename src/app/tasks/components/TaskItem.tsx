"use client";

type TaskItemProps = {
  title: string;
};

export default function TaskItem({ title }: TaskItemProps) {
  return (
    <div className="border p-3 rounded-md flex items-center justify-between">
      <span>{title}</span>
    </div>
  );
}
