import Link from 'next/link';
import { MOSQUE_INFO, FOOTER_QUICK_LINKS, FOOTER_INFO_LINKS, SOCIAL_MEDIA } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🕌</span>
              </div>
              <span className="font-semibold text-gray-800">{MOSQUE_INFO.name}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {MOSQUE_INFO.description}
            </p>
            <div className="flex gap-3">
              {SOCIAL_MEDIA.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-700 hover:text-white transition text-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-teal-700 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Informasi</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-teal-700 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Lokasi</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>{MOSQUE_INFO.address}</p>
              <p>{MOSQUE_INFO.city}</p>
              <p>{MOSQUE_INFO.zipCode}</p>
              <p className="pt-2">📞 {MOSQUE_INFO.phone}</p>
              <p>✉️ {MOSQUE_INFO.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© 2024 {MOSQUE_INFO.name}. Hak Cipta Dilindungi. | <Link href="/privacy" className="hover:text-teal-700">Kebijakan Privasi</Link></p>
        </div>
      </div>
    </footer>
  );
}
