# Dokumentasi Detail Komponen

## 1. Header Component

**File:** `components/Header.tsx`

### Fungsi
Navigasi utama website dengan logo, menu, dan tombol donasi.

### Props
Tidak ada props (menggunakan data dari `lib/constants.ts`)

### Data yang Digunakan
- `MOSQUE_INFO.name` - Nama masjid
- `NAV_MENU` - Menu navigasi

### Customization
```tsx
// Mengubah nama masjid
export const MOSQUE_INFO = {
  name: 'Nama Masjid Baru',
  // ...
};

// Menambah menu
export const NAV_MENU = [
  { label: 'MENU BARU', href: '/menu-baru' },
  // ...
];
```

---

## 2. Hero Component

**File:** `components/Hero.tsx`

### Fungsi
Section utama dengan judul besar, deskripsi, dan CTA buttons.

### Props
Tidak ada props

### Fitur
- Responsive grid (2 kolom di desktop, 1 di mobile)
- Placeholder SVG untuk gambar
- 2 CTA buttons

### Customization
```tsx
// Mengubah judul
<h1 className="text-4xl md:text-5xl font-bold">
  Judul Baru
</h1>

// Mengubah deskripsi
<p className="text-gray-600 mb-6">
  Deskripsi baru
</p>

// Mengubah button text
<button>Teks Button Baru</button>
```

---

## 3. PrayerTimes Component

**File:** `components/PrayerTimes.tsx`

### Fungsi
Menampilkan jadwal sholat hari ini dengan tanggal otomatis.

### Props
Tidak ada props

### Data yang Digunakan
- `PRAYER_TIMES` - Array jadwal sholat

### Fitur
- Tanggal otomatis (real-time)
- Highlight waktu sholat ke-4 (Maghrib)
- Responsive grid

### Customization
```tsx
// Mengubah jadwal sholat
export const PRAYER_TIMES = [
  { name: 'Subuh', time: '04:32' },
  { name: 'Dzuhur', time: '11:58' },
  // ...
];

// Mengubah waktu yang di-highlight
// Edit index di: index === 3 (untuk Maghrib)
```

---

## 4. MissionSection Component

**File:** `components/MissionSection.tsx`

### Fungsi
Section "Tentang Kami" dengan galeri dan deskripsi misi.

### Props
Tidak ada props

### Fitur
- Grid 2 kolom (desktop)
- Galeri 2 gambar
- Placeholder SVG dan emoji

### Customization
```tsx
// Mengubah judul
<h2 className="text-3xl font-bold">
  Judul Baru
</h2>

// Mengubah deskripsi
<p className="text-gray-600">
  Deskripsi baru
</p>

// Mengubah gambar
<Image src="/gambar-baru.jpg" />
```

---

## 5. ServicesSection Component

**File:** `components/ServicesSection.tsx`

### Fungsi
Menampilkan 4 layanan utama masjid dalam grid.

### Props
Tidak ada props

### Data yang Digunakan
- `SERVICES` - Array layanan

### Fitur
- Grid 4 kolom (desktop)
- Background gelap (slate-900)
- Ikon emoji

### Customization
```tsx
// Menambah/mengubah layanan
export const SERVICES = [
  {
    icon: '📚',
    title: 'Layanan Baru',
    description: 'Deskripsi layanan',
  },
  // ...
];
```

---

## 6. ActivitiesSection Component

**File:** `components/ActivitiesSection.tsx`

### Fungsi
Menampilkan 3 kegiatan mendatang dalam card.

### Props
Tidak ada props

### Data yang Digunakan
- `ACTIVITIES` - Array kegiatan

### Fitur
- Grid 3 kolom (desktop)
- Card dengan hover effect
- Ikon emoji
- Link "Lihat Detail"

### Customization
```tsx
// Menambah/mengubah kegiatan
export const ACTIVITIES = [
  {
    icon: '📚',
    title: 'Kegiatan Baru',
    description: 'Deskripsi kegiatan',
    link: '/kegiatan/1',
  },
  // ...
];
```

---

## 7. DonationSection Component

**File:** `components/DonationSection.tsx`

### Fungsi
Section donasi dengan nominal cepat dan input custom.

### Props
Tidak ada props

### State
- `amount` - Nominal donasi yang dipilih

### Data yang Digunakan
- `QUICK_DONATION_AMOUNTS` - Nominal cepat

