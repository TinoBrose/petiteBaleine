import React from "react";
import { HiOutlineWifi, HiOutlineArrowsExpand } from "react-icons/hi";
import { HiTv } from "react-icons/hi2";
import { MdSmokeFree, MdPets } from "react-icons/md";
import { BsFillTreeFill, BsFillCarFrontFill } from "react-icons/bs";

const ausstattung = [
  {
    key: "size",
    name: "40m2",
    icon: <HiOutlineArrowsExpand />,
    tag: ["general"],
  },
  {
    key: "garden",
    name: "Gemeinsamer Garten",
    icon: <BsFillTreeFill />,
    tag: ["general"],
  },
  {
    key: "internet",
    name: "Internet",
    icon: <HiOutlineWifi />,
    tag: ["general"],
  },
  {
    key: "tv",
    name: "TV",
    icon: <HiTv />,
    tag: ["general"],
  },
  {
    key: "nosmoking",
    name: "Nichtraucher",
    icon: <MdSmokeFree />,
    tag: ["general"],
  },
  {
    key: "pets",
    name: "Haustiere willkommen",
    icon: <MdPets />,
    tag: ["general"],
  },
  {
    key: "car",
    name: "Parkplatz",
    icon: <BsFillCarFrontFill />,
    tag: ["general"],
  },
  {
    key: "microwave",
    name: "Mikrowelle",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "fridge",
    name: "Kühlschrank",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "Kaffeemaschine",
    name: "Kaffeemaschine",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "Geschirrspüler",
    name: "Geschirrspüler",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "gasherd",
    name: "Gas-Herd",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "Toaster",
    name: "Toaster",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "Backofen",
    name: "Backofen",
    icon: undefined,
    tag: ["kitchen"],
  },
  {
    key: "Wasserkocher",
    name: "Wasserkocher",
    icon: undefined,
    tag: ["kitchen"],
  },
];

const Ausstattung = () => {
  return (
    <div>
      <div className="flex flex-col gap-[36px] px-2 md:px-0">
        <div>
          <h1 className="text-2xl mb-8 ">Ausstattung auf einen Blick</h1>
          <div className="flex flex-wrap gap-4 ">
            {ausstattung
              .filter((item) => item.tag.includes("general"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="border-t-[1px] border-accent"></div>

        <div>
          <h1 className="text-xl mb-4">Küche</h1>
          <div className="flex flex-wrap gap-4">
            {ausstattung
              .filter((item) => item.tag.includes("kitchen"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ausstattung;
