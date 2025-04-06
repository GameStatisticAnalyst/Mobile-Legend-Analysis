import type { ReactElement } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FileText, Clock, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Separator from "@/components/ui/separator"

export default function TermsOfService(): ReactElement {
  return (
    <>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Legal
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Ketentuan Layanan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Syarat dan ketentuan penggunaan platform ML Analysis
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Terakhir diperbarui: 15 Maret 2024</p>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4 mt-6">Daftar Isi</h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li className="text-primary hover:underline cursor-pointer">Penerimaan Ketentuan</li>
                <li className="text-primary hover:underline cursor-pointer">Perubahan pada Ketentuan</li>
                <li className="text-primary hover:underline cursor-pointer">Akses dan Penggunaan Layanan</li>
                <li className="text-primary hover:underline cursor-pointer">Akun Pengguna</li>
                <li className="text-primary hover:underline cursor-pointer">Konten Pengguna</li>
                <li className="text-primary hover:underline cursor-pointer">Hak Kekayaan Intelektual</li>
                <li className="text-primary hover:underline cursor-pointer">Pembayaran dan Langganan</li>
                <li className="text-primary hover:underline cursor-pointer">Penghentian</li>
                <li className="text-primary hover:underline cursor-pointer">Penafian Jaminan</li>
                <li className="text-primary hover:underline cursor-pointer">Batasan Tanggung Jawab</li>
                <li className="text-primary hover:underline cursor-pointer">Ganti Rugi</li>
                <li className="text-primary hover:underline cursor-pointer">Hukum yang Berlaku</li>
                <li className="text-primary hover:underline cursor-pointer">Hubungi Kami</li>
              </ol>
            </CardContent>
          </Card>

          {/* Introduction */}
          <section id="acceptance" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">1. Penerimaan Ketentuan</h2>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Selamat datang di ML Analysis. Ketentuan Layanan ini ("Ketentuan") mengatur penggunaan Anda atas situs
                web, aplikasi mobile, dan layanan lain yang disediakan oleh ML Analysis ("Layanan").
              </p>
              <p>
                Dengan mengakses atau menggunakan Layanan kami, Anda menyetujui untuk terikat oleh Ketentuan ini. Jika
                Anda tidak setuju dengan Ketentuan ini, Anda tidak boleh mengakses atau menggunakan Layanan kami.
              </p>
              <p>
                Anda harus berusia minimal 13 tahun untuk menggunakan Layanan kami. Jika Anda berusia di bawah 18 tahun,
                Anda harus memiliki persetujuan dari orang tua atau wali Anda untuk menggunakan Layanan kami.
              </p>
            </div>
          </section>

          <Separator />

          {/* Changes to Terms */}
          <section id="changes" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">2. Perubahan pada Ketentuan</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau memodifikasi Ketentuan ini kapan saja.
                Jika kami melakukan perubahan, kami akan memberi tahu Anda dengan memperbarui tanggal "Terakhir
                diperbarui" di bagian atas Ketentuan ini dan, dalam beberapa kasus, kami mungkin memberi Anda
                pemberitahuan tambahan (seperti menambahkan pernyataan di halaman beranda Layanan kami atau mengirimkan
                pemberitahuan email).
              </p>
              <p>
                Kami mendorong Anda untuk meninjau Ketentuan ini secara teratur untuk tetap mendapatkan informasi
                tentang pembaruan. Perubahan pada Ketentuan ini akan berlaku segera setelah diposting. Penggunaan Anda
                yang berkelanjutan atas Layanan kami setelah perubahan tersebut merupakan penerimaan Anda atas Ketentuan
                yang direvisi.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3 mt-6">
              <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Catatan Penting</p>
                <p className="text-yellow-700 text-sm">
                  Adalah tanggung jawab Anda untuk meninjau Ketentuan ini secara berkala. Penggunaan berkelanjutan atas
                  Layanan kami setelah perubahan apa pun merupakan penerimaan Anda atas Ketentuan yang direvisi.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Access and Use of Services */}
          <section id="access-use" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">3. Akses dan Penggunaan Layanan</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6">3.1 Lisensi</h3>
              <p>
                Dengan tunduk pada kepatuhan Anda terhadap Ketentuan ini, kami memberi Anda lisensi terbatas,
                non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk mengakses dan menggunakan Layanan kami
                untuk tujuan pribadi atau bisnis internal Anda.
              </p>

              <h3 className="text-xl font-semibold mt-6">3.2 Pembatasan</h3>
              <p>Anda setuju untuk tidak:</p>
              <ul>
                <li>Menyalin, memodifikasi, atau membuat karya turunan dari Layanan kami.</li>
                <li>Melakukan reverse engineering, mendekompilasi, atau membongkar Layanan kami.</li>
                <li>
                  Menyewakan, menyewakan, meminjamkan, menjual, mendistribusikan, atau mensublisensikan Layanan kami.
                </li>
                <li>Menggunakan Layanan kami untuk tujuan ilegal atau tidak sah.</li>
                <li>
                  Menggunakan Layanan kami dengan cara yang dapat merusak, menonaktifkan, membebani, atau mengganggu
                  Layanan kami.
                </li>
                <li>Menggunakan robot, spider, atau alat otomatis lainnya untuk mengakses Layanan kami.</li>
                <li>
                  Menghapus pemberitahuan hak cipta, merek dagang, atau hak kepemilikan lainnya dari Layanan kami.
                </li>
                <li>
                  Menggunakan Layanan kami untuk mengumpulkan atau mengumpulkan informasi atau data pengguna lain tanpa
                  persetujuan mereka.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">3.3 Pemeliharaan dan Dukungan</h3>
              <p>
                Kami dapat, dari waktu ke waktu, melakukan pemeliharaan pada Layanan kami, yang dapat mengakibatkan
                periode tidak tersedianya Layanan. Kami akan berusaha untuk memberi tahu Anda sebelumnya tentang
                pemeliharaan yang dijadwalkan, tetapi kami tidak dapat menjamin bahwa semua pemeliharaan akan diumumkan
                sebelumnya.
              </p>
            </div>
          </section>

          <Separator />

          {/* User Accounts */}
          <section id="user-accounts" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">4. Akun Pengguna</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6">4.1 Pembuatan Akun</h3>
              <p>
                Untuk mengakses beberapa fitur Layanan kami, Anda mungkin perlu membuat akun. Anda setuju untuk
                memberikan informasi yang akurat, terkini, dan lengkap selama proses pendaftaran dan untuk memperbarui
                informasi tersebut untuk menjaga keakuratan dan kelengkapannya.
              </p>

              <h3 className="text-xl font-semibold mt-6">4.2 Keamanan Akun</h3>
              <p>
                Anda bertanggung jawab untuk menjaga kerahasiaan kredensial akun Anda, termasuk kata sandi Anda, dan
                untuk semua aktivitas yang terjadi di bawah akun Anda. Anda setuju untuk segera memberi tahu kami
                tentang penggunaan yang tidak sah atas akun Anda atau pelanggaran keamanan lainnya.
              </p>

              <h3 className="text-xl font-semibold mt-6">4.3 Penghentian Akun</h3>
              <p>
                Kami berhak untuk menangguhkan atau menghentikan akun Anda dan akses Anda ke Layanan kami, dengan atau
                tanpa pemberitahuan, untuk alasan apa pun, termasuk, tanpa batasan, jika kami percaya bahwa Anda telah
                melanggar Ketentuan ini.
              </p>
            </div>
          </section>

          <Separator />

          {/* User Content */}
          <section id="user-content" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">5. Konten Pengguna</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6">5.1 Kepemilikan Konten</h3>
              <p>
                Anda mempertahankan semua hak dan kepemilikan atas konten yang Anda kirimkan, posting, atau tampilkan di
                atau melalui Layanan kami ("Konten Pengguna"). Dengan mengirimkan Konten Pengguna ke Layanan kami, Anda
                memberi kami lisensi di seluruh dunia, non-eksklusif, bebas royalti, dapat disublisensikan, dan dapat
                dialihkan untuk menggunakan, mereproduksi, memodifikasi, mengadaptasi, mempublikasikan, mentransmisikan,
                menampilkan, dan mendistribusikan Konten Pengguna tersebut di media apa pun dan dengan cara apa pun.
              </p>

              <h3 className="text-xl font-semibold mt-6">5.2 Konten yang Dilarang</h3>
              <p>Anda setuju untuk tidak mengirimkan, memposting, atau menampilkan Konten Pengguna yang:</p>
              <ul>
                <li>Melanggar hukum atau mempromosikan aktivitas ilegal.</li>
                <li>Melanggar hak kekayaan intelektual pihak ketiga.</li>
                <li>Memfitnah, mencemarkan nama baik, mengancam, atau melecehkan pihak lain.</li>
                <li>Mengandung materi yang tidak senonoh, cabul, atau menyinggung.</li>
                <li>Mengandung virus, worm, atau kode berbahaya lainnya.</li>
                <li>Menyamar sebagai orang atau entitas lain.</li>
                <li>Mengumpulkan atau meminta informasi pribadi dari pengguna lain.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6">5.3 Pemantauan dan Penegakan</h3>
              <p>
                Kami berhak, tetapi tidak berkewajiban, untuk memantau dan meninjau Konten Pengguna. Kami berhak, atas
                kebijakan kami sendiri, untuk menghapus atau menonaktifkan akses ke Konten Pengguna yang kami tentukan
                melanggar Ketentuan ini atau berbahaya bagi Layanan atau pengguna kami.
              </p>
            </div>
          </section>

          <Separator />

          {/* Intellectual Property */}
          <section id="intellectual-property" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">6. Hak Kekayaan Intelektual</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6">6.1 Hak Kami</h3>
              <p>
                Layanan kami dan kontennya, termasuk tetapi tidak terbatas pada teks, grafik, logo, ikon, gambar, klip
                audio, unduhan digital, kompilasi data, dan perangkat lunak, adalah milik ML Analysis atau pemberi
                lisensinya dan dilindungi oleh hukum hak cipta, merek dagang, dan hak kekayaan intelektual lainnya.
              </p>

              <h3 className="text-xl font-semibold mt-6">6.2 Umpan Balik</h3>
              <p>
                Jika Anda memberikan umpan balik, ide, atau saran kepada kami tentang Layanan kami ("Umpan Balik"), Anda
                memberikan kepada kami hak yang tidak terbatas, abadi, tidak dapat dicabut, bebas royalti, dan dapat
                dialihkan untuk menggunakan Umpan Balik tersebut untuk tujuan apa pun tanpa kompensasi kepada Anda.
              </p>
            </div>
          </section>

          <Separator />

          {/* Payments and Subscriptions */}
          <section id="payments" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">7. Pembayaran dan Langganan</h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-semibold mt-6">7.1 Biaya dan Pembayaran</h3>
              <p>
                Beberapa fitur Layanan kami mungkin memerlukan pembayaran biaya. Semua biaya tidak dapat dikembalikan
                kecuali dinyatakan lain secara eksplisit. Anda setuju untuk membayar semua biaya yang terkait dengan
                penggunaan Layanan kami oleh Anda.
              </p>

              <h3 className="text-xl font-semibold mt-6">7.2 Langganan</h3>
              <p>
                Beberapa Layanan kami mungkin ditawarkan berdasarkan langganan. Dengan berlangganan Layanan kami, Anda
                setuju bahwa langganan Anda akan diperpanjang secara otomatis untuk periode yang sama dengan langganan
                awal Anda kecuali Anda membatalkannya setidaknya 24 jam sebelum akhir periode langganan saat ini.
              </p>

              <h3 className="text-xl font-semibold mt-6">7.3 Perubahan Harga</h3>
              <p>
                Kami berhak untuk mengubah harga Layanan kami kapan saja. Jika kami mengubah harga, kami akan memberi
                tahu Anda sebelum perubahan tersebut berlaku. Penggunaan Anda yang berkelanjutan atas Layanan kami
                setelah perubahan harga merupakan penerimaan Anda atas harga baru.
              </p>
            </div>
          </section>

          <Separator />

          {/* Termination */}
          <section id="termination" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">8. Penghentian</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                Kami berhak untuk menghentikan atau menangguhkan akses Anda ke Layanan kami, dengan atau tanpa
                pemberitahuan, untuk alasan apa pun, termasuk, tanpa batasan, jika kami percaya bahwa Anda telah
                melanggar Ketentuan ini.
              </p>
              <p>
                Semua ketentuan dalam Ketentuan ini yang menurut sifatnya harus bertahan setelah penghentian akan
                bertahan, termasuk, tanpa batasan, ketentuan kepemilikan, penafian jaminan, ganti rugi, dan batasan
                tanggung jawab.
              </p>
            </div>
          </section>

          <Separator />

          {/* Disclaimer of Warranties */}
          <section id="disclaimer" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">9. Penafian Jaminan</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                LAYANAN KAMI DISEDIAKAN "SEBAGAIMANA ADANYA" DAN "SEBAGAIMANA TERSEDIA" TANPA JAMINAN APA PUN, BAIK
                TERSURAT MAUPUN TERSIRAT, TERMASUK, TETAPI TIDAK TERBATAS PADA, JAMINAN TERSIRAT TENTANG KELAYAKAN UNTUK
                DIPERDAGANGKAN, KESESUAIAN UNTUK TUJUAN TERTENTU, ATAU NON-PELANGGARAN.
              </p>
              <p>
                KAMI TIDAK MENJAMIN BAHWA LAYANAN KAMI AKAN MEMENUHI PERSYARATAN ANDA, BAHWA LAYANAN KAMI AKAN TERSEDIA
                SECARA TIDAK TERPUTUS, TEPAT WAKTU, AMAN, ATAU BEBAS KESALAHAN, ATAU BAHWA HASIL YANG DAPAT DIPEROLEH
                DARI PENGGUNAAN LAYANAN KAMI AKAN AKURAT ATAU DAPAT DIANDALKAN.
              </p>
            </div>
          </section>

          <Separator />

          {/* Limitation of Liability */}
          <section id="liability" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">10. Batasan Tanggung Jawab</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                DALAM KEADAAN APA PUN, ML ANALYSIS, AFILIASI, DIREKTUR, KARYAWAN, AGEN, ATAU PEMBERI LISENSINYA TIDAK
                BERTANGGUNG JAWAB ATAS KERUSAKAN TIDAK LANGSUNG, INSIDENTAL, KHUSUS, KONSEKUENSIAL, ATAU PUNITIF,
                TERMASUK, TANPA BATASAN, KEHILANGAN KEUNTUNGAN, DATA, PENGGUNAAN, NIAT BAIK, ATAU KERUGIAN TIDAK
                BERWUJUD LAINNYA, YANG DIHASILKAN DARI PENGGUNAAN ANDA ATAS, ATAU KETIDAKMAMPUAN UNTUK MENGGUNAKAN,
                LAYANAN KAMI.
              </p>
              <p>
                DALAM KEADAAN APA PUN, TANGGUNG JAWAB AGREGAT KAMI YANG TIMBUL DARI ATAU TERKAIT DENGAN KETENTUAN INI
                TIDAK AKAN MELEBIHI JUMLAH YANG TELAH ANDA BAYARKAN KEPADA KAMI SELAMA PERIODE ENAM BULAN SEBELUM
                TINDAKAN YANG MENIMBULKAN TANGGUNG JAWAB TERSEBUT ATAU, JIKA TIDAK ADA JUMLAH YANG DIBAYARKAN, SERATUS
                DOLAR ($100).
              </p>
            </div>
          </section>

          <Separator />

          {/* Contact Us */}
          <section id="contact-us" className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">13. Hubungi Kami</h2>

            <div className="prose prose-lg max-w-none">
              <p>Jika Anda memiliki pertanyaan tentang Ketentuan Layanan ini, silakan hubungi kami di:</p>

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
                  <a href="mailto:legal@mlanalysis.com" className="text-primary hover:underline">
                    legal@mlanalysis.com
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

