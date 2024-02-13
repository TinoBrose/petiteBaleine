'use client';
import Link from 'next/link';

export default function Contact() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData['message']);

      alert(
        'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah bei Ihnen.'
      );
    } catch (err) {
      console.error(err);
      alert(
        'Leider ist etwas schief gelaufen. Bitte probieren Sie es später noch einmal oder schicken Sie uns direkt eine E-Mail an: anfrage.petite-baleine@gmail.com'
      );
    }
  }

  return (
    <div className='mx-auto mb-4 w-full max-w-[550px]'>
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label
            htmlFor='form-message'
            className='mb-3 block text-base text-sm text-main_80'
          >
            Name:
          </label>
          <input
            required
            id='form-name'
            autoComplete='name'
            maxLength={50}
            name='name'
            placeholder='Vor- & Nachname'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='form-email'
            className='mb-3 block text-base text-sm text-main_80'
          >
            E-Mail:
          </label>
          <input
            required
            id='form-email'
            autoComplete='email'
            maxLength={80}
            name='email'
            type='email'
            placeholder='ihre@mail.com'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
          />
        </div>
        {/* <div className='mb-5'>
          <label htmlFor='form-time'             className='mb-3 block text-base text-sm text-main_80'
> Zeitraum </label>
          <input
            required
            id='form-time'
            name='time'
            placeholder='Geben Sie den gewünschten Zeitraum ein'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
          />
        </div> */}
        <div className='mb-5'>
          <label
            htmlFor='form-message'
            className='mb-3 block text-base text-sm text-main_80'
          >
            Nachricht:
          </label>
          <textarea
            required
            id='form-message'
            name='message'
            placeholder='Ihre Nachricht an uns'
            rows={5}
            className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
          />
        </div>

        <button
          className='hover:shadow-form rounded-md bg-main_80 px-8 py-3 text-base font-semibold text-white outline-none'
          type='submit'
        >
          Anfragen
        </button>
      </form>
    </div>
  );
}
