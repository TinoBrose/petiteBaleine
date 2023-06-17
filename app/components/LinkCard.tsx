"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

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
        {/* <div className="absolute max-w-[100%] max-h-[100%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] my-auto overflow-auto text-center  ">
          <h1 className="py-2 px-4 text-xl font-bold m-auto align-middle bg-white rounded-xl">
            {title}
          </h1>
        </div> */}
      </div>
    </Link>
  );
}
