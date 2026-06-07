# MabaHub

MabaHub adalah mini portal informasi dan penugasan mahasiswa baru. Project ini
dibuat sebagai portfolio web development untuk mendaftar divisi website
kepanitiaan kampus.

## Stack

- Vite + React
- React Router
- CSS biasa
- Data dummy dari file JavaScript
- Login demo dengan localStorage
- Responsive desktop dan mobile

## Fitur

- Landing page dengan hero, countdown, highlight kegiatan, dan CTA
- Timeline kegiatan mahasiswa baru
- Penugasan dengan search, filter kategori, deadline, status, prioritas, dan progress
- Dashboard peserta berisi progress tugas, jadwal terdekat, dan checklist
- FAQ accordion
- Halaman panduan
- Footer dengan contact person

## Struktur Folder

```txt
src/
  assets/
  components/
    Countdown.jsx
    FAQItem.jsx
    Layout.jsx
    SectionHeader.jsx
    StatusBadge.jsx
    TaskCard.jsx
  data/
    mabaData.js
  pages/
    Dashboard.jsx
    FAQ.jsx
    Guide.jsx
    Home.jsx
    NotFound.jsx
    Tasks.jsx
    Timeline.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Menjalankan Project

```bash
npm install
npm run dev
```

Untuk build production:

```bash
npm run build
```
