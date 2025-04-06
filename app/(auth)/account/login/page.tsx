"use client";
import anime from "animejs";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState, useEffect, ReactElement } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, Facebook, AlertCircle } from "lucide-react";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Checkbox from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

export default function LoginPage(): ReactElement {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  useEffect((): void => {
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
    setFormData((prev) => ({ ...prev, rememberMe: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    anime({
      targets: ".submit-button",
      scale: [1, 0.95, 1],
      duration: 400,
      easing: "easeInOutQuad",
    });

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        setError("Login gagal. Periksa kembali email dan password Anda.");
      } else {
        router.push("/dashboard"); // Redirect ke dashboard setelah login sukses
      }
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });

      // console.log(`${res.status} ${res.statusText}`);

      // if (res.ok) {
      //   router.push("/dashboard");
      // } else {
      //   const data = await res.json();
      //   setError(data?.error || "Login gagal");
      // }
    } catch (err: any) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-6 ">
      <div className="text-center form-element">
        <h1 className="text-3xl font-bold tracking-tight">Masuk</h1>
        <p className="mt-2 text-muted-foreground">
          Masukkan kredensial Anda untuk mengakses akun
        </p>
      </div>

      {/* {error && (
        <AlertDialog>
          <AlertCircle className="h-4 w-4" />
          <AlertDialogDescription>{error}</AlertDialogDescription>
        </AlertDialog>
      )} */}

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
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="pl-10 py-6 bg-slate-50 focus:border-blue-500 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-2 form-element">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Link
              href="/account/recovery"
              className="text-sm text-blue-500 hover:underline"
            >
              Lupa password?
            </Link>
          </div>
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
        </div>

        <div className="flex items-center space-x-2 form-element">
          <Checkbox
            id="remember"
            checked={formData.rememberMe}
            onCheckedChange={handleCheckboxChange}
            disabled={loading}
            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          <Label
            htmlFor="remember"
            className="text-sm font-normal cursor-pointer"
          >
            Ingat saya selama 30 hari
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium submit-button form-element"
          disabled={loading}
        >
          {loading ? "Sedang Masuk..." : "Masuk"}
        </Button>

        {/* <div className="relative my-6 form-element">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white dark:bg-slate-900 px-2 text-muted-foreground">Atau lanjutkan dengan</span>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-2 gap-4 form-element">
          <Button 
            variant="outline" 
            className="w-full rounded-xl border-slate-200 dark:border-slate-700 py-6 hover:bg-slate-100 dark:hover:bg-slate-800"
            // disabled={loading}
          >
            <svg
              className="mr-2 h-5 w-5 text-red-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Google
          </Button>
          <Button 
            variant="outline" 
            className="w-full rounded-xl border-slate-200 dark:border-slate-700 py-6 hover:bg-slate-100 dark:hover:bg-slate-800"
            // disabled={loading}
          >
            <Facebook className="mr-2 h-5 w-5 text-blue-600" />
            Facebook
          </Button>
        </div> */}
      </form>

      <div className="text-center text-sm form-element">
        Belum punya akun?{" "}
        <Link
          href="/account/register"
          className="text-primary font-medium hover:underline"
        >
          Daftar
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
