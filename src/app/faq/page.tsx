import type { ReactElement } from "react"
import Link from 'next/link'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { HelpCircle, Search, FileText, Settings, CreditCard, Smartphone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Input from "@/components/ui/input"
import Button from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// FAQ data
const faqCategories = [
  {
    id: "general",
    name: "Umum",
    icon: <HelpCircle className="h-5 w-5" />,
    questions: [
      {
        id: "what-is",
        question: "Apa itu ML Analysis?",
        answer:
          "ML Analysis adalah platform analisis pertandingan Mobile Legends yang membantu pemain dan tim esports untuk menganalisis pertandingan, mengidentifikasi pola, dan meningkatkan strategi permainan mereka. Platform ini menyediakan alat untuk mencatat kejadian penting, menganalisis statistik, dan berbagi wawasan dengan tim.",
      },
      {
        id: "who-for",
        question: "Siapa yang dapat menggunakan ML Analysis?",
        answer:
          "ML Analysis dapat digunakan oleh siapa saja yang tertarik dengan analisis Mobile Legends, termasuk pemain individu, tim esports, pelatih, analis, dan penggemar yang ingin memperdalam pemahaman mereka tentang permainan. Platform ini dirancang untuk pemula hingga profesional.",
      },
      {
        id: "free-or-paid",
        question: "Apakah ML Analysis gratis?",
        answer:
          "ML Analysis menawarkan versi dasar gratis dengan fitur terbatas dan paket premium dengan fitur lebih lengkap. Versi gratis memungkinkan Anda membuat analisis dasar, sementara paket premium menyediakan alat analisis lanjutan, penyimpanan tak terbatas, dan fitur kolaborasi tim.",
      },
    ],
  },
  {
    id: "account",
    name: "Akun & Pengaturan",
    icon: <Settings className="h-5 w-5" />,
    questions: [
      {
        id: "create-account",
        question: "Bagaimana cara membuat akun?",
        answer:
          "Untuk membuat akun, klik tombol 'Register' di pojok kanan atas halaman. Isi formulir pendaftaran dengan email, nama pengguna, dan kata sandi. Anda juga dapat mendaftar menggunakan akun Google atau Facebook Anda untuk proses yang lebih cepat.",
      },
      {
        id: "forgot-password",
        question: "Saya lupa kata sandi, bagaimana cara mengatasinya?",
        answer:
          "Jika Anda lupa kata sandi, klik 'Lupa kata sandi?' di halaman login. Masukkan alamat email yang terkait dengan akun Anda, dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda. Tautan ini berlaku selama 24 jam.",
      },
      {
        id: "delete-account",
        question: "Bagaimana cara menghapus akun saya?",
        answer:
          "Untuk menghapus akun, masuk ke pengaturan akun Anda, gulir ke bawah ke bagian 'Hapus Akun', dan klik tombol 'Hapus Akun Saya'. Anda akan diminta untuk mengonfirmasi tindakan ini. Perhatikan bahwa penghapusan akun bersifat permanen dan semua data Anda akan dihapus.",
      },
    ],
  },
  {
    id: "features",
    name: "Fitur & Penggunaan",
    icon: <FileText className="h-5 w-5" />,
    questions: [
      {
        id: "create-analysis",
        question: "Bagaimana cara membuat analisis pertandingan?",
        answer:
          "Untuk membuat analisis pertandingan, masuk ke dashboard Anda dan klik tombol 'Buat Analisis Baru'. Pilih tim yang bertanding, masukkan detail pertandingan seperti tanggal dan turnamen, lalu mulai mencatat kejadian penting dengan timestamp. Anda dapat menambahkan tag, komentar, dan gambar untuk memperkaya analisis Anda.",
      },
      {
        id: "share-analysis",
        question: "Bagaimana cara berbagi analisis dengan tim saya?",
        answer:
          "Untuk berbagi analisis, buka analisis yang ingin Anda bagikan dan klik tombol 'Bagikan'. Anda dapat mengundang anggota tim melalui email, membuat tautan yang dapat dibagikan, atau mengatur izin untuk menentukan siapa yang dapat melihat atau mengedit analisis tersebut.",
      },
      {
        id: "export-data",
        question: "Dapatkah saya mengekspor data analisis?",
        answer:
          "Ya, Anda dapat mengekspor data analisis dalam berbagai format termasuk PDF, CSV, dan Excel. Untuk mengekspor, buka analisis yang ingin Anda ekspor, klik menu 'Lainnya', dan pilih 'Ekspor'. Pilih format yang Anda inginkan dan data akan diunduh ke perangkat Anda.",
      },
    ],
  },
  {
    id: "technical",
    name: "Teknis & Dukungan",
    icon: <Smartphone className="h-5 w-5" />,
    questions: [
      {
        id: "supported-browsers",
        question: "Browser apa yang didukung oleh ML Analysis?",
        answer:
          "ML Analysis mendukung semua browser modern termasuk Google Chrome, Mozilla Firefox, Safari, dan Microsoft Edge. Untuk pengalaman terbaik, kami merekomendasikan menggunakan versi terbaru dari browser ini. Internet Explorer tidak didukung sepenuhnya.",
      },
      {
        id: "mobile-app",
        question: "Apakah ada aplikasi mobile untuk ML Analysis?",
        answer:
          "Saat ini, ML Analysis tersedia sebagai aplikasi web yang responsif dan dapat diakses melalui browser mobile. Aplikasi native untuk iOS dan Android sedang dalam pengembangan dan akan segera diluncurkan. Kami akan memberi tahu pengguna kami ketika aplikasi tersedia.",
      },
      {
        id: "report-bug",
        question: "Bagaimana cara melaporkan bug atau masalah?",
        answer:
          "Jika Anda menemukan bug atau masalah, silakan kunjungi halaman Dukungan kami dan klik 'Laporkan Masalah'. Berikan detail sebanyak mungkin termasuk langkah-langkah untuk mereproduksi bug, tangkapan layar, dan informasi browser Anda. Tim kami akan meninjau laporan dan menghubungi Anda jika diperlukan.",
      },
    ],
  },
  {
    id: "billing",
    name: "Pembayaran & Langganan",
    icon: <CreditCard className="h-5 w-5" />,
    questions: [
      {
        id: "payment-methods",
        question: "Metode pembayaran apa yang diterima?",
        answer:
          "Kami menerima berbagai metode pembayaran termasuk kartu kredit/debit (Visa, Mastercard, American Express), PayPal, dan transfer bank untuk beberapa negara. Untuk pengguna di Indonesia, kami juga mendukung pembayaran melalui GoPay, OVO, dan DANA.",
      },
      {
        id: "cancel-subscription",
        question: "Bagaimana cara membatalkan langganan?",
        answer:
          "Untuk membatalkan langganan, masuk ke pengaturan akun Anda, pilih 'Langganan & Pembayaran', dan klik 'Batalkan Langganan'. Anda akan tetap memiliki akses ke fitur premium hingga akhir periode penagihan saat ini. Anda dapat mengaktifkan kembali langganan kapan saja.",
      },
      {
        id: "refund-policy",
        question: "Apa kebijakan pengembalian dana?",
        answer:
          "Kami menawarkan pengembalian dana penuh dalam 14 hari pertama berlangganan jika Anda tidak puas dengan layanan kami. Setelah periode 14 hari, pengembalian dana akan dipertimbangkan berdasarkan kasus per kasus. Untuk meminta pengembalian dana, hubungi tim dukungan kami melalui halaman Dukungan.",
      },
    ],
  },
]

export default function FAQ(): ReactElement {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Bantuan
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Pertanyaan yang Sering Diajukan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang ML Analysis
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Cari pertanyaan..." className="pl-10 py-6 text-base" />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2">Cari</Button>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 my-8">
            {faqCategories.map((category) => (
              <Card key={category.id} className="hover:border-gray-500 transition-colors cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="bg-gray-100 h-12 w-12 rounded-full mx-auto flex items-center justify-center mt-5 mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{category.questions.length} pertanyaan</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-full">{category.icon}</div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>

                <Accordion type="single" collapsible className="border rounded-lg overflow-hidden">
                  {category.questions.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-b last:border-0">
                      <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-gray-50 text-left">
                        <span className="font-medium text-base">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 pt-2 text-gray-500">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="bg-gray-100 p-8 rounded-lg border mt-12 text-center">
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl font-bold">Masih punya pertanyaan?</h2>
              <p className="text-muted-foreground">
                Jika Anda tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi tim dukungan kami.
              </p>
              <div className="pt-4">
                <Button variant="outline" className="bg-gray-900 text-white">
                  <Link href="/support">Hubungi Dukungan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

