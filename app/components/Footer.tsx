"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Footer() {
  return (
    <footer>
      <div className="bg-gray-300 h-100 mt-5 justify-center align-center">
        <div className="py-5 flex flex-col md:flex-row md:justify-around w-full">
          {/* LINKS */}

          <div>
            <h2 className="text-xl mb-4">Rue de Brenilour</h2>
            <div className="">
              <ul className="flex-row cursor-pointer">
                <Link href="/petite-baleine" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">
                    Petite Baleine
                  </li>
                </Link>
                <Link href="/grande-baleine" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">
                    Grande Baleine
                  </li>
                </Link>
                <Link href="#bretagne" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">Bretagne</li>
                </Link>
                <Link href="/anfrage" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">Anfrage</li>
                </Link>
              </ul>
            </div>
            {/* KONTAKT */}
          </div>
          <div>
            <h2 className="text-xl mb-4">Kontakt</h2>
            <div className="">
              <ul className="flex-row cursor-pointer">
                <Link href="/petite-baleine" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">
                    Petite Baleine
                  </li>
                </Link>
                <Link href="/grande-baleine" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">
                    Grande Baleine
                  </li>
                </Link>
                <Link href="#bretagne" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">Bretagne</li>
                </Link>
                <Link href="/anfrage" onClick={() => {}}>
                  <li className="text-l hover:text-white py-1">Anfrage</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-100 flex flex-row justify-center align-center gap-5 border-t-[1px] border-white">
        <Link href="/" onClick={() => {}}>
          <div className="text-l hover:text-white py-1">Impressum</div>
        </Link>
        <div className="text-l hover:text-white py-1">|</div>

        <Link href="/" onClick={() => {}}>
          <div className="text-l hover:text-white py-1">Datenschutz</div>
        </Link>
      </div>
    </footer>
  );
}
