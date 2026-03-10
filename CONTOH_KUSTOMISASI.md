# Contoh Kustomisasi

## 1. Mengubah Informasi Masjid

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const MOSQUE_INFO = {
  name: 'Masjid Al-Ikhlas',
  address: 'Jl. Masjid Raya No. 123',
  city: 'Jakarta Selatan, DKI Jakarta',
  zipCode: '12345',
  phone: '(021) 1234-5678',
  email: 'info@masjidalikhlas.id',
  description: 'Pusat ibadah dan pembinaan ummat yang melayani dengan sepenuh hati.',
};
```

### Sesudah:
```typescript
export const MOSQUE_INFO = {
  name: 'Masjid Nurul Huda',
  address: 'Jl. Pendidikan No. 456',
  city: 'Bandung, Jawa Barat',
  zipCode: '40123',
  phone: '(022) 9876-5432',
  email: 'info@masjidnurulhuda.id',
  description: 'Masjid Nurul Huda adalah pusat ibadah dan pembelajaran Islam untuk seluruh keluarga.',
};
```

---

## 2. Mengubah Jadwal Sholat

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const PRAYER_TIMES = [
  { name: 'Subuh', time: '04:32' },
  { name: 'Dzuhur', time: '11:58' },
  { name: 'Ashar', time: '15:15' },
  { name: 'Maghrib', time: '18:05' },
  { name: 'Isya', time: '19:18' },
];
```

### Sesudah (untuk Bandung):
```typescript
export const PRAYER_TIMES = [
  { name: 'Subuh', time: '04:45' },
  { name: 'Dzuhur', time: '12:10' },
  { name: 'Ashar', time: '15:30' },
  { name: 'Maghrib', time: '18:20' },
  { name: 'Isya', time: '19:35' },
];
```

---

## 3. Menambah Kegiatan Baru

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const ACTIVITIES = [
  {
    icon: '📚',
    title: 'Kajian Kitab Shahih Al-Bukhari',
    description: 'Kajian rutin setiap Ahad pagi bersama Ustadz Ahmad',
    link: '#',
  },
  {
    icon: '🎓',
    title: 'Kelas Al-Quran Untuk Remaja',
    description: 'Program tahfidz dan tahsin untuk remaja usia 13-18 tahun',
    link: '#',
  },
  {
    icon: '❤️',
    title: 'Santunan Anak Yatim',
    description: 'Program rutin santunan setiap bulan untuk anak yatim',
    link: '#',
  },
];
```

### Sesudah (menambah kegiatan):
```typescript
export const ACTIVITIES = [
  {
    icon: '📚',
    title: 'Kajian Kitab Shahih Al-Bukhari',
    description: 'Kajian rutin setiap Ahad pagi bersama Ustadz Ahmad',
    link: '/kegiatan/1',
  },
  {
    icon: '🎓',
    title: 'Kelas Al-Quran Untuk Remaja',
    description: 'Program tahfidz dan tahsin untuk remaja usia 13-18 tahun',
    link: '/kegiatan/2',
  },
  {
    icon: '❤️',
    title: 'Santunan Anak Yatim',
    description: 'Program rutin santunan setiap bulan untuk anak yatim',
    link: '/kegiatan/3',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Kegiatan Keluarga Besar',
    description: 'Gathering keluarga besar masjid setiap bulan',
    link: '/kegiatan/4',
  },
];
```

---

## 4. Mengubah Nominal Donasi

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const QUICK_DONATION_AMOUNTS = [
  { label: 'Rp 50.000', value: '50000' },
  { label: 'Rp 100.000', value: '100000' },
  { label: 'Rp 500.000', value: '500000' },
];
```

### Sesudah (menambah nominal):
```typescript
export const QUICK_DONATION_AMOUNTS = [
  { label: 'Rp 25.000', value: '25000' },
  { label: 'Rp 50.000', value: '50000' },
  { label: 'Rp 100.000', value: '100000' },
  { label: 'Rp 250.000', value: '250000' },
  { label: 'Rp 500.000', value: '500000' },
  { label: 'Rp 1.000.000', value: '1000000' },
];
```

---

## 5. Mengubah Menu Navigasi

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const NAV_MENU = [
  { label: 'BERANDA', href: '/' },
  { label: 'WAKTU SHOLAT', href: '/waktu-sholat' },
  { label: 'KEGIATAN', href: '/kegiatan' },
  { label: 'BERITA', href: '/berita' },
  { label: 'KONTAK', href: '/kontak' },
];
```

### Sesudah (menambah menu):
```typescript
export const NAV_MENU = [
  { label: 'BERANDA', href: '/' },
  { label: 'TENTANG', href: '/tentang' },
  { label: 'WAKTU SHOLAT', href: '/waktu-sholat' },
  { label: 'KEGIATAN', href: '/kegiatan' },
  { label: 'BERITA', href: '/berita' },
  { label: 'GALERI', href: '/galeri' },
  { label: 'KONTAK', href: '/kontak' },
];
```

---

## 6. Mengubah Warna Utama

**File:** `components/Header.tsx` (contoh)

### Sebelum (Teal):
```tsx
<div className="w-8 h-8 bg-teal-700 rounded-full">
  <span className="text-white text-sm">🕌</span>
</div>
```

### Sesudah (Blue):
```tsx
<div className="w-8 h-8 bg-blue-700 rounded-full">
  <span className="text-white text-sm">🕌</span>
