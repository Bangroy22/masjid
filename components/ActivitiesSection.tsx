import Link from 'next/link';
import { ACTIVITIES } from '@/lib/constants';

export default function ActivitiesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-teal-700 font-semibold mb-2">KEGIATAN KAMI</p>
          <h2 className="text-3xl font-bold text-gray-900">Kegiatan Mendatang</h2>
        </div>
        <Link href="/kegiatan" className="text-teal-700 font-semibold hover:underline">
          Lihat Semua →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {ACTIVITIES.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="relative h-[200px] bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
              <span className="text-6xl">{activity.icon}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {activity.description}
              </p>
              <Link 
                href={activity.link}
                className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-50 transition"
              >
                Lihat Detail →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
