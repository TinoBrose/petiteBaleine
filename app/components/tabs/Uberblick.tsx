import React from "react";

const Uberblick = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 px-2 md:px-0">
        <h1 className="text-2xl ">La petite baleine</h1>
        <div className="flex flex-col md:flex-row gap-1 md:gap-2  text-main_80 mb-4">
          <h3>Ferienwohnung |</h3>
          <h3>|</h3>
          <h3>1 Schlafzimmer |</h3>
          <h3>|</h3>
          <h3>1 Badezimmer |</h3>
          <h3>|</h3>
          <h3>Küche – Salon</h3>
        </div>
        <div className="border-t-[1px] border-accent"></div>
        <div className="flex flex-col gap-4 pt-4">

          <p>
            Versteckt in den kleinen Nebenstraßen von Plouhinec liegt unser bretonisches
            Traumhaus aus alten Steinen und mit blauen Fensterläden, einem großzügigen Garten
            und mehreren Blick-Ausschnitten auf den Atlantik und die Hafeneinfahrt vom
            Nachbarstädtchen Audierne. Wir genießen hier jedes Wetter – 37 mögliche Grade in der
            Sonne im Sommer, über starken Wind oder pfeifende Stürme rund ums Haus mit
            Regenschauern zu Frühjahrs- und Herbstzeiten bis zu seltenen Frösten im Winter. Dank
            einer guten modernen Heizung können wir uns immer gemütlich ins Haus zurückziehen.
            Bei warmen Temperaturen kann man sich im Garten unter den schönen alten Bäumen
            im Schatten aufhalten und natürlich auch die Sonne anbeten.
          </p>
          <p>
            Das Studio, ein Annexe zum Haupthaus mit separatem Eingang, wurde 2022 neu
            gestaltet und durch ein zusätzliches Schlafzimmer und Bad im ersten Stock erweitert.
            Sie finden im Erdgeschoss eine volleingerichtete Küche mit Theke und zwei Sitzplätzen
            und einem Wohnbereich mit Sessel und Sofa vor. Über eine kleine gewundene Treppe
            eröffnet sich Ihnen das Schlafzimmer mit bodengroßem breiten Schiebefenster mit
            einigen Blickfreigaben auf das Meer und unseren schönen grünen Garten mit alten
            Bäumen und dicken Hortensienblüten. Dort oben geht es dann in ein großes
            Badezimmer mit Dusche, Waschbecken und WC.
          </p>
          <h3 className="text-main_80">Warum Petite Baleine – kleiner Wal? Foto!</h3>
          <p>Keine Angst, Wale gibt’s hier nicht. Aber wir haben im Garten ein großes
            Strandfundstück, das aus der richtigen Perspektive wie ein kleiner Wal aussieht. Und
            manchmal auch wie ein Ente oder ein schlafendes Kamel...</p>
        </div>


      </div>
    </div>
  );
};

export default Uberblick;
