# Morvo — Website Company Profile

Situs satu halaman untuk tim Morvo (filamen 3D printing dari botol plastik bekas).
Dibangun dengan Next.js 16 (App Router), React 19, TypeScript, dan CSS Modules — tanpa Tailwind, tanpa library UI.
Hasil build berupa situs statis di folder `out/`.

## Menjalankan

```bash
npm install      # pasang dependensi
npm run dev      # server pengembangan di http://localhost:3000
npm run build    # build statis ke folder out/
npm run lint     # cek ESLint
```

Folder `out/` bisa diunggah ke hosting statis apa saja (Netlify, Vercel, GitHub Pages, cPanel).

## Struktur folder

```
app/
  layout.tsx        # <html lang="id">, metadata/SEO, font Google
  page.tsx          # urutan section
  globals.css       # design tokens (CSS variables) + kelas global (.btn, .section, …)
components/
  Navbar.tsx        # satu-satunya client component (menu aktif + hamburger)
  Hero.tsx  Perks.tsx  Steps.tsx  ProblemSolution.tsx  Products.tsx
  Impact.tsx  Team.tsx  ContactCTA.tsx  Footer.tsx
  *.module.css      # gaya per komponen
public/
  images/           # aset gambar
  favicon.svg
next.config.mjs     # output: 'export' (static)
```

## Aset gambar

Semua aset diambil dari file Figma "Morvo-Website". Gambar mentah yang di-rotasi atau di-crop di Figma
diproses ulang dengan transform yang sama, karena batas panggilan Figma MCP mencegah export per node.
Jika ingin hasil persis dari Figma, export node berikut sebagai PNG 1x lalu **timpa file dengan nama yang sama**:

| File | Ukuran | Node Figma | Catatan |
| --- | --- | --- | --- |
| `hero-bg.png` | 1406×686 | 2:16 (fill) | foto air, tanpa teks/botol |
| `hero-botol-1.png` | 898×898 | 9:3 (image 1) | rotasi 14° sudah di dalam PNG |
| `hero-botol-2.png` | 1038×849 | 9:6 (image 2) | rotasi 3° sudah di dalam PNG |
| `hero-botol-3.png` | 1276×887 | 9:9 (image 3) | rotasi -3° sudah di dalam PNG |
| `logo-putih.png` | 64×67 (file 2x) | 27:2 | |
| `masalah-solusi.png` | 480×300 | 2:80 | |
| `icon-recycling.png` | 71×66 | 10:12 | |
| `icon-diameter.png` | 85×70 | 10:13 | |
| `icon-carbon.png` | 76×74 | 10:16 | |
| `icon-discount.png` | 76×67 | 10:15 | |

Saat export ulang botol, **sembunyikan dulu latar hero** (atau export dari frame tanpa clip). Kalau tidak, PNG akan ikut membawa latar hijau.
CSS **tidak** merotasi botol, jadi rotasi harus sudah ada di file PNG.

## Bagian yang perlu diganti

- **Foto produk** — `components/Products.tsx`: placeholder abu-abu (`.photo`). Ganti dengan `<img>` dari `/images/…`.
- **Tim** — `components/Team.tsx`: ubah array `members` (nama, peran) dan tambahkan `photo: '/images/tim-1.jpg'` per anggota.
- **Kontak** — `components/ContactCTA.tsx`: konstanta `EMAIL` dan `PHONE` di atas file.
- **Statistik dampak** — array `stats` di `components/Impact.tsx`.
- **Diagram alur proses** — `public/images/masalah-solusi.png` (keterangan di `ProblemSolution.tsx`).

## Mengaktifkan dashboard / login nanti

Static export tidak mendukung auth, middleware, atau route handler. Saat mulai membuat dashboard:

1. Hapus baris `output: 'export'` di `next.config.mjs`.
2. Deploy ke hosting yang menjalankan Node.js atau Next.js (misalnya Vercel), lalu jalankan dengan `npm run build && npm start`.
