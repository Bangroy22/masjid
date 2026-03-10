import Link from 'next/link';
import { NAV_MENU, MOSQUE_INFO } from '@/lib/constants';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">🕌</span>
          </div>
          <span className="font-semibold text-gray-800">{MOSQUE_INFO.name}</span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_MENU.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-gray-700 hover:text-teal-700 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-teal-700 text-white px-6 py-2 rounded-md text-sm hover:bg-teal-800 transition">
          Donasi Sekarang
        </button>
      </nav>
    </header>
  );
}
