import { Button } from "@/components/Button";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenue Jean 👋</h1>
      <p className="mt-4 text-lg text-gray-700">
        Next.js + TypeScript + Tailwind est prêt !
      </p>
      <Button label= 'Composant Button' variant= 'primary'></Button>
      <Counter/>
    </main>
  );
}
