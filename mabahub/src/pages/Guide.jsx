import FAQItem from '../components/FAQItem'
import SectionHeader from '../components/SectionHeader'
import { faqs } from '../data/faqs'

const guideSections = [
  {
    id: 1,
    title: 'Panduan Umum Peserta',
    description:
      'Peserta diharapkan membaca seluruh informasi kegiatan sebelum hari pelaksanaan agar dapat mengikuti rangkaian acara dengan tertib.',
    items: [
      'Cek jadwal kegiatan secara berkala.',
      'Pastikan data diri dan kelompok sudah sesuai.',
      'Ikuti arahan mentor, panitia, dan koordinator lapangan.',
      'Simpan kontak penting panitia untuk keadaan mendesak.',
    ],
  },
  {
    id: 2,
    title: 'Tata Tertib Kegiatan',
    description:
      'Tata tertib dibuat agar kegiatan mahasiswa baru berjalan aman, nyaman, dan terkoordinasi.',
    items: [
      'Datang tepat waktu sesuai jadwal yang ditentukan.',
      'Menjaga sikap sopan selama mengikuti kegiatan.',
      'Tidak meninggalkan area kegiatan tanpa izin.',
      'Mengikuti presensi awal dan akhir sesi.',
    ],
  },
  {
    id: 3,
    title: 'Dresscode',
    description:
      'Peserta wajib memakai pakaian dan atribut sesuai ketentuan harian yang diumumkan oleh panitia.',
    items: [
      'Memakai pakaian rapi dan sopan.',
      'Menggunakan sepatu tertutup selama kegiatan.',
      'Membawa dan memakai name tag peserta.',
      'Mengikuti arahan warna atau atribut khusus jika ada.',
    ],
  },
  {
    id: 4,
    title: 'Barang yang Perlu Disiapkan',
    description:
      'Barang pribadi perlu disiapkan sebelum kegiatan agar peserta tidak kesulitan saat mengikuti rangkaian acara.',
    items: [
      'Kartu identitas dan bukti registrasi.',
      'Alat tulis dan buku catatan.',
      'Botol minum pribadi.',
      'Obat pribadi jika diperlukan.',
    ],
  },
  {
    id: 5,
    title: 'Alur Mengikuti Kegiatan',
    description:
      'Alur ini membantu peserta memahami tahapan umum dari awal kedatangan hingga kegiatan selesai.',
    items: [
      'Datang ke lokasi sesuai jadwal.',
      'Melakukan registrasi atau presensi.',
      'Bergabung dengan kelompok masing-masing.',
      'Mengikuti sesi materi, diskusi, atau penugasan.',
      'Melakukan presensi akhir sebelum pulang.',
    ],
  },
  {
    id: 6,
    title: 'Catatan Penting',
    description:
      'Beberapa informasi dapat berubah sesuai kondisi lapangan, sehingga peserta perlu aktif memantau pengumuman resmi.',
    items: [
      'Perubahan jadwal akan diumumkan melalui kanal resmi.',
      'Peserta yang berhalangan hadir perlu menghubungi panitia.',
      'Keterlambatan pengumpulan tugas harus dikonfirmasi ke helpdesk.',
      'Utamakan keamanan, kesehatan, dan etika selama kegiatan.',
    ],
  },
]

export default function Guide() {
  return (
    <main className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Panduan"
          title="Panduan peserta MabaHub"
          description="Halaman ini berisi panduan umum, tata tertib, dresscode, perlengkapan, alur kegiatan, dan FAQ untuk mahasiswa baru."
        />

        <section className="guide-docs" aria-label="Panduan peserta">
          {guideSections.map((section) => (
            <article className="guide-section-card" key={section.id}>
              <div className="guide-section-number">{section.id}</div>

              <div>
                <h2>{section.title}</h2>
                <p>{section.description}</p>

                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="faq-section" aria-label="Pertanyaan yang sering diajukan">
          <div className="faq-header">
            <span className="eyebrow">FAQ</span>
            <h2>Pertanyaan yang sering diajukan</h2>
            <p>
              Accordion ini dibuat dengan React state sederhana. Peserta bisa
              membuka dan menutup pertanyaan sesuai kebutuhan.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}