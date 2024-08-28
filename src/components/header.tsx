
import React from 'react';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Link from "next/link";
import { Suspense } from "react";
import SearchInput from "./search-input";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <header className="w-full sticky  bg-red-500 sm:bg-white">
      <nav className="flex fixed relative items-center justify-between w-full p-4 bg-white shadow">
        <div className="flex items-center w-full">
          <Link href="/" className="font-bold text-xl">
              BLOGSPOT
          </Link>
          <div className="flex  pl-16">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput />
            </Suspense>
          </div>
          <div className="flex items-center ml-[30%] gap-16">
            <div className='flex gap-8'>
            <Link href="/">Home</Link>
           <Link href="">Contact</Link>
           <Link href="">About</Link>
            </div>
            <HeaderAuth/>
          </div>
        </div>
      </nav>
    </header>
  );
}
