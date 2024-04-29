import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className="text-4xl">Welcome to Shopoo Ecommerce</h2>

      <Link className="my-4 underline" href="/register-farmer">
        Become a farmer/vendor/supplier
      </Link>
    </div>
  );
}
