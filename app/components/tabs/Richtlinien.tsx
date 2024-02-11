import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { houserules } from "../../utils/houserules"


const Richtlinien = () => {
  return (
    <div>
      <div className="flex flex-col gap-[36px] px-2 md:px-0">
        <div>
          <h1 className="text-xl mb-4 ">Hausregeln</h1>
          <div className="flex flex-wrap gap-4 ">
            {houserules
              .filter((item) => item.tag.includes("houserules"))
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
          <h1 className="text-xl mb-4">Zeiten für den Check-in und Check-out</h1>
          <div className="flex flex-wrap gap-4 ">
            {houserules
              .filter((item) => item.tag.includes("check"))
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
          <h1 className="text-xl mb-4">Stornierungsbedingungen</h1>
          <p>Vollständige Rückerstattung für Stornierungen innerhalb 48 Stunden nach Buchung oder bis 30 Tage vor dem Check-in. Danach wird bis 7 Tage vor dem Check-in eine Rückerstattung in
            Höhe von 50 % ausgegeben. Anschließend wird keine Rückerstattung mehr ausgegeben.</p>
        </div>




      </div>
    </div>
  );
};

export default Richtlinien;
