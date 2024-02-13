import React from 'react';
import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Sending');

    let data = {
      name,
      email,
      time,
      message,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setTime('');
        setMessage('');
      }
    });
  };

  return (
    <div className='mx-auto w-full max-w-[550px]'>
      <form>
        <div className='my-5'>
          <label
            htmlFor='name'
            className='mb-3 block text-base font-medium text-main_80'
          >
            Vor- & Nachname
          </label>
          <input
            required
            type='text'
            name='name'
            id='name'
            value={name}
            placeholder='Vor- & Nachname'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='mb-3 block text-base font-medium text-main_80'
          >
            E-Mail
          </label>
          <input
            required
            type='email'
            name='email'
            id='email'
            value={email}

            placeholder='your@mail.com'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='subject'
            className='mb-3 block text-base font-medium text-main_80'
          >
            Zeitraum
          </label>
          <input
            required
            type='text'
            name='time'
            id='time'
            value={time}

            placeholder='Geben Sie den gewünschten Zeitraum ein'
            className='w-full rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='mb-3 block text-base font-medium text-main_80'
          >
            Nachricht
          </label>
          <textarea
            required
            name='message'
            id='message'
            value={message}

            placeholder='Ihr Nachricht an uns'
            className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-main_80 focus:shadow-md'
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <div>
          <button
            type='submit'
            className='hover:shadow-form rounded-md bg-main_80 px-8 py-3 text-base font-semibold text-white outline-none'
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
