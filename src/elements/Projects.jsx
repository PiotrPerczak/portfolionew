import AI from "../assets/summapp.png";
import GameShop from "../assets/GameShop.png";
import chat from "../assets/chat.png";
import por from "../assets/por.png";

/**
 * Projects section component
 * Displays a list of portfolio projects with descriptions, technology stack, links, and screenshots
 * Each project is presented in a styled card with a background, title, description, and image
 */
export default function Projects() {
  return (
    <div id="projects" className="py-20 align-center justify-center ">
      {/* Section header */}
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid gap-4 place-content-center max-w-2xl lg:text-center">
          <h2 className="text-3xl flex text-left font-bold tracking-tight sm:text-4xl text-gray-300">
            Projects
            {/* Decorative SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 ml-2"
            >
              <path
                fill="#64ffda"
                d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Zm2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513c0-.086-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056ZM17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75Z"
              />
            </svg>
          </h2>
        </div>
        {/* Spacer for layout */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"></div>
      </div>
      {/* Projects list */}
      <div className="">
        <div className="mx-auto max-w-7xl py-24 sm:px-6  lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#64ffda" />
                  <stop offset={1} stopColor="#64ffda" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Summarizer Application
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Web application which allows you to summarize articles from any
                website you link to. Technologies used: React, Tailwind Css,
                Redux, HTML/CSS
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://ai-sumz-ten.vercel.app"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/PiotrPerczak/AIsumz"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 brightness-75 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={AI}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#64ffda" />
                  <stop offset={1} stopColor="#64ffda" />
                </radialGradient>
              </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                OGameShop{" "}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                OGameshop is a game store application built using React,
                Tailwind CSS, shadcn/ui, and TypeScript. It allows users to
                browse, search, and purchase video games through a clean and
                responsive interface.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://o-game-shop.vercel.app"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/PiotrPerczak/OGameShop"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute brightness-75 left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={GameShop}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#64ffda" />
                  <stop offset={1} stopColor="#64ffda" />
                </radialGradient>
              </defs>
            </svg>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Moviedb Application{" "}
                <div className="flex gap-4">
                  {" "}
                  <p className="">(work in progress)</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 36 36"
                    className=""
                  >
                    <path
                      fill="#F4900C"
                      d="M29.879 33.879C31.045 35.045 32.9 35.1 34 34s1.045-2.955-.121-4.121L12.121 8.121C10.955 6.955 9.1 6.9 8 8s-1.045 2.955.121 4.121l21.758 21.758z"
                    />
                    <path
                      fill="#66757F"
                      d="M22 3s-6-3-11 2l-7 7s-1-1-2 0l-1 1s-1 1 0 2l4 4s1 1 2 0l1-1s1-1 0-2l-.078-.078c.77-.743 1.923-1.5 3.078-.922l4-4s-1-3 1-5s3-2 5-2s1-1 1-1z"
                    />
                  </svg>{" "}
                </div>
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Moviedb is an application built with React and TypeScript,
                styled with Tailwind CSS, and uses a movie database API to
                display film information.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="https://moviedb-ashen.vercel.app"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/PiotrPerczak/moviedb"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute brightness-75 left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={chat}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-slate-800 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#64ffda" />
                  <stop offset={1} stopColor="#64ffda" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                Portfolio Website
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                Simple React App with the use of Tailwind CSS
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Home
                </a>
                <a
                  href="https://github.com/PiotrPerczak/portfolionew"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute  left-0 top-0 w-[66rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={por}
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
