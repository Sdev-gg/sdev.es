import React from 'react';
import Logo from './logo';

export default function Header() {
  return (
    <>
      <nav className="z-50 bg-gray-900 w-full">
        <div className="mx-auto container p-4 grid lg:flex lg:justify-between grid-cols-2">
          <nav className="flex items-center">
            <Logo />

            <ul className="lg:flex hidden">
              <li className="mr-8">
                <a
                  className="text-gray-300 hover:text-red-500 transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  Hosting
                </a>
              </li>
              <li className="mr-8">
                <a
                  className="text-gray-300 hover:text-red-500 transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  Developing
                </a>
              </li>
              <li className="mr-8">
                <a
                  className="text-gray-300 hover:text-red-500 transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  Reviews
                </a>
              </li>
              <li className="mr-8">
                <a
                  className="text-gray-300 hover:text-red-500 transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <button className="px-4 py-2.5 bg-transparent border border-gray-400 text-gray-400 hover:cursor-pointer hover:text-white hover:border-white rounded-lg mr-2  transition duration-300 ease-out hover:ease-in">
              Sign In
            </button>
            <button className="px-4 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:cursor-pointer text-gray-200 rounded-lg transition duration-300 ease-out hover:ease-in hover:from-red-600 hover:to-red-800 hover:text-white">
              Start your project
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden justify-self-end inline-flex items-center justify-center rounded-lg p-2 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="lock h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            <svg
              className="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            id="mobile-menu"
            className="col-span-2 p-2 mt-4 rounded-lg lg:hidden z-50"
          >
            <ul className="w-full py-2">
              <li className="bg-gray-800 hover:bg-gray-700 text-gray-50 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                <a className="font-medium hover:text-gray-900" href="#">
                  Hosting
                </a>
              </li>
              <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50t p-2 rounded-lg">
                <a className="font-medium hover:text-gray-900" href="#">
                  Developing
                </a>
              </li>
              <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                <a className="font-medium hover:text-gray-900" href="#">
                  Reviews
                </a>
              </li>
              <li className="hover:bg-gray-700 focus:bg-gray-700 hover:text-gray-50 focus:text-gray-50 p-2 rounded-lg">
                <a className="font-medium hover:text-gray-900" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <div className="border-t border-gray-700 pt-4 flex flex-col items-center gap-2">
              <button className="w-full px-4 py-3 bg-transparent border border-gray-400 text-gray-400 hover:cursor-pointer hover:text-white hover:border-white  font-medium rounded-lg-lg">
                Sign in
              </button>
              <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-700 hover:cursor-pointer text-gray-50 font-medium rounded-lg-lg">
                Start your project
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
