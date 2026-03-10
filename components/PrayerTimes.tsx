'use client';

import { useState, useEffect } from 'react';
import { PRAYER_TIMES } from '@/lib/constants';

interface PrayerTime {
  name: string;
  time: string;
  isActive?: boolean;
}

export default function PrayerTimes() {
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('id-ID', options));
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Jadwal Sholat Hari Ini</h2>
          <p className="text-gray-600">{currentDate}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {PRAYER_TIMES.map((prayer, index) => (
            <div
              key={prayer.name}
              className={`p-6 rounded-lg text-center ${
                index === 3
                  ? 'bg-teal-700 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <p className={`text-sm mb-2 ${index === 3 ? 'text-teal-100' : 'text-gray-500'}`}>
                {prayer.name}
              </p>
              <p className="text-2xl font-bold">{prayer.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
