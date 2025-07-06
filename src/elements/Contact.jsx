import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Example3() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lcdb0ho', 'template_jt5mhog', form.current, '7RlYe11HzlUOZhDBy')
        .then((result) => {
            console.log(result.text);
            alert("Message Sent :)")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id="contact" className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl flex justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Contact
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 ml-2 svg1"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
          />
        </svg>
      </div>
      <form
        action="#"
        method="POST"
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className=" gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="user_name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block mt-2 text-sm font-semibold leading-6 text-gray-300"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mt-4 text-sm font-semibold leading-6 text-gray-300"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            value="Send"
            type="submit"
            className="block w-full rounded-md bg-gray-500 px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm bgbt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>
  );
}
