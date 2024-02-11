"use client";
import Carousel from "./components/Carousel";
import { TbGridDots } from "react-icons/tb";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Uberblick from "./components/tabs/Uberblick";
import Ausstattung from "./components/tabs/Ausstattung";
import Lage from "./components/tabs/Lage";
import Kosten from "./components/tabs/Kosten";
import Richtlinien from "./components/tabs/Richtlinien";

const tabs = [
  {
    key: "uberblick",
    display: "Überblick",
    component: <Uberblick />,
  },
  {
    key: "ausstattung",
    display: "Ausstattung",
    component: <Ausstattung />,
  },
  {
    key: "lage",
    display: "Lage",
    component: <Lage />,
  },
  {
    key: "Kosten",
    display: "Kosten",
    component: <Kosten />,
  },
  {
    key: "richtlinien",
    display: "Richtlinien",
    component: <Richtlinien />,
  },
];

export default function Home() {
  return (
    <>
      <main className="container mx-auto -1">
        <div className="relative">
          <Carousel />
          <Link href="/gallery">
            <div className="absolute w-[200px] h-[50px] bg-main_80 hover:opacity-90 text-white rounded-xl right-0 md:right-10 left-0 md:left-auto bottom-10 mx-auto md:mx-0 flex justify-center items-center gap-2">
              {/* <div className="absolute w-[200px] h-[50px] bg-main_100 right-0 bottom-0 mb-[60px] mr-[80px] flex"> */}
              <div>Alle Fotos ansehen</div>
              <TbGridDots />
            </div>
          </Link>
        </div>
        <div className="mt-4">
          <Tab.Group>
            <Tab.List className="flex flex-wrap items-center gap-3 mx-2 justify-center">
              {tabs.map(({ key, display }) => (
                <Tab key={key} className="p-1 sm:p-2 ">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-sm sm:text-md tracking-wider hover:text-accent pb-1 md:pb-2 ",
                        selected
                          ? "text-accent border-b-[1px] border-accent"
                          : "text-main_100"
                      )}
                    >
                      {display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full max-w-[900px] w-full p-2 sm:p-4 mb-2 mx-auto">
              {tabs.map(({ key, component }) => (
                <Tab.Panel key={key} className="p-2">
                  {component}
                </Tab.Panel>
              ))}
              <Tab.Panel>
                <div>test</div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </>
  );
}
