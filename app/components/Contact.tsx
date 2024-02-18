'use client';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  async function handleSubmit(event: any) {
    setIsLoading(true);
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

      event.target.reset();
      setShowFeedback(true);
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setShowFeedback(true);
      setIsSuccess(false);
    }
    setIsLoading(false);

    setTimeout(() => {
      setShowFeedback(false);
      setIsSuccess(false);
    }, 10000);
  }

  return (
    <div className='mx-auto mb-4 w-full max-w-[550px]'>
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label
            htmlFor='form-name'
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
          <label
            htmlFor='form-time'
            className='mb-3 block text-base text-sm text-main_80'
          >
            Zeitraum
          </label>
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
            htmlFor='form-time'
            className='mb-3 block text-base text-sm text-main_80'
          >
            Zeitraum
          </label>
          {/* <DatePicker
            id='form-time'
            name='time'
            placeholderText='Geben Sie den gewünschten Zeitraum ein'
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
          /> */}
          <div className='flex items-center'>
            <DatePicker
              id='form-start-time'
              name='start'
              placeholderText='Startdatum'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            />
            <span className='mx-2 flex h-full items-center'>bis</span>

            <DatePicker
              id='form-end-time'
              name='end'
              placeholderText='Enddatum'
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base text-sm text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            />
          </div>
        </div>
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
          className='hover:shadow-form relative rounded-md bg-main_80 px-8 py-3 text-base font-semibold text-white outline-none'
          type='submit'
        >
          <div className='button-content flex items-center justify-center'>
            {isLoading ? (
              <div className='spinner border-gray-200 h-2 w-2 animate-spin rounded-full border-b-4 border-t-4'></div>
            ) : (
              'Anfragen'
            )}
          </div>
        </button>
      </form>

      {showFeedback && (
        <div className={`mt-4 ${isSuccess ? 'text-success' : 'text-fail'}`}>
          {isSuccess
            ? 'Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah bei Ihnen.'
            : 'Leider ist etwas schief gelaufen. Bitte probieren Sie es später noch einmal oder schicken Sie uns direkt eine E-Mail an: anfrage.petite-baleine@gmail.com'}
        </div>
      )}
    </div>
  );
}
