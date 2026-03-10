import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Masjid Al-RoyyanSheira<br />
            Pusat Ibadah &<br />
            Komunitas
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Selamat datang di Masjid Al-Ikhlas, tempat ibadah dan pusat kegiatan 
            komunitas Muslim. Mari bersama-sama memperkuat iman dan membangun 
            ukhuwah islamiyah.
          </p>
          <div className="flex gap-4">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800 transition">
              Lihat Jadwal
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition">
              Hubungi Kami
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] rounded-2xl overflow-hidden ">
          <Image
            src="/hero.png"
            alt="Masjid Al-Ikhlas"
            fill
            className="w-full h-[400px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
