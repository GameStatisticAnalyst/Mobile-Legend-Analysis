import {ReactElement} from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  BarChart3,
  FileText,
  Search,
  Shield,
  Users,
  Zap,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Guides():ReactElement{
  return(
    <>
    <Navbar/>
    <main className="container mx-auto py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Panduan Pengguna
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Cara Menggunakan ML Analysis</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Panduan lengkap untuk menganalisis pertandingan Mobile Legends dan mendapatkan wawasan berharga
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl">
              ML Analysis adalah platform yang dirancang untuk membantu pemain dan analis esports memahami pertandingan
              Mobile Legends secara mendalam. Dengan alat analisis kami, Anda dapat mengidentifikasi pola, strategi, dan
              area yang perlu ditingkatkan.
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="bg-gray-100">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4 mt-5 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Daftar Isi
              </h2>
              <ol className="space-y-2 list-decimal list-inside">
                <li className="text-primary hover:underline cursor-pointer">Memulai dengan ML Analysis</li>
                <li className="text-primary hover:underline cursor-pointer">Membuat Analisis Pertandingan</li>
                <li className="text-primary hover:underline cursor-pointer">Menggunakan Match Log</li>
                <li className="text-primary hover:underline cursor-pointer">Berbagi dan Berkolaborasi</li>
                <li className="text-primary hover:underline cursor-pointer">Tips Analisis Lanjutan</li>
              </ol>
            </CardContent>
          </Card>

          {/* Section 1 */}
          <section id="getting-started" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-2 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">1. Memulai dengan ML Analysis</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg">
                  Untuk memulai menggunakan ML Analysis, Anda perlu membuat akun dan masuk ke dashboard utama. Dari
                  sini, Anda akan memiliki akses ke semua fitur analisis.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <p>Buat akun dengan mengklik tombol "Register" di navbar</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <p>Masuk ke akun Anda menggunakan email dan password</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                    <p>Jelajahi dashboard untuk melihat analisis terbaru</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Dashboard ML Analysis"
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="creating-analysis" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-2 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">2. Membuat Analisis Pertandingan</h2>
            </div>

            <p className="text-lg">
              Membuat analisis pertandingan adalah inti dari platform kami. Berikut adalah langkah-langkah untuk membuat
              analisis yang komprehensif:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg border space-y-4">
                <h3 className="text-xl font-semibold">Langkah 1: Pilih Tim</h3>
                <p>
                  Pilih dua tim yang bertanding. Anda dapat memilih dari database tim yang ada atau menambahkan tim baru
                  jika belum terdaftar.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-md border flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">ONIC Esports</p>
                      <p className="text-sm text-muted-foreground">Indonesia</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md border flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">RRQ Hoshi</p>
                      <p className="text-sm text-muted-foreground">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg border space-y-4">
                <h3 className="text-xl font-semibold">Langkah 2: Tambahkan Detail Pertandingan</h3>
                <p>Masukkan informasi penting tentang pertandingan seperti tanggal, turnamen, dan deskripsi singkat.</p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white p-4 rounded-md border">
                    <p className="text-sm text-muted-foreground">Tanggal</p>
                    <p className="font-medium">9 Februari 2024</p>
                  </div>
                  <div className="bg-white p-4 rounded-md border">
                    <p className="text-sm text-muted-foreground">Turnamen</p>
                    <p className="font-medium">MPL Season 11</p>
                  </div>
                  <div className="bg-white p-4 rounded-md border">
                    <p className="text-sm text-muted-foreground">Tipe</p>
                    <p className="font-medium">Final</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg border space-y-4">
                <h3 className="text-xl font-semibold">Langkah 3: Catat Match Log</h3>
                <p>Rekam kejadian penting selama pertandingan dengan timestamp yang akurat.</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-white border-b">
                        <th className="p-2 text-left">Waktu</th>
                        <th className="p-2 text-left">Pemain</th>
                        <th className="p-2 text-left">Aksi</th>
                        <th className="p-2 text-left">Deskripsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2">00:02:15</td>
                        <td className="p-2">CW</td>
                        <td className="p-2">First Blood</td>
                        <td className="p-2">CW (Lancelot) mengalahkan Alberttt (Ling)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2">00:05:30</td>
                        <td className="p-2">Alberttt</td>
                        <td className="p-2">Tower Destroyed</td>
                        <td className="p-2">Alberttt (Ling) menghancurkan tower bawah</td>
                      </tr>
                      <tr>
                        <td className="p-2">00:08:45</td>
                        <td className="p-2">Butsss</td>
                        <td className="p-2">Lord Secure</td>
                        <td className="p-2">Butsss (Thamuz) mengamankan Lord</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="using-match-log" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-2 rounded-full">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">3. Menggunakan Match Log</h2>
            </div>

            <p className="text-lg">
              Match Log adalah fitur penting yang memungkinkan Anda melacak semua kejadian penting dalam pertandingan.
              Berikut cara menggunakannya secara efektif:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Jenis Kejadian yang Perlu Dicatat</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-red-100 p-1 rounded-full mt-0.5">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>First Blood</strong> - Pembunuhan pertama dalam pertandingan
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Tower Destroyed</strong> - Penghancuran tower
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Lord/Turtle Secure</strong> - Pengambilan objektif utama
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Team Fight</strong> - Pertempuran tim besar
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-yellow-100 p-1 rounded-full mt-0.5">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <span>
                      <strong>Game Changing Moment</strong> - Momen penting yang mengubah jalannya pertandingan
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tips Pencatatan yang Efektif</h3>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Catatan Penting</p>
                    <p className="text-yellow-700 text-sm">
                      Selalu catat timestamp dengan akurat untuk memudahkan analisis kronologis pertandingan.
                    </p>
                  </div>
                </div>
                <p>
                  Gunakan format waktu yang konsisten (mm:ss) dan pastikan untuk mencatat detail yang cukup pada setiap
                  kejadian.
                </p>
                <p>
                  Anda juga dapat menambahkan tag pada setiap kejadian untuk memudahkan pemfilteran dan pencarian nanti.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-2 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">4. Berbagi dan Berkolaborasi</h2>
            </div>

            <p className="text-lg">
              ML Analysis memungkinkan Anda berbagi hasil analisis dengan tim atau komunitas. Berikut cara memanfaatkan
              fitur kolaborasi:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="bg-gray-200 h-12 w-12 rounded-full mx-auto flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Berbagi dengan Tim</h3>
                    <p className="text-sm text-gray-500">
                      Bagikan analisis dengan anggota tim untuk perencanaan strategi bersama
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="bg-gray-200 h-12 w-12 rounded-full mx-auto flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Ekspor Laporan</h3>
                    <p className="text-sm text-gray-500">
                      Ekspor analisis dalam format PDF atau spreadsheet untuk dokumentasi
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="bg-gray-200 h-12 w-12 rounded-full mx-auto flex items-center justify-center">
                      <Search className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Publikasikan</h3>
                    <p className="text-sm text-gray-500">
                      Bagikan dengan komunitas untuk mendapatkan umpan balik dan diskusi
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5 */}
          <section id="advanced-tips" className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 p-2 rounded-full">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">5. Tips Analisis Lanjutan</h2>
            </div>

            <p className="text-lg">
              Untuk mendapatkan hasil maksimal dari ML Analysis, berikut beberapa tips lanjutan yang dapat Anda
              terapkan:
            </p>

            <div className="space-y-6">
              <div className="bg-gray-100 bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold mb-4">Analisis Pola Permainan</h3>
                <p className="mb-4">
                  Perhatikan pola permainan tim lawan untuk mengidentifikasi kebiasaan dan strategi mereka:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Rotasi hero dan timing pengambilan objektif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Formasi tim saat team fight dan posisi masing-masing pemain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Preferensi ban/pick hero dan counter-pick yang sering digunakan</span>
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Analisis Meta</h3>
                  <p>
                    Bandingkan strategi tim dengan meta game saat ini. Identifikasi apakah tim mengikuti meta atau
                    memiliki strategi unik yang berbeda.
                  </p>
                  <p className="mt-2">
                    Catat hero yang sering dipilih dan kombinasi hero yang efektif dalam pertandingan.
                  </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-3">Analisis Statistik</h3>
                  <p>
                    Gunakan data statistik untuk mendukung analisis kualitatif Anda. Perhatikan KDA, gold per minute,
                    damage dealt, dan statistik lainnya.
                  </p>
                  <p className="mt-2">
                    Bandingkan statistik antar pertandingan untuk melihat konsistensi pemain dan tim.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-100 p-8 rounded-lg border mt-12">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">Mulai Analisis Pertandingan Anda Sekarang</h2>
              <p className="text-muted-foreground">
                Dengan mengikuti panduan ini, Anda siap untuk membuat analisis pertandingan Mobile Legends yang
                komprehensif dan bermanfaat.
              </p>
              <p>Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi tim dukungan kami.</p>
              <div className="pt-4">
                <Badge className="text-sm px-3 py-1">Terakhir diperbarui: Maret 2024</Badge>
              </div>
            </div>
          </section>
        </div>
      </main>
    <Footer/>
    </>
  )
}