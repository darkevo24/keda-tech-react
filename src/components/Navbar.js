import React, { useState } from 'react';
import Modal from './Modal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <nav className="top-0 left-0 w-full mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-white">
              Home
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline">
              <a
                href="#about"
                className="px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
              >
                ABOUT
              </a>
              <a
                href="#pricing"
                className="ml-4 px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
              >
                PRICING
              </a>
              <a
                href="#contact"
                className="ml-4 px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
              >
                CONTACT
              </a>
            </div>
            <div className="ml-4">
              <a 
                onClick={openModal}
                href="#"
                className="inline-block px-4 py-2 border border-blue-300 rounded-md text-blue-300 font-semibold tracking-widest hover:bg-blue-500 hover:text-white transition duration-300"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden opacity-50 bg-gray-100" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray--50"
              >
              ABOUT
              </a>
              <a
                         href="#pricing"
                         className="block px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                       >
              PRICING
              </a>
              <a
                         href="#contact"
                         className="block px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                       >
              CONTACT
              </a>
              <a
                        onClick={openModal}
                         href="#"
                         className="block px-3 py-2 rounded-md text-2xl font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
                       >
              LOGIN
              </a>
              </div>
              </div>
              )}
              {isModalOpen && <Modal onClose={closeModal} />}
              </nav>
              );
              }
