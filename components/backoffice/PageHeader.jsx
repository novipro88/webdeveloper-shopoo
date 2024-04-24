import React from "react";
import Heading from "./Heading";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PageHeader({ heading, title, href }) {
  return (
    <div className="flex justify-between py-2 mb-4">
      <Heading title={heading} />
      <Link
        className="text-slate-50 bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg px-4 py-2 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2 space-x-2"
        href={href}
      >
        <Plus />
        <span>{title}</span>
      </Link>
    </div>
  );
}
