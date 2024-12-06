import React from 'react';
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg">Game Statistic Analysis</h1>
      {/* <div className='flex gap-2'>
        <Link href="/register" className='py-1 px-2 rounded hover:shadow-md hover:scale-105'>Register</Link>
        <Link href="/login" className='py-1 px-2 bg-gray-50/50 backdrop-blur-md shadow-md rounded hover:scale-105'>Login</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;