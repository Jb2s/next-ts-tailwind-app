"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Header() {
    const pathname = usePathname();
    const links = [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];
return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:underline ${
              pathname === link.href ? "underline font-bold" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
