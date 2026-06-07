export const launchDate = '2026-08-17T08:00:00+07:00'

export const heroStats = [
  {
    label: 'Peserta',
    value: '1.280',
  },
  {
    label: 'Tugas aktif',
    value: '8',
  },
  {
    label: 'Hari kegiatan',
    value: '5',
  },
]

export const highlights = [
  {
    title: 'Briefing Terpusat',
    summary:
      'Semua informasi teknis, rundown, dan pembagian kelompok dirangkum dalam satu portal.',
    tag: 'Informasi',
  },
  {
    title: 'Pantau Penugasan',
    summary:
      'Peserta bisa melihat kategori, deadline, status, dan prioritas tugas dengan cepat.',
    tag: 'Tugas',
  },
  {
    title: 'Dashboard Peserta',
    summary:
      'Progress tugas, jadwal terdekat, dan checklist perlengkapan tampil dalam satu layar.',
    tag: 'Progress',
  },
]

export const timelineEvents = [
  {
    id: 1,
    date: '2026-08-17',
    time: '07.30',
    title: 'Registrasi dan Pembukaan',
    category: 'Orientasi',
    location: 'Aula Nusantara',
    description:
      'Verifikasi kehadiran, pembagian atribut, dan pembukaan resmi rangkaian mahasiswa baru.',
  },
  {
    id: 2,
    date: '2026-08-18',
    time: '08.00',
    title: 'Pengenalan Fakultas',
    category: 'Akademik',
    location: 'Gedung Fakultas',
    description:
      'Sesi pengenalan dosen wali, sistem perkuliahan, layanan akademik, dan budaya belajar.',
  },
  {
    id: 3,
    date: '2026-08-19',
    time: '09.00',
    title: 'Tour Organisasi dan UKM',
    category: 'Kampus',
    location: 'Plaza Mahasiswa',
    description:
      'Expo organisasi, unit kegiatan mahasiswa, komunitas riset, dan jalur pengembangan minat.',
  },
  {
    id: 4,
    date: '2026-08-20',
    time: '13.00',
    title: 'Workshop Etika Digital',
    category: 'Pengembangan',
    location: 'Lab Multimedia',
    description:
      'Materi keamanan akun, etika komunikasi, dan penggunaan platform digital kampus.',
  },
  {
    id: 5,
    date: '2026-08-21',
    time: '15.30',
    title: 'Refleksi Kelompok',
    category: 'Penutup',
    location: 'Lapangan Utama',
    description:
      'Presentasi singkat kelompok, refleksi pengalaman, dan pengumuman tindak lanjut.',
  },
]

export const assignments = [
  {
    id: 1,
    title: 'Lengkapi Biodata Peserta',
    category: 'Administrasi',
    deadline: '2026-08-10',
    status: 'Selesai',
    priority: 'Tinggi',
    progress: 100,
    description:
      'Isi data diri, kontak darurat, fakultas, dan unggah foto formal untuk kartu peserta.',
  },
  {
    id: 2,
    title: 'Twibbon dan Perkenalan Diri',
    category: 'Kreatif',
    deadline: '2026-08-12',
    status: 'Berjalan',
    priority: 'Sedang',
    progress: 65,
    description:
      'Unggah twibbon resmi dan tulis perkenalan singkat sesuai format caption panitia.',
  },
  {
    id: 3,
    title: 'Rangkuman Materi Kampus',
    category: 'Akademik',
    deadline: '2026-08-14',
    status: 'Belum Mulai',
    priority: 'Sedang',
    progress: 0,
    description:
      'Buat rangkuman satu halaman tentang sistem kredit semester dan layanan akademik.',
  },
  {
    id: 4,
    title: 'Daftar Perlengkapan Hari Pertama',
    category: 'Lapangan',
    deadline: '2026-08-15',
    status: 'Berjalan',
    priority: 'Tinggi',
    progress: 45,
    description:
      'Checklist atribut, alat tulis, botol minum, jas almamater, dan kartu identitas.',
  },
  {
    id: 5,
    title: 'Peta Rute Kampus',
    category: 'Kampus',
    deadline: '2026-08-16',
    status: 'Belum Mulai',
    priority: 'Rendah',
    progress: 0,
    description:
      'Tandai lokasi aula, fakultas, klinik, kantin, dan pos informasi pada peta kampus.',
  },
  {
    id: 6,
    title: 'Jurnal Refleksi Harian',
    category: 'Refleksi',
    deadline: '2026-08-21',
    status: 'Belum Mulai',
    priority: 'Rendah',
    progress: 0,
    description:
      'Tuliskan pengalaman, insight, dan rencana adaptasi setelah mengikuti kegiatan.',
  },
]

export const checklistItems = [
  {
    id: 'identity',
    label: 'Kartu identitas dan bukti registrasi',
    done: true,
  },
  {
    id: 'uniform',
    label: 'Atribut dan pakaian sesuai panduan',
    done: false,
  },
  {
    id: 'stationery',
    label: 'Alat tulis, buku catatan, dan name tag',
    done: false,
  },
  {
    id: 'health',
    label: 'Botol minum, obat pribadi, dan masker cadangan',
    done: true,
  },
]

export const faqItems = [
  {
    id: 1,
    question: 'Apakah MabaHub membutuhkan backend?',
    answer:
      'Tidak. Versi portfolio ini memakai data dummy dari file JS dan menyimpan login demo serta checklist ke localStorage.',
  },
  {
    id: 2,
    question: 'Bagaimana peserta tahu tugas yang mendekati deadline?',
    answer:
      'Halaman penugasan menyediakan pencarian, filter kategori, filter status, deadline, prioritas, dan progress.',
  },
  {
    id: 3,
    question: 'Apakah dashboard bisa dipakai tanpa akun asli?',
    answer:
      'Bisa. Peserta cukup mengisi nama dan fakultas pada login demo. Data tersebut tersimpan lokal di browser.',
  },
  {
    id: 4,
    question: 'Apa yang bisa dikembangkan setelah versi portfolio?',
    answer:
      'Fitur berikutnya bisa berupa autentikasi asli, dashboard admin, upload tugas, notifikasi deadline, dan integrasi spreadsheet.',
  },
]

export const guideSections = [
  {
    id: 1,
    title: 'Sebelum Kegiatan',
    items: [
      'Cek timeline dan simpan tanggal penting.',
      'Lengkapi biodata serta kontak darurat.',
      'Baca panduan atribut dan perlengkapan.',
    ],
  },
  {
    id: 2,
    title: 'Saat Kegiatan',
    items: [
      'Datang 30 menit sebelum sesi dimulai.',
      'Gunakan name tag dan ikuti arahan mentor kelompok.',
      'Catat perubahan jadwal dari panitia.',
    ],
  },
  {
    id: 3,
    title: 'Setelah Kegiatan',
    items: [
      'Kumpulkan jurnal refleksi sesuai deadline.',
      'Cek pengumuman tindak lanjut dari fakultas.',
      'Simpan kontak penting untuk masa orientasi akademik.',
    ],
  },
]

export const contacts = [
  {
    name: 'Rara Putri',
    role: 'Koordinator Peserta',
    phone: '+62812 3456 7890',
    email: 'peserta@mabahub.test',
  },
  {
    name: 'Dimas Arya',
    role: 'Helpdesk Penugasan',
    phone: '+62813 2468 1357',
    email: 'tugas@mabahub.test',
  },
]
