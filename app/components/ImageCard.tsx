"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function ImageCard({ href }: { href: string }) {
  return (
    <div>
      <img src={href} className="object-contain" />
    </div>
  );
}
