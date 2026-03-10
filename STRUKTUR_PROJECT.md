# Struktur Project Landing Page Masjid Al-Ikhlas

## Daftar Komponen

### 1. **Header** (`components/Header.tsx`)
- Navigasi utama website
- Logo dan nama masjid
- Menu navigasi (Beranda, Waktu Sholat, Kegiatan, Berita, Kontak)
- Tombol "Donasi Sekarang"

### 2. **Hero** (`components/Hero.tsx`)
- Section utama dengan judul besar
- Deskripsi singkat tentang masjid
- Tombol CTA (Lihat Jadwal, Hubungi Kami)
- Gambar/ilustrasi masjid

### 3. **PrayerTimes** (`components/PrayerTimes.tsx`)
- Menampilkan jadwal sholat hari ini
- Tanggal otomatis
- 5 waktu sholat (Subuh, Dzuhur, Ashar, Maghrib, Isya)
- Highlight waktu sholat yang sedang berlangsung

### 4. **MissionSection** (`components/MissionSection.tsx`)
- Section "Tentang Kami"
- Galeri 2 gambar
- Deskripsi misi masjid
- Link "Selengkapnya"

### 5. **ServicesSection** (`components/ServicesSection.tsx`)
- 4 layanan utama masjid
- Ikon untuk setiap layanan
- Deskripsi singkat
- Background gelap (slate-900)

### 6. **ActivitiesSection** (`components/ActivitiesSection.tsx`)
- Menampilkan 3 kegiatan mendatang
- Card dengan ikon, judul, dan deskripsi
- Link "Lihat Detail"
- Link "Lihat Semua"

### 7. **DonationSection** (`components/DonationSection.tsx`)
- Section donasi dengan background teal
- Pilihan nominal donasi cepat
- Input custom untuk nominal lain
- Tombol "Donasi Sekarang"

### 8. **Footer** (`components/Footer.tsx`)
- Informasi kontak masjid
- Link sosial media
- Tautan cepat
- Informasi lokasi
- Copyright

## Struktur File

```
project-root/
├── app/
│   ├── page.tsx           # Main page (menggunakan semua komponen)
│   ├── layout.tsx         # Layout utama
│   ├── globals.css        # Global styles
│   └── favicon.ico
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PrayerTimes.tsx
│   ├── MissionSection.tsx
│   ├── ServicesSection.tsx
│   ├── ActivitiesSection.tsx
│   ├── DonationSection.tsx
│   └── Footer.tsx
├── public/
│   ├── placeholder-mosque.svg
│   └── [other assets]
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## Fitur Utama

### Responsive Design
- Mobile-first approach
- Grid layout yang responsif
- Breakpoint: md (768px)

### Styling
- Tailwind CSS untuk styling
- Warna utama: Teal (#0d9488)
- Warna sekunder: Gray (#6b7280)

### Interaktif
- PrayerTimes: Menampilkan waktu sholat real-time
- DonationSection: Input nominal donasi interaktif
- Hover effects pada tombol dan link

## Cara Menggunakan

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Buka di Browser
```
http://localhost:3000
```

## Customization

### Mengubah Warna
Edit `tailwind.config.ts` atau gunakan class Tailwind langsung di komponen.

### Menambah Konten
- Edit data di dalam komponen (array activities, services, dll)
- Atau buat file data terpisah dan import ke komponen

### Menambah Halaman Baru
1. Buat file baru di `app/` folder
2. Gunakan komponen yang sudah ada atau buat komponen baru
3. Update Header untuk menambah link navigasi

## Tips Pengembangan

- Gunakan komponen yang sudah ada sebanyak mungkin
- Pisahkan data dari UI (buat file data terpisah jika perlu)
- Gunakan TypeScript untuk type safety
- Test responsiveness di berbagai ukuran layar
- Optimalkan gambar sebelum upload

## Deployment

Project ini siap untuk di-deploy ke Vercel:
```bash
npm run build
```

Atau langsung push ke GitHub dan connect dengan Vercel untuk auto-deployment.
