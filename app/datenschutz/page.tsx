import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className='container mx-auto'>
      <div className='mx-auto mb-2 h-full w-full max-w-[900px] gap-4 p-2 sm:p-4 md:mt-[48px]'>
        <h1 className='text-2xl font-bold'>Datenschutzerklärung</h1>
        <div className='my-4'>
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Nachfolgend
          informieren wir Sie über die Verarbeitung Ihrer personenbezogenen
          Daten auf unserer Website:
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Verantwortliche Stelle:</h1> Brose,
          Anne-Frank-Straße 59a, 22587 Hamburg
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Datenverarbeitung auf dieser Website: </h1>
          Keine Verwendung von Cookies: Unsere Website verwendet keine Cookies
          oder ähnliche Tracking-Technologien, um persönliche Daten zu sammeln
          oder Ihr Nutzerverhalten zu verfolgen. Kontaktformular: Wenn Sie das
          Kontaktformular auf unserer Website nutzen, um mit uns in Kontakt zu
          treten, werden die von Ihnen eingegebenen Daten (wie Name,
          E-Mail-Adresse und Ihre Nachricht) zur Bearbeitung Ihrer Anfrage und
          zur Kommunikation mit Ihnen verwendet.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Zweck der Datenverarbeitung:</h1>
          Die von Ihnen bereitgestellten personenbezogenen Daten werden nur für
          den angegebenen Zweck verwendet, nämlich um Ihre Anfragen zu
          beantworten, Ihnen Informationen zukommen zu lassen und/oder unsere
          Dienstleistungen bereitzustellen.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Rechtsgrundlage der Verarbeitung: </h1>
          Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Artikel 6
          Absatz 1 Buchstabe f DSGVO, zur Wahrung unserer berechtigten
          Interessen an der Beantwortung von Anfragen und der Kommunikation mit
          unseren Nutzern.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Datenübermittlung an Dritte: </h1>
          Ihre Daten werden nicht ohne Ihre ausdrückliche Zustimmung an Dritte
          weitergegeben, es sei denn, dies ist zur Bearbeitung Ihrer Anfrage
          erforderlich oder gesetzlich vorgeschrieben.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Speicherdauer: </h1>
          Wir speichern Ihre Daten nur so lange, wie es für die Bearbeitung
          Ihrer Anfrage und die Erfüllung rechtlicher Verpflichtungen
          erforderlich ist.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Ihre Rechte:</h1>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Sie
          haben auch das Recht, der Verarbeitung Ihrer Daten zu widersprechen
          sowie das Recht auf Datenübertragbarkeit. Bitte kontaktieren Sie uns
          dazu über die in Punkt 1 genannten Kontaktdaten.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Beschwerderecht:</h1>
          Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen die
          DSGVO verstößt, haben Sie das Recht, eine Beschwerde bei der
          Datenschutzbehörde einzureichen.
        </div>

        <div className='my-4'>
          <h1 className='font-bold'>Verwendung von Webplanner Kalender: </h1>
          Für die Darstellung von Belegungszeiten unser Ferienobjekte nutzen wir
          die Software webplanner des deutschen Anbieters Webplanner, Drubbel 3,
          48143 Münster, Deutschland. Zum Datenschutzhinweis des Anbieters:
          <Link href='https://www.webplanner.de/datenschutz'>
            https://www.webplanner.de/datenschutz
          </Link>
        </div>

        <div className='my-4'>
          Indem Sie unsere Website nutzen und/oder das Kontaktformular
          ausfüllen, erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß
          dieser Datenschutzerklärung einverstanden.
        </div>
      </div>
    </main>
  );
}
