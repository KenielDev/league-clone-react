import React from "react";

export default function PokeNavbar() {
  return (
    <div>
      <nav
        className="relative z-50 h-24 select-none"
        x-data="{ showMenu: false }"
      >
        <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2">
          <div className="flex items-center justify-start w-1/4 h-full pr-4">
            <a href="#_" className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none ">
                <img
                  className="w-[100px] mt-5"
                  src="./src/assets/img/pokemon-icon.png"
                  alt=""
                />
              </span>
            </a>
          </div>
          <div className="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
            <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row mt-5">
              <div className="flex flex-col items-start justify-center w-full text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                <a
                  href="#_"
                  className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-white md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  Home
                </a>
                <a
                  href="#_"
                  className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  xesq
                </a>
                <a
                  href="#_"
                  className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  Sobre
                </a>
                <a
                  href="#_"
                  className="inline-block w-full py-2 mx-0 font-medium text-left text-white md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
                >
                  Contato
                </a>
                <a
                  href="#_"
                  className="absolute top-0 left-0 hidden py-2 mt-6 ml-10 mr-2 text-gray-600 lg:inline-block md:mt-0 md:ml-2 lg:mx-3 md:relative"
                >
                  <svg
                    className="inline w-5 h-5"
                    fill="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                <a
                  href="#_"
                  className="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white  md:w-auto md:rounded-full lg:px-5"
                >
                  <img
                    className="rounded-full w-[80px] h-[80px]"
                    src="./src/assets/img/trainer.jpg"
                    alt="Trainer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute right-0 flex flex-col items-center  justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-white"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              x-cloak=""
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg
              className="w-6 h-6 text-white"
              x-show="showMenu"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              x-cloak=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}
