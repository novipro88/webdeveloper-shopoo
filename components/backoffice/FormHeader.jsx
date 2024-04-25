import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FormHeader({ title }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between py-6 px-12 bg-slate-50 dark:bg-slate-800 rounded-lg shadow mb-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <button onClick={() => router.back()}>
        <X />
      </button>
    </div>
  );
}
