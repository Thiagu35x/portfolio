"use client";

import Link from 'next/link';
import { MdHome, MdPerson, MdWork, MdCode, MdTerminal } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { configData } from '../data';

const navItems = [
  { name: "Início", href: "/", icon: MdHome },
  { name: "Sobre Mim", href: "/sobre", icon: MdPerson },
  { name: "Experiência Profissional", href: "/experiencia-profissional", icon: MdWork },
  { name: "Experiência Acadêmica", href: "/experiencia-academica", icon: MdTerminal },
  { name: "Projetos", href: "/projetos", icon: MdCode },
];

export function Sidebar() {
  const pathname = usePathname();

  const [firstName, ...lastName] = configData.name.split(' ');

  return (
    <aside className="sidebar">
      <header>
        <h1>{firstName} <span>{lastName.join(' ')}</span></h1>
        <h2>{configData.role}</h2>
      </header>
      
      <nav className="sidebar-menu-items">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon; 
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
      
      <footer className="sidebar-footer">
        <p>Desenvolvido com React e Next.</p>
        <p>Última atualização: {new Date().getFullYear()}</p>
      </footer>
    </aside>
  );
}