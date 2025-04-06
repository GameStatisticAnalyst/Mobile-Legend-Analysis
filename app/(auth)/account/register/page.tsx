"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Checkbox from "@/components/ui/checkbox";
import { AlertCircle, EyeIcon, EyeOffIcon, Facebook } from "lucide-react";
import {
  AlertDialog,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import anime from "animejs";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    agreeTerms: false,
  });

  useEffect(() => {
    anime({
      targets: ".form-element",
      opacity: [0, 1],
      translateY: [20, 0],
      delay: anime.stagger(100, { start: 300 }),
      easing: "easeOutExpo",
      duration: 800,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    // if (formData.password !== formData.confirmPassword) {
    //   alert("Password dan konfirmasi tidak cocok");
    //   return;
    // }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

       console.log(`${res.status} ${res.statusText}`);

      if (!res.ok) {
        setError(data.message);
        throw new Error(data.message || "Registrasi gagal");
      }

      router.push("/account/login");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center form-element">
        <h1 className="text-3xl font-bold tracking-tight">Buat Akun</h1>
        <p className="mt-2 text-muted-foreground">
          Masukkan informasi Anda untuk membuat akun baru
        </p>
      </div>

      {/* {error && (
        <AlertDialog>
          <AlertCircle className="h-4 w-4" />
          <AlertDialogDescription>{error}</AlertDialogDescription>
        </AlertDialog>
      )} */}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* <div className="space-y-2 form-element">
          <Label htmlFor="name" className="text-sm font-medium">
            Nama Lengkap
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              // disabled={loading}
              className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
            />
          </div>
        </div> */}

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
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2 form-element">
          <Label htmlFor="password" className="text-sm font-medium">
            Password
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
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
              disabled={loading}
            >
              {showPassword ? (
                <EyeOffIcon className="h-4 w-4" />
              ) : (
                <EyeIcon className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Password harus minimal 8 karakter dengan huruf besar, huruf kecil,
            dan angka
          </p>
        </div>

        {/* <div className="space-y-2 form-element">
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            Konfirmasi Password
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
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              // disabled={loading}
              className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              // disabled={loading}
            >
              {showConfirmPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
              <span className="sr-only">{showConfirmPassword ? "Hide password" : "Show password"}</span>
            </Button>
          </div>
        </div> */}

        <div className="flex items-center justify-start space-x-2 form-element">
          <Checkbox
            id="terms"
            checked={formData.agreeTerms}
            onCheckedChange={handleCheckboxChange}
            className="mt-1 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
            disabled={loading}
          />
          <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
            Saya setuju dengan{" "}
            <Link
              href="/terms-of-service"
              className="text-blue-500 hover:underline"
            >
              Ketentuan Layanan
            </Link>{" "}
            dan{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-500 hover:underline"
            >
              Kebijakan Privasi
            </Link>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full py-6 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium submit-button form-element"
          disabled={loading}
        >
          {loading ? "Membuat Akun..." : "Buat Akun"}
        </Button>
      </form>

      <div className="text-center text-sm form-element">
        Sudah punya akun?{" "}
        <Link
          href="/account/login"
          className="text-primary font-medium hover:underline"
        >
          Masuk
        </Link>
      </div>

      <div className="text-center mt-6 form-element">
        <Link
          href="/account"
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
          Kembali
        </Link>
      </div>
    </div>
  );
}
