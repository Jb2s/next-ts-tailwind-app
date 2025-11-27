export const metadata = {
  title: "Tasks App",
};

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="border border-gray-300 p-4 rounded-xl">
      <h2 className="text-xl font-bold mb-4">Gestion des tâches</h2>
      {children}
    </section>
  );
}
