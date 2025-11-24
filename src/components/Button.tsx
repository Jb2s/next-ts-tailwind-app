type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const base =
    "px-4 py-2 rounded-md font-semibold transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {label}
    </button>
  );
}
