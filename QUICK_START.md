# Quick Start Guide - Landing Page Masjid Al-Ikhlas

## 🚀 Mulai Dalam 3 Langkah

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

---

## 📝 Customization Cepat

### Mengubah Informasi Masjid
Edit file `lib/constants.ts`:

```typescript
export const MOSQUE_INFO = {
  name: 'Nama Masjid Anda',
  address: 'Alamat Masjid',
  city: 'Kota, Provinsi',
  zipCode: 'Kode Pos',
  phone: 'Nomor Telepon',
  email: 'email@masjid.id',
  description: 'Deskripsi singkat masjid',
};
```

### Mengubah Jadwal Sholat
Edit `lib/constants.ts`:

```typescript
export const PRAYER_TIMES = [
  { name: 'Subuh', time: '04:32' },
  { name: 'Dzuhur', time: '11:58' },
  { name: 'Ashar', time: '15:15' },
  { name: 'Maghrib', time: '18:05' },
  { name: 'Isya', time: '19:18' },
];
```

### Menambah/Mengubah Kegiatan
Edit `lib/constants.ts`:

```typescript
export const ACTIVITIES = [
  {
    icon: '📚',
    title: 'Judul Kegiatan',
    description: 'Deskripsi kegiatan',
    link: '/kegiatan/1',
  },
  // Tambah lebih banyak...
];
```

### Mengubah Nominal Donasi
Edit `lib/constants.ts`:

```typescript
export const QUICK_DONATION_AMOUNTS = [
  { label: 'Rp 50.000', value: '50000' },
  { label: 'Rp 100.000', value: '100000' },
  { label: 'Rp 500.000', value: '500000' },
  // Tambah lebih banyak...
];
```

---

## 🎨 Mengubah Warna

### Warna Utama (Teal)
Cari dan ganti `teal-700` dengan warna pilihan:
- `blue-700`, `green-700`, `purple-700`, dll

### Contoh:
```tsx
// Sebelum
<button className="bg-teal-700 text-white">

// Sesudah
<button className="bg-blue-700 text-white">
```

---

## 🖼️ Menambah Gambar

### 1. Upload Gambar ke `public/`
```
public/
├── mosque-hero.jpg
├── activity-1.jpg
├── activity-2.jpg
└── ...
```

### 2. Update Komponen
```tsx
<Image
  src="/mosque-hero.jpg"
  alt="Masjid"
  fill
  className="object-cover"
/>
```

---

## 📱 Testing Responsiveness

### Desktop
- Buka di browser normal

### Mobile
- Tekan `F12` → Toggle device toolbar
- Atau buka di smartphone

---

## 🔗 Update Navigation Links

Edit `lib/constants.ts`:

```typescript
export const NAV_MENU = [
  { label: 'BERANDA', href: '/' },
  { label: 'WAKTU SHOLAT', href: '/waktu-sholat' },
  { label: 'KEGIATAN', href: '/kegiatan' },
  { label: 'BERITA', href: '/berita' },
  { label: 'KONTAK', href: '/kontak' },
];
```

---

## 📦 Build untuk Production

```bash
npm run build
npm start
```

---

## 🐛 Troubleshooting

| Masalah | Solusi |
|---------|--------|
| Port 3000 sudah digunakan | `npm run dev -- -p 3001` |
| Styling tidak muncul | Restart dev server |
| Gambar tidak muncul | Pastikan file ada di `public/` |
| Error TypeScript | Run `npm run type-check` |

---

## 📚 File Penting

| File | Fungsi |
|------|--------|
| `app/page.tsx` | Main page |
| `lib/constants.ts` | Data & konfigurasi |
| `components/*.tsx` | Komponen UI |
| `app/globals.css` | Global styles |

---

## 💡 Tips

✅ Selalu edit `lib/constants.ts` untuk data  
✅ Jangan edit hardcoded data di komponen  
✅ Test di mobile sebelum deploy  
✅ Backup file penting  
✅ Gunakan Git untuk version control  

---

## 🚀 Deploy ke Vercel

1. Push ke GitHub
2. Buka https://vercel.com
3. Import repository
4. Deploy!

---

**Selamat! Website masjid Anda siap digunakan.** 🕌
