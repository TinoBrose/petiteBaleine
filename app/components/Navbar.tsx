"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const styles = {
  navlink:
    "text-l text-center pt-1 hover:bg-white md:hover:bg-transparent md:hover:border-gray-700 border-transparent border-b-2",
  active: "md:border-gray-700",
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <nav className="w-full px-5 z-10 ">
      <div className="p-5">
        {/* LOGOTYPE */}
        <div className="inline md:flex w-full md:flex md:justify-around  justify-between">
          <div className="flex md:flex-1 items-center justify-between w-full">
            <Link href="/" onClick={() => setNavbarOpen(false)}>
              <h1 className="text-2xl font-bold ">Rue de Brenilour</h1>
            </Link>

            {/* MOBILE */}
            <div className="md:hidden ">
              <button
                className=" rounded-md"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? (
                  <HiOutlineX size={30} />
                ) : (
                  <HiOutlineMenu size={30} />
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:block ${
              navbarOpen ? "block" : "hidden"
            }   items-center justify-between`}
          >
            <ul className="md:h-auto md:flex md:gap-4 cursor-pointer h-screen">
              <Link
                href="/petite-baleine"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === "/petite-baleine" ? styles.active : ""
                  }`}
                >
                  Petite Baleine
                </li>
              </Link>
              <Link
                href="/grande-baleine"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === "/grande-baleine" ? styles.active : ""
                  }`}
                >
                  Grande Baleine
                </li>
                {/* <li className={styles.navlink}>Grande Baleine</li> */}
              </Link>
              <Link href="/bretagne" onClick={() => setNavbarOpen(!navbarOpen)}>
                <li
                  className={`${styles.navlink} ${
                    pathname === "/bretagne" ? styles.active : ""
                  }`}
                >
                  Bretagne
                </li>
              </Link>
              <Link href="/anfrage" onClick={() => setNavbarOpen(!navbarOpen)}>
                <li
                  className={`${styles.navlink} ${
                    pathname === "/anfrage" ? styles.active : ""
                  }`}
                >
                  Anfrage
                </li>
              </Link>
            </ul>
          </div>

          {/* LINKS */}
        </div>
      </div>
    </nav>
  );
}
