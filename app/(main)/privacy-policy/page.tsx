import type { ReactElement } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Clock, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Separator from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PrivacyPolicy(): ReactElement {
  return (
    <>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Legal
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Kebijakan Privasi</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Terakhir diperbarui: 15 Maret 2024</p>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="bg-gray-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 mt-6">Daftar Isi</h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li className="text-primary hover:underline cursor-pointer">Pendahuluan</li>
                <li className="text-primary hover:underline cursor-pointer">Informasi yang Kami Kumpulkan</li>
                <li className="text-primary hover:underline cursor-pointer">
                  Bagaimana Kami Menggunakan Informasi Anda
                </li>
                <li className="text-primary hover:underline cursor-pointer">Berbagi Informasi</li>
                <li className="text-primary hover:underline cursor-pointer">Keamanan Data</li>
                <li className="text-primary hover:underline cursor-pointer">Hak Privasi Anda</li>
                <li className="text-primary hover:underline cursor-pointer">Kebijakan Cookie</li>
                <li className="text-primary hover:underline cursor-pointer">Perubahan pada Kebijakan Privasi</li>
                <li className="text-primary hover:underline cursor-pointer">Hubungi Kami</li>
              </ol>
            </CardContent>
          </Card>

          {/* Introduction */}
          <section id="introduction" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">1. Pendahuluan</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                ML Analysis ("kami", "kita", atau "milik kami") berkomitmen untuk melindungi privasi Anda. Kebijakan
                Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan mengungkapkan informasi tentang
                Anda ketika Anda menggunakan layanan kami, termasuk aplikasi web dan mobile kami (secara kolektif
                disebut "Layanan").
              </p>
              <p>
                Dengan menggunakan Layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini.
                Jika Anda tidak setuju dengan Kebijakan Privasi ini, harap jangan gunakan Layanan kami.
              </p>
              <p>
                Kebijakan Privasi ini berlaku untuk semua pengguna Layanan kami, termasuk pengguna gratis dan
                berlangganan.
              </p>
            </div>
          </section>

          <Separator />

          {/* Information We Collect */}
          <section id="information-collected" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">2. Informasi yang Kami Kumpulkan</h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Kami mengumpulkan beberapa jenis informasi dari dan tentang pengguna Layanan kami, termasuk:</p>
              <h3 className="text-xl font-semibold mt-6 text-black">2.1 Informasi yang Anda Berikan Kepada Kami</h3>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong className="text-black">Informasi Akun:</strong> Ketika Anda mendaftar untuk Layanan kami, kami mengumpulkan informasi
                  seperti nama, alamat email, dan kata sandi Anda.
                </li>
                <li>
                  <strong className="text-black">Informasi Profil:</strong> Anda dapat memilih untuk memberikan informasi tambahan seperti foto
                  profil, nama tim, dan preferensi.
                </li>
                <li>
                  <strong className="text-black">Informasi Pembayaran:</strong> Jika Anda berlangganan layanan premium kami, kami mengumpulkan
                  informasi pembayaran, termasuk detail kartu kredit atau informasi pembayaran lainnya.
                </li>
                <li>
                  <strong className="text-black">Konten Pengguna:</strong> Kami mengumpulkan konten yang Anda buat, unggah, atau bagikan
                  melalui Layanan kami, seperti analisis pertandingan, catatan, dan komentar.
                </li>
                <li>
                  <strong className="text-black">Komunikasi:</strong> Kami menyimpan salinan korespondensi apa pun jika Anda menghubungi kami.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 text-black">2.2 Informasi yang Kami Kumpulkan Secara Otomatis</h3>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong className="text-black">Informasi Perangkat:</strong> Kami mengumpulkan informasi tentang perangkat yang Anda gunakan
                  untuk mengakses Layanan kami, termasuk model perangkat, sistem operasi, dan pengidentifikasi perangkat
                  unik.
                </li>
                <li>
                  <strong className="text-black">Informasi Log:</strong> Kami mencatat informasi tentang penggunaan Layanan kami, termasuk
                  alamat IP, jenis browser, halaman yang dikunjungi, waktu dan tanggal kunjungan Anda, dan halaman yang
                  Anda lihat sebelum dan sesudah mengunjungi Layanan kami.
                </li>
                <li>
                  <strong className="text-black">Informasi Lokasi:</strong> Dengan persetujuan Anda, kami mungkin mengumpulkan informasi
                  tentang lokasi Anda untuk menyediakan fitur tertentu dari Layanan kami.
                </li>
                <li>
                  <strong className="text-black">Cookie dan Teknologi Pelacakan:</strong> Kami menggunakan cookie dan teknologi pelacakan
                  serupa untuk mengumpulkan informasi tentang aktivitas browsing Anda. Lihat Kebijakan Cookie kami untuk
                  informasi lebih lanjut.
                </li>
              </ul>
            </div>
          </section>

          <Separator />

          {/* How We Use Your Information */}
          <section id="information-usage" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-black">3. Bagaimana Kami Menggunakan Informasi Anda</h2>

            <div className="prose prose-lg max-w-none text-gray-700" >
              <p>Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong className="text-black">Menyediakan Layanan:</strong> Untuk mengoperasikan, memelihara, dan meningkatkan Layanan kami.
                </li>
                <li>
                  <strong className="text-black">Personalisasi:</strong> Untuk mempersonalisasi pengalaman Anda dan memberikan konten dan fitur
                  yang mungkin menarik bagi Anda.
                </li>
                <li>
                  <strong className="text-black">Komunikasi:</strong> Untuk berkomunikasi dengan Anda tentang Layanan kami, merespons
                  pertanyaan, dan memberikan dukungan pelanggan.
                </li>
                <li>
                  <strong className="text-black">Pemasaran:</strong> Untuk mengirimkan email pemasaran tentang fitur baru, penawaran khusus,
                  atau informasi lain yang menurut kami menarik bagi Anda. Anda dapat memilih untuk tidak menerima
                  komunikasi pemasaran kapan saja.
                </li>
                <li>
                  <strong className="text-black">Analitik:</strong> Untuk memahami bagaimana pengguna mengakses dan menggunakan Layanan kami,
                  dan untuk meningkatkan Layanan kami.
                </li>
                <li>
                  <strong className="text-black">Keamanan:</strong> Untuk mendeteksi, mencegah, dan mengatasi masalah keamanan, penipuan, dan
                  aktivitas ilegal.
                </li>
                <li>
                  <strong className="text-black">Kepatuhan Hukum:</strong> Untuk mematuhi kewajiban hukum dan menanggapi permintaan dari
                  otoritas publik.
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 mt-6">
              <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Catatan Penting</p>
                <p className="text-yellow-700 text-sm">
                  Kami tidak akan menjual informasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa
                  persetujuan eksplisit dari Anda.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Sharing Information */}
          <section id="information-sharing" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">4. Berbagi Informasi</h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Kami dapat membagikan informasi Anda dengan pihak ketiga dalam keadaan tertentu, termasuk:</p>

              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong className="text-black">Dengan Persetujuan Anda:</strong> Kami akan membagikan informasi pribadi Anda dengan
                  perusahaan, organisasi, atau individu di luar ML Analysis ketika kami memiliki persetujuan Anda untuk
                  melakukannya.
                </li>
                <li>
                  <strong className="text-black">Dengan Penyedia Layanan:</strong> Kami membagikan informasi dengan penyedia layanan pihak
                  ketiga yang melakukan layanan atas nama kami, seperti pemrosesan pembayaran, analisis data, pengiriman
                  email, hosting, dan layanan pelanggan.
                </li>
                <li>
                  <strong className="text-black">Untuk Kepatuhan Hukum:</strong> Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum
                  atau dalam menanggapi permintaan yang sah dari otoritas publik (misalnya, pengadilan atau lembaga
                  pemerintah).
                </li>
                <li>
                  <strong className="text-black">Untuk Melindungi Hak:</strong> Kami dapat mengungkapkan informasi jika kami percaya bahwa
                  pengungkapan tersebut diperlukan untuk melindungi hak, properti, atau keselamatan kami, pengguna kami,
                  atau publik.
                </li>
                <li>
                  <strong className="text-black">Dalam Transaksi Bisnis:</strong> Jika ML Analysis terlibat dalam merger, akuisisi, atau
                  penjualan aset, informasi pengguna Anda mungkin ditransfer sebagai bagian dari transaksi tersebut.
                </li>
                <li>
                  <strong className="text-black">Data Agregat atau De-identifikasi:</strong> Kami dapat membagikan informasi agregat atau
                  de-identifikasi yang tidak dapat digunakan untuk mengidentifikasi Anda dengan pihak ketiga untuk
                  tujuan apa pun.
                </li>
              </ul>
            </div>

            <div className="overflow-x-auto mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Kategori Penerima</TableHead>
                    <TableHead>Jenis Data yang Dibagikan</TableHead>
                    <TableHead>Tujuan</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Penyedia Layanan Hosting</TableCell>
                    <TableCell>Data akun, konten pengguna</TableCell>
                    <TableCell>Untuk menyimpan dan mengelola data Anda</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Prosesor Pembayaran</TableCell>
                    <TableCell>Informasi pembayaran</TableCell>
                    <TableCell>Untuk memproses pembayaran langganan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Penyedia Analitik</TableCell>
                    <TableCell>Data penggunaan, informasi perangkat</TableCell>
                    <TableCell>Untuk menganalisis penggunaan layanan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Penyedia Email</TableCell>
                    <TableCell>Alamat email, nama</TableCell>
                    <TableCell>Untuk mengirim notifikasi dan pemasaran</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <Separator />

          {/* Data Security */}
          <section id="data-security" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">5. Keamanan Data</h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari kehilangan,
                penyalahgunaan, dan akses, pengungkapan, perubahan, atau penghancuran yang tidak sah. Langkah-langkah
                keamanan kami meliputi:
              </p>

              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>
                  <strong>Enkripsi:</strong> Kami menggunakan enkripsi standar industri untuk melindungi data sensitif
                  yang ditransmisikan ke dan dari situs kami.
                </li>
                <li>
                  <strong>Akses Terbatas:</strong> Kami membatasi akses ke informasi pribadi hanya kepada karyawan,
                  kontraktor, dan agen yang perlu mengetahui informasi tersebut untuk mengoperasikan, mengembangkan,
                  atau meningkatkan Layanan kami.
                </li>
                <li>
                  <strong>Penyimpanan Aman:</strong> Kami menyimpan data Anda di lingkungan yang aman dengan
                  perlindungan fisik dan teknis yang sesuai.
                </li>
                <li>
                  <strong>Pemantauan Reguler:</strong> Kami secara teratur meninjau praktik pengumpulan, penyimpanan,
                  dan pemrosesan informasi kami, termasuk tindakan keamanan fisik, untuk melindungi terhadap akses yang
                  tidak sah.
                </li>
              </ul>

              <p>
                Meskipun kami berusaha untuk melindungi informasi pribadi Anda, tidak ada metode transmisi melalui
                internet atau metode penyimpanan elektronik yang 100% aman. Oleh karena itu, kami tidak dapat menjamin
                keamanan mutlak.
              </p>
            </div>
          </section>

          {/* More sections would continue here... */}

          <Separator />

          {/* Contact Us */}
          <section id="contact-us" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">9. Hubungi Kami</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini atau praktik privasi kami,
                silakan hubungi kami di:
              </p>

              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="font-medium">ML Analysis Indonesia</p>
                <p className="text-muted-foreground">
                  Jl. Teknologi No. 123
                  <br />
                  Kota Jakarta Selatan
                  <br />
                  DKI Jakarta 12950
                  <br />
                  Indonesia
                </p>
                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:privacy@mlanalysis.com" className="text-primary hover:underline">
                    privacy@mlanalysis.com
                  </a>
                </p>
                <p>
                  <strong>Telepon:</strong>{" "}
                  <a href="tel:+6281234567890" className="text-primary hover:underline">
                    +62 812-3456-7890
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

