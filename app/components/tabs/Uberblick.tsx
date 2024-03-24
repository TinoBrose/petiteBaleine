import Link from 'next/link';
import React from 'react';
import petiteBaleine from '../../public/petite_baleine.jpg';

const Uberblick = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 px-2 md:px-0'>
        <h1 className='text-2xl '>Petite baleine</h1>
        <div className='mb-4 flex flex-wrap gap-2 text-main_80  md:flex-row md:gap-2'>
          <h3>Ferienwohnung</h3>
          <h3>|</h3>
          <h3>1 Schlafzimmer</h3>
          <h3>|</h3>
          <h3>1 Badezimmer</h3>
          <h3>|</h3>
          <h3>Küche – Salon</h3>
        </div>
        <div className='border-t-[1px] border-accent'></div>
        <div className='flex flex-col gap-4 py-4'>
          <p>
            Versteckt in den kleinen Nebenstraßen von Plouhinec liegt unser
            bretonisches Traumhaus aus alten Steinen, blauen Fensterläden und
            mit einem großen Garten. Im Haus haben wir mit separatem Eingang
            ganz neu ein gemütliches Studio mit Wohn- /Küchenbereich im
            Erdgeschoss und Schlafzimmer und großzügigem Bad im Obergeschoß
            gezaubert. Durchs große Gaubenfenster ist das Meer zu entdecken.
          </p>

          <p>
            Im Erdgeschoss befindet sich eine voll eingerichtete Küche mit Theke
            und zwei Sitzplätzen und einem Wohnbereich mit Sessel und Sofa. Über
            eine kleine gewundene Treppe kommen Sie ins Schlafzimmer mit
            bodengroßem breiten Schiebefenster mit etwas Blick auf den Atlantik
            und unseren schönen Garten mit alten Bäumen und dicken
            Hortensienblüten. Dort oben geht es dann in ein großes Badezimmer
            mit Dusche, Waschbecken und WC. Wasch- und Trockenmöglichkeiten gibt
            es auf Wunsch in der angrenzenden Garage, wenn man nicht die kleinen
            Waschsalons in der Nachbarschaft aufsuchen möchte. Bettwäsche
            (155x220 oder 240x260) kann gegen Gebühr gestellt werden, ebenso
            Handtücher für Bad und Küche. Strandtücher sind selbst mitzubringen.
            Strom wird per Ablesung (Foto vom Zähler bei Ein- und Auszug)
            berechnet. Per Verlängerungskabel konnten Gäste auch schon ihr
            E-Auto nachts aufladen. WLan ist vorhanden. Für Tiere ist das Studio
            nicht geeignet.
          </p>

          <p>
            Das Studio ist Teil unseres größeren Hauses, unserem Zweitwohnsitz.
            Daher teilt man sich zeitweise den Garten, vor dem Studio ist ein
            eigener Bereich.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 pb-4'>
          <Link href='/anfrage' className='w-[250px] '>
            <div className='flex items-center justify-center rounded-lg bg-main_80 px-4 py-4 text-lg text-white hover:opacity-90'>
              Jetzt anfragen
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-4 py-4'>
          <h3 className='text-lg text-main_80'>
            Warum Petite Baleine – kleiner Wal?
          </h3>
          <p>
            Keine Angst, Wale gibt’s hier nicht. Aber wir haben im Garten ein
            großes Strandfundstück, das aus der richtigen Perspektive wie ein
            kleiner Wal aussieht. Und manchmal auch wie ein Ente oder ein
            schlafendes Kamel ...
          </p>
        </div>
        <div className='h-[400] flex-1 '>
          <img
            src='/petite_baleine.jpg'
            alt='Petite Baleine'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
};

export default Uberblick;