### Fitur
- Nominal cepat (3 pilihan)
- Input custom
- Background teal
- Interactive buttons

### Customization
```tsx
// Mengubah nominal cepat
export const QUICK_DONATION_AMOUNTS = [
  { label: 'Rp 50.000', value: '50000' },
  { label: 'Rp 100.000', value: '100000' },
  { label: 'Rp 500.000', value: '500000' },
  { label: 'Rp 1.000.000', value: '1000000' }, // Tambah
];
```

---

## 8. Footer Component

**File:** `components/Footer.tsx`

### Fungsi
Footer dengan informasi kontak, link, dan sosial media.

### Props
Tidak ada props

### Data yang Digunakan
- `MOSQUE_INFO` - Informasi masjid
- `FOOTER_QUICK_LINKS` - Link cepat
- `FOOTER_INFO_LINKS` - Link informasi
- `SOCIAL_MEDIA` - Link sosial media

### Fitur
- Grid 4 kolom (desktop)
- Link sosial media
- Informasi kontak lengkap
- Copyright

### Customization
```tsx
// Mengubah informasi kontak
export const MOSQUE_INFO = {
  name: 'Nama Baru',
  address: 'Alamat Baru',
  phone: 'Nomor Baru',
  email: 'email@baru.id',
  // ...
};

// Menambah link sosial media
export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'f', url: 'https://facebook.com/...' },
  { name: 'Twitter', icon: 't', url: 'https://twitter.com/...' },
  // ...
];
```

---

## 9. Main Page Component

**File:** `app/page.tsx`

### Fungsi
Halaman utama yang menggunakan semua komponen.

### Struktur
```tsx
<div>
  <Header />
  <Hero />
  <PrayerTimes />
  <MissionSection />
  <ServicesSection />
  <ActivitiesSection />
  <DonationSection />
  <Footer />
</div>
```

### Customization
Tambah/hapus komponen sesuai kebutuhan:
```tsx
import NewComponent from '@/components/NewComponent';

export default function Home() {
  return (
    <div>
      <Header />
      <NewComponent /> {/* Komponen baru */}
      <Footer />
    </div>
  );
}
```

---

## 10. Constants File

**File:** `lib/constants.ts`

### Fungsi
Menyimpan semua data yang digunakan di komponen.

### Data yang Tersedia
- `MOSQUE_INFO` - Informasi masjid
- `PRAYER_TIMES` - Jadwal sholat
- `SERVICES` - Layanan masjid
- `ACTIVITIES` - Kegiatan
- `QUICK_DONATION_AMOUNTS` - Nominal donasi
- `NAV_MENU` - Menu navigasi
- `FOOTER_QUICK_LINKS` - Link footer
- `FOOTER_INFO_LINKS` - Link info footer
- `SOCIAL_MEDIA` - Link sosial media

### Best Practice
- Selalu edit data di file ini
- Jangan hardcode data di komponen
- Gunakan import untuk mengakses data

---

## 🎨 Styling Guide

### Tailwind Classes yang Sering Digunakan

**Warna**
- `bg-teal-700` - Warna utama
- `text-gray-900` - Teks gelap
- `text-gray-600` - Teks abu-abu
- `bg-white` - Background putih

**Spacing**
- `px-4` - Padding horizontal
- `py-12` - Padding vertikal
- `mb-4` - Margin bottom
- `gap-8` - Gap antar elemen

**Layout**
- `container` - Container responsif
- `mx-auto` - Center horizontal
- `grid` - Grid layout
- `md:grid-cols-3` - 3 kolom di desktop

**Responsive**
- `md:` - Desktop (768px+)
- `grid-cols-2` - 2 kolom mobile
- `md:grid-cols-3` - 3 kolom desktop

---

## 📝 Tips Editing

1. **Selalu gunakan `lib/constants.ts`** untuk data
2. **Jangan hardcode** informasi di komponen
3. **Test responsiveness** setelah perubahan
4. **Gunakan Git** untuk tracking perubahan
5. **Backup file** sebelum edit besar

---

## 🔗 Import Paths

Semua komponen menggunakan alias `@/`:
```tsx
import Header from '@/components/Header';
import { MOSQUE_INFO } from '@/lib/constants';
```

Ini sudah dikonfigurasi di `tsconfig.json`.

---

**Selamat mengembangkan website masjid Anda!** 🕌
