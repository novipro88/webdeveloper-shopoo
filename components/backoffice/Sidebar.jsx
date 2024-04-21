import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-slate-50 space-y-6 w-60 h-screen text-slate-800 dark:text-slate-50 p-4 fixed left-0 top-0 shadow-md">
      <Link className="mb-6" href="#">
        <Image src="/logo.png" alt="Profile" width={100} height={100} />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
}
