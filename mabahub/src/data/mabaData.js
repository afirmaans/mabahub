import { activities } from './activities'
import { faqs } from './faqs'
import { tasks } from './tasks'

export const launchDate = '2026-08-17T08:00:00+07:00'

export const heroStats = [
  {
    label: 'Peserta',
    value: '1.280',
  },
  {
    label: 'Tugas',
    value: String(tasks.length),
  },
  {
    label: 'Hari kegiatan',
    value: String(activities.length),
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

export const timelineEvents = activities.map((activity, index) => ({
  id: index + 1,
  category: `Hari ${index + 1}`,
  ...activity,
}))

export const assignments = tasks.map((task) => ({
  ...task,
  progress:
    task.status === 'Selesai' ? 100 : task.status === 'Berjalan' ? 55 : 0,
}))

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

export const faqItems = faqs

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
