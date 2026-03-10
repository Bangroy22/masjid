# Landing Page Masjid Al-Ikhlas

Website landing page modern untuk Masjid Al-Ikhlas dengan desain responsif dan komponen modular.

## 🎨 Fitur Utama

✅ **Header Responsif** - Navigasi dengan logo dan menu  
✅ **Hero Section** - Judul besar dengan CTA buttons  
✅ **Jadwal Sholat** - Menampilkan 5 waktu sholat dengan highlight real-time  
✅ **Tentang Kami** - Section dengan galeri dan deskripsi  
✅ **Layanan Masjid** - 4 layanan utama dalam grid  
✅ **Kegiatan** - Card kegiatan dengan ikon dan deskripsi  
✅ **Donasi** - Section donasi dengan nominal cepat  
✅ **Footer** - Informasi kontak dan link sosial media  

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Image**: Next.js Image Optimization

## 📁 Struktur Komponen

```
components/
├── Header.tsx           # Navigasi utama
├── Hero.tsx            # Section hero dengan CTA
├── PrayerTimes.tsx     # Jadwal sholat
├── MissionSection.tsx  # Tentang kami
├── ServicesSection.tsx # Layanan masjid
├── ActivitiesSection.tsx # Kegiatan
├── DonationSection.tsx # Donasi
└── Footer.tsx          # Footer
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Buka Browser
```
http://localhost:3000
```

### 4. Build untuk Production
```bash
npm run build
npm start
```

## 📝 Customization

### Mengubah Informasi Masjid

**Header.tsx** - Update nama dan menu:
```tsx
<span className="font-semibold text-gray-800">Nama Masjid Anda</span>
```

**Footer.tsx** - Update kontak:
```tsx
<p>Jl. Alamat Masjid No. 123</p>
<p>📞 (021) 1234-5678</p>
<p>✉️ email@masjid.id</p>
```

### Mengubah Jadwal Sholat

**PrayerTimes.tsx** - Update array prayerTimes:
```tsx
const prayerTimes: PrayerTime[] = [
  { name: 'Subuh', time: '04:32' },
  { name: 'Dzuhur', time: '11:58' },
  // ... dst
];
```

### Menambah Kegiatan

**ActivitiesSection.tsx** - Update array activities:
```tsx
const activities = [
  {
    icon: '📚',
    title: 'Judul Kegiatan',
    description: 'Deskripsi kegiatan',
    link: '#'
  },
  // ... tambah lebih banyak
];
```

### Mengubah Warna

Edit class Tailwind di komponen atau update `tailwind.config.ts`:
- Warna utama: `teal-700` → ubah ke warna pilihan
- Warna sekunder: `gray-*` → ubah sesuai kebutuhan

## 🎯 Sections Breakdown

### Header
- Logo dengan ikon masjid
- Menu navigasi
- Tombol donasi

### Hero
- Judul besar
- Deskripsi singkat
- 2 CTA buttons
- Ilustrasi masjid

### Prayer Times
- Tanggal otomatis
- 5 waktu sholat
- Highlight waktu aktif

### Mission Section
- Galeri 2 gambar
- Deskripsi misi
- Link selengkapnya

### Services
- 4 layanan dengan ikon
- Deskripsi singkat
- Background gelap

### Activities
- 3 kegiatan mendatang
- Card dengan ikon
- Link detail

### Donation
- Nominal cepat
- Input custom
- CTA buttons

### Footer
- Info kontak
- Link sosial media
- Tautan cepat
- Copyright

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Semua komponen menggunakan `md:` breakpoint untuk responsive design.

## 🔗 Links & Navigation

Update link di komponen sesuai kebutuhan:
- `/waktu-sholat` - Halaman jadwal sholat
- `/kegiatan` - Halaman kegiatan
- `/berita` - Halaman berita
- `/kontak` - Halaman kontak
- `/donasi` - Halaman donasi

## 🖼️ Images

Placeholder SVG sudah disediakan di `public/placeholder-mosque.svg`. 
Ganti dengan gambar asli masjid Anda:

```tsx
<Image
  src="/your-image.jpg"
  alt="Masjid"
  fill
  className="object-cover"
/>
```

## 📦 Deployment

### Vercel (Recommended)
1. Push ke GitHub
2. Connect repository ke Vercel
3. Auto-deploy on push

### Manual Build
```bash
npm run build
npm start
```

## 🐛 Troubleshooting

**Images tidak muncul?**
- Pastikan file ada di folder `public/`
- Update path di komponen

**Styling tidak bekerja?**
- Pastikan Tailwind CSS sudah di-install
- Rebuild project: `npm run dev`

**TypeScript error?**
- Run: `npm run type-check`
- Fix errors sesuai pesan

## 📄 License

Bebas digunakan untuk keperluan masjid.

## 💡 Tips

- Gunakan placeholder sampai gambar asli siap
- Test di mobile sebelum deploy
- Update kontak secara berkala
- Backup data penting

---

**Dibuat dengan ❤️ untuk Masjid Al-Ikhlas**
