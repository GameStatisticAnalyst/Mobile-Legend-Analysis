import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 grid place-items-center justify-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex text-slate-500 dark:text-white text-center">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold  tracking-tight sm:text-5xl">
                  Halaman Tidak DI Temukan
                </h1>
                <p className="mt-1 text-base">
                  Tolong Cek URL atau <Link to="/" className="text-indigo-500">kembali</Link> dan coba lagi lain waktu.
                </p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}
