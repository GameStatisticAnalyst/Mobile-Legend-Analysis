import type { ReactElement } from "react"
import Link from 'next/link'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MessageSquare, Mail, Phone, FileQuestion, BookOpen, Clock, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Button from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import Textarea from "@/components/ui/text-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Support(): ReactElement {
  return (
    <>
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="px-3 py-1 text-sm">
              Dukungan
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Pusat Bantuan</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami siap membantu Anda dengan pertanyaan dan masalah apa pun
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:border-gray-200 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <FileQuestion className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>FAQ</CardTitle>
                <CardDescription>Jawaban untuk pertanyaan umum</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Temukan jawaban cepat untuk pertanyaan yang sering diajukan tentang fitur, akun, dan langganan.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/faq">Lihat FAQ</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:border-gray-200 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Panduan</CardTitle>
                <CardDescription>Tutorial dan panduan penggunaan</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>Pelajari cara menggunakan ML Analysis dengan panduan langkah demi langkah dan tutorial video.</p>
              </CardContent>
              <CardFooter>
                {/* <Button variant="outline" asChild className="w-full">
                  <a href="/guides">Lihat Panduan</a>
                </Button> */}
                <Button variant="outline" className="w-full">
                  <Link href="/guides">Lihat Panduan</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:border-gray-200 transition-colors">
              <CardHeader className="pb-3">
                <div className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Komunitas</CardTitle>
                <CardDescription>Forum diskusi pengguna</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Bergabunglah dengan komunitas pengguna ML Analysis untuk berbagi tips, trik, dan mendapatkan bantuan.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                 <Link href="/">Kunjungi Forum</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Contact Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="contact-form" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="contact-form" className="py-3">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Formulir Kontak
                </TabsTrigger>
                <TabsTrigger value="email-support" className="py-3">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone-support" className="py-3">
                  <Phone className="h-4 w-4 mr-2" />
                  Telepon
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contact-form" className="border rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Kirim Pesan</h2>
                    <p className="text-muted-foreground">
                      Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subjek</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih subjek" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account">Masalah Akun</SelectItem>
                          <SelectItem value="billing">Pembayaran & Langganan</SelectItem>
                          <SelectItem value="technical">Masalah Teknis</SelectItem>
                          <SelectItem value="feature">Permintaan Fitur</SelectItem>
                          <SelectItem value="other">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea
                        id="message"
                        placeholder="Jelaskan masalah atau pertanyaan Anda secara detail..."
                        rows={6}
                      />
                      {/* <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary focus:border-primary/50"
                        id="message"
                        placeholder="Jelaskan masalah atau pertanyaan Anda secara detail..."
                        rows={6}
                      /> */}
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="terms" className="rounded" />
                      <Label htmlFor="terms" className="text-sm font-normal">
                        Saya menyetujui bahwa informasi saya akan diproses sesuai dengan{" "}
                        <a href="/privacy-policy" className="text-primary hover:underline">
                          Kebijakan Privasi
                        </a>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full md:w-auto bg-gray-800">
                      Kirim Pesan
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="email-support" className="border rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Email Dukungan</h2>
                    <p className="text-muted-foreground">Kirim email ke tim dukungan kami untuk mendapatkan bantuan.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dukungan Umum</h3>
                        <p className="text-sm text-muted-foreground mb-1">Untuk pertanyaan umum dan bantuan</p>
                        <a href="mailto:support@mlanalysis.com" className="text-primary hover:underline">
                          support@mlanalysis.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dukungan Teknis</h3>
                        <p className="text-sm text-muted-foreground mb-1">Untuk masalah teknis dan bug</p>
                        <a href="mailto:tech@mlanalysis.com" className="text-primary hover:underline">
                          tech@mlanalysis.com
                        </a>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Pembayaran & Langganan</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          Untuk pertanyaan tentang pembayaran dan langganan
                        </p>
                        <a href="mailto:billing@mlanalysis.com" className="text-primary hover:underline">
                          billing@mlanalysis.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Waktu Respons</h3>
                        <p className="text-sm text-muted-foreground">
                          Kami berusaha untuk merespons semua email dalam waktu 24 jam pada hari kerja.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="phone-support" className="border rounded-lg p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Dukungan Telepon</h2>
                    <p className="text-muted-foreground">
                      Hubungi tim dukungan kami melalui telepon untuk bantuan langsung.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Hotline Dukungan</h3>
                        <p className="text-sm text-muted-foreground mb-1">Senin - Jumat, 09:00 - 17:00 WIB</p>
                        <a href="tel:+6281234567890" className="text-primary hover:underline">
                          +62 812-3456-7890
                        </a>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg flex items-start gap-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dukungan Premium</h3>
                        <p className="text-sm text-muted-foreground mb-1">24/7 untuk pelanggan premium</p>
                        <a href="tel:+6281234567891" className="text-primary hover:underline">
                          +62 812-3456-7891
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Tips Panggilan</h3>
                        <p className="text-sm text-muted-foreground">
                          Siapkan ID akun dan detail masalah Anda sebelum menelepon untuk layanan yang lebih cepat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Office Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Jam Operasional</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Senin - Jumat</span>
                  <span>09:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Sabtu</span>
                  <span>10:00 - 14:00 WIB</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Minggu & Hari Libur</span>
                  <span>Tutup</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Dukungan email tersedia 24/7, tetapi respons mungkin tertunda di luar jam operasional.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Lokasi Kantor</h2>
              <div className="bg-muted p-4 rounded-lg">
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
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    Lihat di Peta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

