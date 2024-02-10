import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { ausstattung } from "../../utils/ausstattung"

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
                  <div>{item.icon ?? <HiOutlineChevronRight />}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="border-t-[1px] border-accent"></div>

        <div>
          <h1 className="text-xl mb-4">Wohnzimmerbereich</h1>
          <div className="flex flex-wrap gap-4">
            {ausstattung
              .filter((item) => item.tag.includes("living"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon ?? <HiOutlineChevronRight />}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="border-t-[1px] border-accent"></div>

        <div>
          <h1 className="text-xl mb-4">Schlafzimmer</h1>
          <div className="flex flex-wrap gap-4">
            {ausstattung
              .filter((item) => item.tag.includes("sleeping"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon ?? <HiOutlineChevronRight />}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="border-t-[1px] border-accent"></div>

        <div>
          <h1 className="text-xl mb-4">Badezimmer</h1>
          <div className="flex flex-wrap gap-4">
            {ausstattung
              .filter((item) => item.tag.includes("bathroom"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon ?? <HiOutlineChevronRight />}</div>
                  <div className="min-w-[200px]">{item.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="border-t-[1px] border-accent"></div>

        <div>
          <h1 className="text-xl mb-4">Garten</h1>
          <div className="flex flex-wrap gap-4">
            {ausstattung
              .filter((item) => item.tag.includes("garden"))
              .map((item) => (
                <div key={item.key} className="flex flex-1 gap-4 items-center">
                  <div>{item.icon ?? <HiOutlineChevronRight />}</div>
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
