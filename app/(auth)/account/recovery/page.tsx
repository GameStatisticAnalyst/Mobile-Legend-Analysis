"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Label from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"
import { AlertDialog, AlertDialogDescription } from "@/components/ui/alert-dialog"
import anime from "animejs"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    // Animate form elements
    anime({
      targets: ".form-element",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, { start: 300 }),
      easing: "easeOutExpo",
      duration: 800,
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Button press animation
    anime({
      targets: ".submit-button",
      scale: [1, 0.95, 1],
      duration: 400,
      easing: "easeInOutQuad",
    })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success animation
      anime({
        targets: ".success-container",
        opacity: [0, 1],
        translateY: [20, 0],
        easing: "easeOutExpo",
        duration: 800,
      })

      setSuccess(true)
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center form-element">
        <h1 className="text-3xl font-bold tracking-tight">Lupa Password</h1>
        <p className="mt-2 text-muted-foreground">Masukkan email Anda untuk menerima tautan reset password</p>
      </div>

      {error && (
        <AlertDialog variant="destructive" className="form-element">
          <AlertCircle className="h-4 w-4" />
          <AlertDialogDescription>{error}</AlertDialogDescription>
        </AlertDialog>
      )}

      {success ? (
        <div className="success-container space-y-6 bg-green-50 dark:bg-green-950/30 p-6 rounded-xl border border-green-100 dark:border-green-900">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-400">Email Terkirim</h3>
              <p className="text-sm text-green-700 dark:text-green-500">
                Tautan reset password telah dikirim ke {email}
              </p>
            </div>
          </div>

          <p className="text-sm text-green-700 dark:text-green-500">
            Periksa kotak masuk email Anda dan ikuti petunjuk untuk mereset password Anda. Tautan akan kedaluwarsa dalam
            30 menit.
          </p>

          <div className="pt-2">
            <Button
              asChild
              className="w-full py-6 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium"
            >
              <Link href="/account/login">Kembali ke Halaman Login</Link>
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2 form-element">
            <Label htmlFor="email" className="text-sm font-medium">
              Email
            </Label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2" />
                  <path d="M22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6" />
                  <path d="m2 6 10 6 10-6" />
                </svg>
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="nama@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
               className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium submit-button form-element"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Mengirim...
              </div>
            ) : (
              "Kirim Tautan Reset"
            )}
          </Button>
        </form>
      )}

      <div className="text-center mt-6 form-element">
        <Link
          href="/account/login"
          className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Kembali ke Login
        </Link>
      </div>
    </div>
  )
}

