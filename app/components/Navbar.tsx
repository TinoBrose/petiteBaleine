'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import laPetiteBaleine from '../../public/baleine.png';
import Image from 'next/image';

const styles = {
  navlink:
    'text-l text-center hover:bg-white md:hover:bg-transparent md:hover:text-accent ',
  active: 'text-accent',
  navLinkSpecial: 'text-l text-center hover:opacity-80  ',
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 z-10 z-30 w-full bg-white px-2 drop-shadow-md transition duration-500 md:px-5 ${
        navbarVisible ? 'translate-y-0' : 'md:-translate-y-full'
      }`}
    >
      <div className='p-5'>
        {/* LOGOTYPE */}
        <div className='inline w-full justify-between md:flex md:flex md:justify-around'>
          <div className='flex w-full items-center justify-between md:flex-1'>
            <Link
              href='/'
              onClick={() => setMobileMenuOpen(false)}
              className='font-logo text-2xl font-bold font-normal md:text-3xl'
            >
              <div className='flex items-center justify-center gap-1'>
                <Image
                  src={laPetiteBaleine}
                  width={40}
                  height={40}
                  alt='petite baleine'
                />
                | petite baleine
              </div>
            </Link>

            {/* MOBILE */}
            <div className='flex items-center justify-center md:hidden'>
              <button
                className=' rounded-md'
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
              mobileMenuOpen ? 'block' : 'hidden'
            }   items-center justify-between`}
          >
            <ul
              className={`my-10 flex h-[350px] cursor-pointer flex-col items-center justify-between uppercase md:my-0 md:h-[80px] md:flex-row md:justify-center md:gap-6 `}
            >
              <Link href='/' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <li
                  className={`${styles.navlink} ${
                    pathname === '/' ? styles.active : ''
                  } ${mobileMenuOpen ? 'py-4' : ''}`}
                >
                  Apartment
                </li>
              </Link>
              <Link
                href='/gallery'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === '/gallery' ? styles.active : ''
                  } ${mobileMenuOpen ? 'py-4' : ''}`}
                >
                  Galerie
                </li>
              </Link>
              <Link
                href='/bretagne'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navlink} ${
                    pathname === '/bretagne' ? styles.active : ''
                  } ${mobileMenuOpen ? 'py-4' : ''}`}
                >
                  La Bretagne
                </li>
              </Link>
              <Link
                href='/anfrage'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <li
                  className={`${styles.navLinkSpecial} ${
                    pathname === '/anfrage' ? styles.active : ''
                  } ${
                    mobileMenuOpen ? 'py-4' : ''
                  } flex items-center justify-center rounded-lg bg-main_80 px-4 py-4 text-white`}
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
