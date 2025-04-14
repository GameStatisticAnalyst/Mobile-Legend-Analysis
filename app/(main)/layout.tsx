"use client";

import React, { ReactElement, ReactNode, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import anime from "animejs";

import Notifications from "@/components/notifications/notifications";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface MainLayoutProps {
  children: ReactNode;
  withGradient?: boolean;
  withAnimation?: boolean;
}

const inter = Inter({
  subsets: ["cyrillic-ext", "greek", "latin", "vietnamese"],
  display: "swap",
});

export default function RootLayout({
  children,
  withGradient = true,
  withAnimation = true,
}: MainLayoutProps): ReactElement {
  // useEffect(() => {
  //   if (typeof window !== "undefined" && withAnimation) {
  //     anime({
  //       targets: ".animate-fade-in",
  //       opacity: [0, 1],
  //       translateY: [20, 0],
  //       delay: anime.stagger(100, { start: 300 }),
  //       easing: "easeOutExpo",
  //       duration: 800,
  //     });

  //     if (withGradient) {
  //       anime({
  //         targets: ".gradient-bg",
  //         backgroundPosition: ["0% 0%", "100% 100%"],
  //         easing: "easeInOutQuad",
  //         duration: 10000,
  //         loop: true,
  //         direction: "alternate",
  //       });
  //     }
  //   }
  // }, [withAnimation, withGradient]);

  useEffect(() => {
    document.documentElement.className = inter.className;
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} relative scroll-smooth`}>
        <ThemeProvider attribute={"class"} defaultTheme="system">
          {/* {withGradient && (
            <>
              <div
                className="gradient-bg fixed inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 bg-[length:200%_200%] -z-10"
                style={{ backgroundSize: "200% 200%" }}
              />

              <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-blue-500/5 animate-blob" />
                <div className="absolute top-[40%] right-[15%] w-72 h-72 rounded-full bg-purple-500/5 animate-blob animation-delay-2000" />
                <div className="absolute bottom-[10%] left-[35%] w-80 h-80 rounded-full bg-pink-500/5 animate-blob animation-delay-4000" />
              </div>
            </>
          )} */}
          <Navbar />
          <main className="container mx-auto py-12 max-w-9xl px-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
