'use client';
import Carousel from './components/Carousel';
import { TbGridDots } from 'react-icons/tb';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import Uberblick from './components/tabs/Uberblick';
import Ausstattung from './components/tabs/Ausstattung';
import Lage from './components/tabs/Lage';
import Kosten from './components/tabs/Kosten';
import Richtlinien from './components/tabs/Richtlinien';

const tabs = [
  {
    key: 'uberblick',
    display: 'Überblick',
    component: <Uberblick />,
  },
  {
    key: 'ausstattung',
    display: 'Ausstattung',
    component: <Ausstattung />,
  },
  {
    key: 'lage',
    display: 'Lage',
    component: <Lage />,
  },
  {
    key: 'Kosten',
    display: 'Kosten',
    component: <Kosten />,
  },
  {
    key: 'richtlinien',
    display: 'Richtlinien',
    component: <Richtlinien />,
  },
];

export default function Home() {
  return (
    <>
      <main className='container mx-auto'>
        <div className='relative'>
          <Carousel />
          <Link href='/gallery'>
            <div className='absolute bottom-10 left-0 right-0 mx-auto flex h-[50px] w-[200px] items-center justify-center gap-2 rounded-xl bg-main_80 text-white hover:opacity-90 md:left-auto md:right-10 md:mx-0'>
              {/* <div className="absolute w-[200px] h-[50px] bg-main_100 right-0 bottom-0 mb-[60px] mr-[80px] flex"> */}
              <div>Alle Fotos ansehen</div>
              <TbGridDots />
            </div>
          </Link>
        </div>
        <div className='mt-4'>
          <Tab.Group>
            <Tab.List className='mx-2 flex flex-wrap items-center justify-center gap-3'>
              {tabs.map(({ key, display }) => (
                <Tab key={key} className='p-1 sm:p-2 '>
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'sm:text-md pb-1 text-sm uppercase tracking-wider hover:text-accent md:pb-2 ',
                        selected
                          ? 'border-b-[1px] border-accent text-accent'
                          : 'text-main_100'
                      )}
                    >
                      {display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mx-auto mb-2 h-full w-full max-w-[900px] p-2 sm:p-4'>
              {tabs.map(({ key, component }) => (
                <Tab.Panel key={key} className='p-2'>
                  {component}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </>
  );
}
