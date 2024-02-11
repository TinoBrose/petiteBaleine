export default function Anfrage() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">

      <h1 className="text-2xl ">Kontakt</h1>
      <div className="flex flex-col items-center gap-1 md:gap-2  text-main_80 my-4">

        <h3>Judy & Matthias Brose</h3>
        <h3>M: info@petite-baleine.de
        </h3>
        <h3>T: 0111111
        </h3>
      </div>


      {/* <div className="mx-auto w-full max-w-[550px]">
        <form action="https://formbold.com/s/FORM_ID" method="POST">
          <div className="my-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-main_80"
            >
              Vor- & Nachname
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              placeholder="Vor- & Nachname"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-main_80"
            >
              E-Mail
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="your@mail.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="mb-3 block text-base font-medium text-main_80"
            >
              Zeitraum
            </label>
            <input
              required
              type="text"
              name="subject"
              id="subject"
              placeholder="Geben Sie den gewünschten Zeitraum ein"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-main_80"
            >
              Nachricht
            </label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Ihr Nachricht an uns"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md bg-main_80 py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Absenden
            </button>
          </div>
        </form>
      </div> */}
    </main>
  );
}
