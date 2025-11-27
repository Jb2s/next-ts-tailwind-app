type TaskProps = {
  title: string;
  done: boolean;
};

export default function TaskItem({ title, done }: TaskProps) {
  return (
    <li className="flex items-center gap-2">
      {done ? "✅" : "❌"} <span>{title}</span>
    </li>
  );
}
