/**
 * About Me section component displaying personal information, description, 
 * social media links, and a grid of technology skills with SVG icons
 * Features responsive layout and hover effects
 */
export default function AboutMe() {
  return (
    <section>
      <div
        id="about"
        className=" max-w-screen-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      >
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 xl:ml-20 lg:items-center lg:gap-x-24">
          {/* Left column - About me text and social links */}
          <div className="mx-auto max-w-4xl text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            {/* Section title with hand icon */}
            <h2 className="text-3xl flex text-left lg:ml-40 font-bold tracking-tight sm:text-4xl text-gray-300">
              About Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-10 ml-2"
              >
                <path
                  fill="#64ffda"
                  d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5H23M1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5H1m7-2.68l-4.59 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.09c.49-.47.49-1.26 0-1.75a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.29-.49-1.79 0L14.19 13l-.69-.73l6.87-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.71-.7l5.5-5.48c.5-.49.5-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77c-.5-.48-1.29-.48-1.79.01Z"
                />
              </svg>
            </h2>
            
            <div className="items-center align-items flex flex-col">
              {/* Personal description */}
              <p className="mt-4 text-lg leading-8 text-gray-400 text-left lg:ml-40 w-auto">
                I{"'"}m a passionate and motivated Front-End Junior Developer.
                With a keen eye for detail and a strong desire to create
                visually appealing and user-friendly websites. I have a solid
                foundation in HTML, CSS, and JavaScript, and I{"'"}m constantly
                expanding my skill set to stay up-to-date with the latest
                front-end technologies and best practices.
              </p>
              
              {/* Social media links */}
              <div className="flex mt-2 ">
                {/* LinkedIn link */}
                <a
                  href="https://www.linkedin.com/in/piotr-perczak-8b6a01374/"
                  className=" bg-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="60"
                    viewBox="0 0 24 24"
                    className="svgh 2xl:ml-8 transition-all "
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                
                {/* GitHub link */}
                <a
                  href="https://github.com/PiotrPerczak"
                  className=" bg-transparent"
                >
                  <svg
                    className="svgh transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="60"
                    viewBox="0 0 24 24 "
                  >
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Skills grid with technology icons */}
          <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 ">
            {/* HTML Skill Card */}
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#e44f26"
                    d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"
                  />
                  <path
                    fill="#f1662a"
                    d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                  />
                  <path
                    fill="#ebebeb"
                    d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"
                  />
                  <path
                    fill="#fff"
                    d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"
                  />
                </svg>
              </span>
              <h2 className="text-gray-300 font-bold">HTML</h2>
            </a>

            {/* CSS Skill Card */}
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#1572b6"
                    d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"
                  />
                  <path
                    fill="#33a9dc"
                    d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"
                  />
                  <path
                    fill="#fff"
                    d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"
                  />
                  <path
                    fill="#ebebeb"
                    d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"
                  />
                  <path
                    fill="#fff"
                    d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"
                  />
                  <path
                    fill="#ebebeb"
                    d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"
                  />
                </svg>
              </span>

              <h2 className="font-bold text-gray-300">CSS</h2>
            </a>
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 256 256"
                >
                  <path fill="#F7DF1E" d="M0 0h256v256H0V0Z" />
                  <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
                </svg>
              </span>
              <h2 className="font-bold text-gray-300">Javascript</h2>
            </a>
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 128 128"
                >
                  <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                  <path
                    fill="#007acc"
                    d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 0 1 7.82 4.5a20.58 20.58 0 0 1 3 4c0 .16-5.4 3.81-8.69 5.85c-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 0 0-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 0 0 .54 2.34c.83 1.73 2.38 2.76 7.24 4.86c8.95 3.85 12.78 6.39 15.16 10c2.66 4 3.25 10.46 1.45 15.24c-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 0 1-9.52-.1a23 23 0 0 1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 0 1 1.15-.73L82 101l3.59-2.08l.75 1.11a16.78 16.78 0 0 0 4.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 0 0 .69-6.92c-1-1.39-3-2.56-8.59-5c-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 0 1-3.43-6.25a25 25 0 0 1-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 0 1 9.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 0 1 .12-5.17C29.08 59 39 59 51 59h21.83z"
                  />
                </svg>
              </span>

              <h2 className="font-bold text-gray-300">Typescript</h2>
            </a>

            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 128 128"
                >
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4" />
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4z" />
                  </g>
                </svg>
              </span>

              <h2 className="font-bold text-gray-300">React</h2>
            </a>
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 256 244"
                >
                  <path
                    fill="#764ABC"
                    d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718Zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165ZM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448Z"
                  />
                </svg>
              </span>
              <h2 className="font-bold text-gray-300">Redux</h2>
            </a>
            <a className="rounded-xl p-4 shadow-sm text-center">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 256 192"
                >
                  <path
                    fill="#CD6799"
                    d="M220.281 110.514c-8.906.046-16.647 2.191-23.128 5.362c-2.379-4.71-4.757-8.906-5.176-11.984c-.467-3.59-1.026-5.782-.467-10.072c.56-4.29 3.078-10.399 3.031-10.865c-.046-.466-.56-2.658-5.689-2.704c-5.129-.047-9.559.979-10.072 2.331c-.513 1.352-1.492 4.43-2.145 7.6c-.886 4.664-10.258 21.31-15.62 30.03c-1.726-3.403-3.218-6.388-3.545-8.766c-.466-3.59-1.026-5.782-.466-10.072c.56-4.29 3.078-10.398 3.031-10.865c-.047-.466-.56-2.658-5.689-2.704c-5.13-.047-9.56.979-10.072 2.331c-.513 1.353-1.073 4.523-2.145 7.601c-1.073 3.078-13.523 30.87-16.787 38.05a214.726 214.726 0 0 1-4.15 8.627s-.047.14-.187.373a117.773 117.773 0 0 1-1.398 2.658v.046c-.7 1.26-1.446 2.425-1.819 2.425c-.28 0-.793-3.357.093-7.927c1.865-9.652 6.295-24.667 6.249-25.18c0-.28.839-2.891-2.891-4.244c-3.638-1.352-4.943.886-5.27.886c-.326 0-.56.793-.56.793s4.058-16.88-7.74-16.88c-7.367 0-17.533 8.067-22.569 15.341a6269.96 6269.96 0 0 0-17.16 9.373c-2.75 1.539-5.595 3.078-8.253 4.523c-.187-.186-.373-.42-.56-.606c-14.269-15.248-40.661-26.02-39.542-46.49c.42-7.461 2.984-27.046 50.687-50.827c39.262-19.352 70.505-13.99 75.914-2.099c7.74 16.974-16.74 48.496-57.309 53.065c-15.481 1.726-23.595-4.243-25.646-6.481c-2.145-2.332-2.472-2.472-3.265-2.005c-1.305.7-.466 2.798 0 4.01c1.213 3.17 6.202 8.766 14.642 11.518c7.461 2.424 25.6 3.777 47.563-4.71c24.574-9.513 43.786-35.952 38.144-58.101c-5.643-22.476-42.947-29.89-78.246-17.347C61.086 13.99 38.33 25.74 21.963 41.035C2.518 59.22-.56 75.028.699 81.65c4.524 23.501 36.932 38.796 49.895 50.127c-.653.373-1.26.7-1.772.98c-6.482 3.217-31.196 16.133-37.351 29.796c-6.994 15.481 1.12 26.58 6.482 28.071c16.647 4.617 33.76-3.683 42.946-17.393c9.186-13.709 8.067-31.522 3.824-39.682c-.047-.093-.093-.187-.187-.28c1.679-.979 3.404-2.005 5.083-2.984a247.933 247.933 0 0 1 9.373-5.27c-1.586 4.337-2.752 9.513-3.311 16.974c-.7 8.767 2.89 20.144 7.6 24.62c2.099 1.96 4.57 2.006 6.156 2.006c5.502 0 7.974-4.57 10.725-9.979c3.357-6.621 6.388-14.315 6.388-14.315s-3.777 20.797 6.482 20.797c3.73 0 7.507-4.85 9.186-7.321v.046s.093-.14.28-.466c.373-.606.606-.98.606-.98v-.092c1.492-2.612 4.85-8.534 9.839-18.373c6.435-12.683 12.637-28.537 12.637-28.537s.56 3.87 2.471 10.305c1.12 3.777 3.45 7.927 5.316 11.937c-1.492 2.099-2.425 3.264-2.425 3.264l.047.047c-1.213 1.585-2.518 3.31-3.964 4.99c-5.083 6.061-11.144 13.01-11.984 15.014c-.98 2.378-.746 4.104 1.12 5.503c1.352 1.026 3.776 1.165 6.248 1.026c4.57-.327 7.787-1.446 9.372-2.145c2.472-.886 5.363-2.239 8.067-4.244c4.99-3.684 8.02-8.953 7.741-15.9c-.14-3.824-1.399-7.648-2.938-11.239c.467-.652.886-1.305 1.353-1.958c7.88-11.518 13.989-24.155 13.989-24.155s.56 3.87 2.471 10.306c.933 3.264 2.845 6.808 4.523 10.258c-7.414 6.016-11.984 13.01-13.616 17.58c-2.937 8.487-.653 12.31 3.684 13.196c1.958.42 4.756-.513 6.808-1.399c2.611-.839 5.689-2.284 8.627-4.43c4.99-3.683 9.792-8.813 9.512-15.76c-.14-3.171-.979-6.296-2.145-9.327c6.295-2.61 14.409-4.056 24.76-2.844c22.197 2.611 26.58 16.46 25.74 22.29c-.839 5.828-5.502 8.999-7.04 9.978c-1.54.98-2.052 1.306-1.912 2.005c.186 1.026.932.98 2.238.793c1.819-.326 11.658-4.71 12.077-15.435c.7-13.709-12.357-28.677-35.439-28.537ZM49.055 168.242c-7.368 8.02-17.626 11.051-22.056 8.487c-4.756-2.752-2.891-14.596 6.155-23.082c5.502-5.176 12.59-9.98 17.3-12.917c1.072-.653 2.658-1.585 4.57-2.751c.326-.187.513-.28.513-.28l1.119-.7c3.31 12.124.14 22.803-7.601 31.243Zm53.625-36.465c-2.565 6.249-7.927 22.243-11.191 21.357c-2.798-.746-4.524-12.87-.56-24.854c2.005-6.016 6.248-13.197 8.72-15.994c4.01-4.477 8.44-5.97 9.512-4.15c1.353 2.378-4.896 19.724-6.481 23.641Zm44.252 21.17c-1.073.56-2.098.933-2.565.653c-.326-.187.467-.933.467-.933s5.549-5.968 7.74-8.673c1.26-1.585 2.751-3.45 4.337-5.549v.606c0 7.135-6.902 11.938-9.98 13.896Zm34.133-7.787c-.793-.56-.653-2.425 2.005-8.254c1.026-2.285 3.45-6.108 7.601-9.792c.466 1.492.793 2.938.746 4.29c-.047 9-6.481 12.357-10.352 13.756Z"
                  />
                </svg>
              </span>
              <h2 className=" font-bold text-gray-300">Sass</h2>
            </a>
            <a className="rounded-xl  p-4 shadow-sm text-center ">
              <span className="inline-block rounded-lg bg-transparent p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130"
                  height="76"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#38bdf8"
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                  />
                </svg>
              </span>
              <h2 className="font-bold text-gray-300">Tailwind</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
