"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import laPetiteBaleine from "../../public/baleine.png";
import Image from "next/image";

const styles = {
  navlink:
    "text-l text-center hover:bg-white md:hover:bg-transparent md:hover:text-accent ",
  active: "text-accent",
  navLinkSpecial: "text-l text-center hover:opacity-80  ",
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`z-30 fixed top-0 bg-white w-full px-2 md:px-5 z-10 transition duration-500 drop-shadow-md ${
        navbarVisible ? "translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <div className="p-5">
        {/* LOGOTYPE */}
        <div className="inline md:flex w-full md:flex md:justify-around justify-between">
          <div className="flex md:flex-1 items-center justify-between w-full">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl md:text-3xl font-bold font-normal font-logo"
            >
              <div className="flex justify-center items-center gap-1">
                <Image
                  src={laPetiteBaleine}
                  width={40}
                  height={40}
                  alt="la petite baleine"
                />
                | la petite baleine
              </div>
            </Link>

            {/* MOBILE */}
            <div className="md:hidden flex justify-center items-center">
              <button
                className=" rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <HiOutlineX size={30} />
                ) : (
                  <HiOutlineMenu size={30} />
                )}
              </button>
            </div>
          </div>

          <div
            className={`md:block ${
              mobileMenuOpen ? "block" : "hidden"
            }   items-center justify-between`}
          >
            <ul
              className={`md:h-[80px] flex flex-col md:flex-row md:gap-6 cursor-pointer h-[350px] my-10 md:my-0 justify-between md:justify-center items-center uppercase `}
            >
              <Link href="/" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <li
                  className={`${styles.navlink} ${
                    pathname === "/" ? styles.active : ""
                  } ${mobileMenuOpen ? "py-4" : ""}`}
                >
                  Apartment
                </li>
              </Link>
              <Link
                href="/gallery"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === "/gallery" ? styles.active : ""
                  } ${mobileMenuOpen ? "py-4" : ""}`}
                >
                  Galerie
                </li>
              </Link>
              <Link
                href="/bretagne"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === "/bretagne" ? styles.active : ""
                  } ${mobileMenuOpen ? "py-4" : ""}`}
                >
                  La Bretagne
                </li>
              </Link>
              <Link
                href="/anfrage"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navLinkSpecial} ${
                    pathname === "/anfrage" ? styles.active : ""
                  } ${
                    mobileMenuOpen ? "py-4" : ""
                  } bg-main_80 text-white px-4 py-4 rounded-lg flex justify-center items-center`}
                >
                  Anfrage
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
