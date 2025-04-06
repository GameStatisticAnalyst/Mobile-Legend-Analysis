"use client";
import { ReactElement } from "react";

import Link from "next/link";
import Button from "./ui/button";
import Input from "./ui/input";

import {
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer(): ReactElement {
  return (
    <footer className="relative bg-white dark:bg-gray-900 pt-12 pb-12 overflow-hidden px-10">
      {/* Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300/20 dark:bg-blue-600/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute top-40 left-20 w-60 h-60 bg-purple-300/20 dark:bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="mb-16 relative">
          <div className="absolute -top-10 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="mx-auto max-w-3xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl transform -translate-y-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">
                  Berlangganan Newsletter
                </h3>
                <p className="text-blue-100">
                  Dapatkan analisis dan berita terbaru secara langsung ke inbox
                  Anda
                </p>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="flex gap-2">
                  <Input
                    placeholder="Alamat email Anda"
                    className="rounded-lg border-transparent bg-white/20 text-white placeholder:text-blue-100 focus:border-white"
                  />
                  <Button className="rounded-lg bg-white text-blue-600 hover:bg-blue-50">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">ML</span>
              </div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                MLAnalysis
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              MLAnalysis adalah platform analisis pertandingan Mobile Legends
              profesional dengan data komprehensif dan wawasan strategi
              terdepan.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/analysis"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/tournaments"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Tournaments
                </Link>
              </li>
              <li>
                <Link
                  href="/contributors"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Contributors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="privacy-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="terms-of-service"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                >
                  <ArrowRight className="h-3 w-3 mr-2 text-blue-500" /> Terms of
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} MLAnalysis. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Mobile Legends is a trademark of Moonton. This site is not
            affiliated with Moonton.
          </p>
        </div>
      </div>
    </footer>
  );
}
