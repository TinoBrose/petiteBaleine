"use client";
import Link from "next/link";
export default function LinkCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link href="/petite-baleine">
      <div>
        <img
          src={href}
          className="object-contain hover:opacity-30 w-full h-auto ease-in-out duration-300"
        />
        <div className="text-center">
          <h1 className="mt-2 text-xl font-bold m-auto align-middle">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}
