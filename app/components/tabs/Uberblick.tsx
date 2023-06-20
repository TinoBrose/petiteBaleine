import React from "react";

const Uberblick = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl ">La petite baleine</h1>
        <div className="flex flex-col md:flex-row gap-1 md:gap-4  text-main_80 mb-4">
          <h3>2. Stöckige Ferienwohnung |</h3>
          <div>
            <h3>1 Schlafzimmer |</h3>
          </div>
          <div>
            <h3>1 Badezimmer</h3>
          </div>
        </div>
        <div className="border-t-[1px] border-accent"></div>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
};

export default Uberblick;
