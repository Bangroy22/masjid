'use client';

import { useState } from 'react';
import { QUICK_DONATION_AMOUNTS } from '@/lib/constants';

export default function DonationSection() {
  const [amount, setAmount] = useState('');

  return (
    <section className="bg-teal-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investasi Akhirat<br />
              Melalui Rumah<br />
              Allah
            </h2>
            <p className="text-teal-100 mb-6 leading-relaxed">
              Bantu kami dalam membangun dan memelihara masjid, serta menjalankan 
              berbagai program dakwah dan sosial. Setiap donasi Anda adalah investasi 
              untuk kehidupan akhirat.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
                Donasi Sekarang
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-teal-800 transition">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <p className="text-sm text-teal-100 mb-4">Pilih Nominal Donasi</p>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {QUICK_DONATION_AMOUNTS.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setAmount(item.value)}
                  className={`py-3 rounded-md text-sm font-semibold transition ${
                    amount === item.value
                      ? 'bg-white text-teal-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Atau masukkan nominal lain"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-teal-200 border border-white/30 focus:outline-none focus:border-white transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
