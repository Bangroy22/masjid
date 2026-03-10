import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-[250px] rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50">
            <Image
              src="/placeholder-mosque.svg"
              alt="Interior Masjid"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-amber-50">
            <div className="w-full h-full flex items-center justify-center text-6xl">🕌</div>
          </div>
        </div>

        <div>
          <p className="text-teal-700 font-semibold mb-2">TENTANG KAMI</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Misi Kami: Membina Ummat<br />
            Melalui Ilmu & Kegiatan
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Masjid Al-Ikhlas berkomitmen untuk menjadi pusat pembinaan ummat 
            melalui berbagai kegiatan keagamaan, pendidikan, dan sosial. Kami 
            mengadakan kajian rutin, pendidikan Al-Quran, dan berbagai program 
            yang bermanfaat bagi masyarakat.
          </p>
          <button className="text-teal-700 font-semibold hover:underline">
            Selengkapnya →
          </button>
        </div>
      </div>
    </section>
  );
}
