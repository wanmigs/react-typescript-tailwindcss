import React, { useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Reserve.scss';

const Reserve: React.FC = () => {
  useEffect(() => {
    const confirmButton = document.getElementById('confirm-button')!;
    confirmButton.classList.remove(...['-translate-y-64', 'scale-125']);
    confirmButton.addEventListener('transitionend', () => {
      const hiddenElements = document.querySelectorAll<
        HTMLDivElement | HTMLSpanElement
      >('.opacity-0')!;

      hiddenElements.forEach((hiddenElement) => {
        hiddenElement.classList.remove('opacity-0');
      });
    });
  }, []);

  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <section className="flex flex-col items-center max-w-2xl mx-auto text-center">
        <section
          id="top-ticket"
          className="bg-white flex flex-col items-center p-4 rounded-lg shadow-2xl w-48"
        >
          <svg className="feather-icon h-10 text-green-500 w-10 opacity-0 transition-opacity duration-100">
            <use xlinkHref="/images/svg/feather-sprite.svg#check" />
          </svg>
          <div className="flex flex-col leading-8 mb-3 text-gray-800 opacity-0 transition-opacity duration-100">
            <span className="font-black text-3xl text-black">Desk A1</span>
            <span className="font-bold">Level 1</span>
            <span className="">Standard desk</span>
            <span className="leading-5 text-sm">
              Reserve on {moment().format('M/D/YYYY')} <br /> at{' '}
              {moment().format('h:mm A')}
            </span>
          </div>
          <div id="top-circles" />
        </section>

        <section
          id="bottom-ticket"
          className="bg-white flex flex-col items-center mb-2 px-4 pb-4 pt-6 rounded-lg shadow-2xl w-48"
        >
          <div id="bottom-circles" />
          <div className="opacity-0 transition-opacity duration-100 canvas">
            <QRCode value={window.location.href} size={100} />
          </div>
        </section>

        <span className="block mb-8 text-white opacity-0 transition-opacity duration-100">
          Scan the code to save confirmation on your phone
        </span>
        <Link to="/">
          <span
            id="confirm-button"
            className="-translate-y-64 bg-primary block duration-300 focus:outine-none font-bold font-semibold mx-2 px-3 py-2 rounded-lg scale-125 text-2xl text-black transform transition w-48"
          >
            OK
          </span>
        </Link>

        <Link to="/">
          <span className="block border border-primary focus:outine-none font-bold font-semibold mt-4 mx-2 px-3 py-2 rounded-lg text-black text-primary w-48 opacity-0 transition-opacity duration-100">
            Cancel Reservation
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Reserve;