</div>
```

### Warna Alternatif:
- `bg-green-700` - Hijau
- `bg-purple-700` - Ungu
- `bg-indigo-700` - Indigo
- `bg-emerald-700` - Emerald

---

## 7. Menambah Layanan Baru

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const SERVICES = [
  {
    icon: '📚',
    title: 'Pendidikan Islam',
    description: 'Program pendidikan Al-Quran dan kajian Islam untuk semua usia',
  },
  {
    icon: '🤝',
    title: 'Kegiatan Komunitas',
    description: 'Berbagai kegiatan sosial dan keagamaan untuk mempererat ukhuwah',
  },
  {
    icon: '🕌',
    title: 'Fasilitas Ibadah',
    description: 'Tempat ibadah yang nyaman dengan fasilitas lengkap',
  },
  {
    icon: '💰',
    title: 'Program Zakat',
    description: 'Penyaluran zakat, infaq, dan sedekah untuk yang membutuhkan',
  },
];
```

### Sesudah (menambah layanan):
```typescript
export const SERVICES = [
  {
    icon: '📚',
    title: 'Pendidikan Islam',
    description: 'Program pendidikan Al-Quran dan kajian Islam untuk semua usia',
  },
  {
    icon: '🤝',
    title: 'Kegiatan Komunitas',
    description: 'Berbagai kegiatan sosial dan keagamaan untuk mempererat ukhuwah',
  },
  {
    icon: '🕌',
    title: 'Fasilitas Ibadah',
    description: 'Tempat ibadah yang nyaman dengan fasilitas lengkap',
  },
  {
    icon: '💰',
    title: 'Program Zakat',
    description: 'Penyaluran zakat, infaq, dan sedekah untuk yang membutuhkan',
  },
  {
    icon: '🏥',
    title: 'Layanan Kesehatan',
    description: 'Program kesehatan gratis untuk jemaah masjid',
  },
  {
    icon: '📖',
    title: 'Perpustakaan Islam',
    description: 'Koleksi buku dan referensi Islam untuk pembelajaran',
  },
];
```

---

## 8. Mengubah Link Sosial Media

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'f', url: '#' },
  { name: 'Twitter', icon: 't', url: '#' },
  { name: 'Instagram', icon: 'ig', url: '#' },
  { name: 'LinkedIn', icon: 'in', url: '#' },
];
```

### Sesudah:
```typescript
export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'f', url: 'https://facebook.com/masjidnurulhuda' },
  { name: 'Instagram', icon: 'ig', url: 'https://instagram.com/masjidnurulhuda' },
  { name: 'YouTube', icon: 'yt', url: 'https://youtube.com/@masjidnurulhuda' },
  { name: 'WhatsApp', icon: 'wa', url: 'https://wa.me/6281234567890' },
];
```

---

## 9. Mengubah Gambar Hero

**File:** `components/Hero.tsx`

### Sebelum:
```tsx
<Image
  src="/placeholder-mosque.svg"
  alt="Masjid Al-Ikhlas"
  fill
  className="object-contain p-8"
  priority
/>
```

### Sesudah:
```tsx
<Image
  src="/mosque-hero.jpg"
  alt="Masjid Nurul Huda"
  fill
  className="object-cover"
  priority
/>
```

---

## 10. Mengubah Warna Background Section

**File:** `components/ServicesSection.tsx`

### Sebelum (Slate):
```tsx
<section className="bg-slate-900 text-white py-16">
```

### Sesudah (Gray):
```tsx
<section className="bg-gray-900 text-white py-16">
```

### Opsi Warna:
- `bg-slate-900` - Slate
- `bg-gray-900` - Gray
- `bg-zinc-900` - Zinc
- `bg-stone-900` - Stone

---

## 11. Menambah Footer Link

**File:** `lib/constants.ts`

### Sebelum:
```typescript
export const FOOTER_QUICK_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Berita', href: '/berita' },
];
```

### Sesudah:
```typescript
export const FOOTER_QUICK_LINKS = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Kegiatan', href: '/kegiatan' },
  { label: 'Berita', href: '/berita' },
  { label: 'Galeri', href: '/galeri' },
  { label: 'FAQ', href: '/faq' },
];
```

---

## 12. Mengubah Teks Hero Section

**File:** `components/Hero.tsx`

### Sebelum:
```tsx
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
  Masjid Al-Ikhlas:<br />
  Pusat Ibadah &<br />
  Komunitas
</h1>
<p className="text-gray-600 mb-6 leading-relaxed">
  Selamat datang di Masjid Al-Ikhlas, tempat ibadah dan pusat kegiatan 
  komunitas Muslim. Mari bersama-sama memperkuat iman dan membangun 
  ukhuwah islamiyah.
</p>
```

### Sesudah:
```tsx
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
  Masjid Nurul Huda:<br />
  Cahaya Ilmu &<br />
  Kebersamaan
</h1>
<p className="text-gray-600 mb-6 leading-relaxed">
  Selamat datang di Masjid Nurul Huda, tempat ibadah dan pusat pembelajaran 
  Islam untuk seluruh keluarga. Bersama kita membangun komunitas yang kuat 
  dan beriman.
</p>
```

---

## 🎯 Tips Kustomisasi

1. **Selalu edit `lib/constants.ts` terlebih dahulu**
2. **Jangan hardcode data di komponen**
3. **Test setiap perubahan di development server**
4. **Gunakan Git untuk tracking perubahan**
5. **Backup file sebelum edit besar**

---

## ✅ Checklist Kustomisasi

- [ ] Update MOSQUE_INFO
- [ ] Update PRAYER_TIMES
- [ ] Update SERVICES
- [ ] Update ACTIVITIES
- [ ] Update QUICK_DONATION_AMOUNTS
- [ ] Update NAV_MENU
- [ ] Update SOCIAL_MEDIA
- [ ] Upload gambar
- [ ] Test di mobile
- [ ] Test di desktop

---

**Selamat mengkustomisasi!** 🕌
