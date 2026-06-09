# MabaHub

MabaHub adalah mini portal informasi dan penugasan mahasiswa baru yang dibuat sebagai project portfolio web development menggunakan React dan Vite.

Project ini dikembangkan dengan pendekatan vibe coding, yaitu proses pengembangan yang memanfaatkan bantuan AI dalam perancangan, pembuatan kode, debugging, serta pengembangan fitur. Selama proses pengerjaan, AI yang digunakan adalah OpenAI Codex dan ChatGPT. OpenAI Codex digunakan untuk membantu implementasi kode secara langsung, sedangkan ChatGPT digunakan untuk diskusi konsep, penyusunan alur fitur, debugging, dokumentasi project, serta membantu pembuatan beberapa bagian kode.

MabaHub dibuat untuk mensimulasikan pengalaman mahasiswa baru dalam mengakses informasi kampus, panduan akademik, jadwal kegiatan, serta tugas-tugas orientasi melalui sebuah portal digital sederhana.

Sebagian besar konten, alur kegiatan, serta informasi yang ditampilkan pada website ini terinspirasi dan mengacu pada informasi yang tersedia pada website resmi Prabu Unpad. Seluruh konten digunakan sebagai referensi pembelajaran dan simulasi dalam project portfolio, bukan sebagai representasi resmi dari pihak universitas maupun penyelenggara kegiatan mahasiswa baru.

Tujuan utama project ini adalah menunjukkan kemampuan pengembangan frontend modern menggunakan React, React Router, state management sederhana, pemanfaatan localStorage, serta kemampuan berkolaborasi dengan AI-assisted development workflow dalam proses pembuatan aplikasi web.

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

## Routing

- `/` untuk landing page
- `/tasks` untuk daftar penugasan
- `/dashboard` untuk dashboard peserta
- `/guide` untuk halaman panduan
- `/login` untuk login demo localStorage

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
    Login.jsx
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
