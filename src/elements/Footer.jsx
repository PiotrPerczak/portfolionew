export default function Example4() {
  return (
    <footer className="bg-white shadow  navbar">
      <div className="w-full mx-auto gap-4 max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex sm:text-center dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=""
            viewBox="0 0 24 24"
            stroke="#64FFDA"
            className="w-12 h-10 fill-transparent"
          >
            <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>{" "}
          <a
            href="#"
            className="hover:underline ml-2 text-4xl font-bold tracking-tight text-gray-300 sm:text-3xl"
          >
            PPER.dev
          </a>
        </span>
        <div className="flex align-items gap-4 flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 ">
          <a href="#" className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              className="svgh "
            >
              <path d="M5 20v-8H2l10-9l4 3.6V4h3v5.3l3 2.7h-3v8h-5v-6h-4v6H5Zm5-9.975h4q0-.8-.6-1.313T12 8.2q-.8 0-1.4.513t-.6 1.312Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/piotr-perczak-b95078283/"
            className=" "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="svgh"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a href="https://github.com/PiotrPerczak" className="">
            <svg
              className="svgh "
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
