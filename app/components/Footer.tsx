"use client";
import Link from "next/link";
import Image from "next/image";
import laPetiteBaleine from "../../public/baleine.png";

export default function Footer() {
  return (
    <footer>
      <div className="bg-main_100 text-white h-100 mt-5 justify-center align-center">
        <div className="py-5 flex flex-col md:flex-row items-center md:items-start text-center md:text-start gap-6 md:gap-2 md:justify-around w-full">
          {/* LINKS */}
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold font-normal font-logo"
          >
            <div className="flex flex-col justify-center items-center gap-1 h-full">
              <Image
                src={laPetiteBaleine}
                width={60}
                height={60}
                alt="la petite baleine"
              />
              la petite baleine
            </div>
          </Link>

          <div>
            <div className="">
              <ul className="flex-row cursor-pointer">
                <Link href="/petite-baleine" onClick={() => { }}>
                  <li className="text-sm hover:text-main_70 py-1">
                    Petite Baleine
                  </li>
                </Link>
                <Link href="#bretagne" onClick={() => { }}>
                  <li className="text-sm hover:text-main_70 py-1">Bretagne</li>
                </Link>
                <Link href="/anfrage" onClick={() => { }}>
                  <li className="text-sm hover:text-main_70 py-1">Anfrage</li>
                </Link>
              </ul>
            </div>
            {/* KONTAKT */}
          </div>
          <div>
            <div>
              <ul className="flex-row">
                <li className="text-sm py-1">Judy & Matthias Brose</li>
                <li className="text-sm py-1">M: info@petite-baleine.de</li>
                <li className="text-sm py-1">T: 011111</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-main_100 h-100 flex flex-row flex-wrap justify-center align-center gap-5 border-t-[1px] border-white text-white py-2">
        <div className="text-sm hover:text-main_60 py-1">
          la petite baleine
        </div>
        <div className="text-sm hover:text-main_60 py-1">|</div>
        <Link href="/" onClick={() => { }}>
          <div className="text-sm hover:text-main_60 py-1">Impressum</div>
        </Link>
        <div className="text-sm hover:text-main_60 py-1">|</div>

        <Link href="/" onClick={() => { }}>
          <div className="text-sm hover:text-main_60 py-1">Datenschutz</div>
        </Link>
      </div>
    </footer>
  );
}
