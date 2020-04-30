import React, { useEffect } from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Reserve.scss';
import { ReactComponent as Tick } from 'assets/svg/tick.svg';

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
      <section className="flex flex-col items-center mx-auto text-center">
        <section
          id="top-ticket"
          className="bg-white flex flex-col items-center p-4 rounded-lg shadow-2xl w-48"
        >
          <Tick className="mt-2" />
          <div className="flex flex-col mb-3 text-gray-800 opacity-0 transition-opacity duration-100">
            <span
              className="font-black text-4xl text-black"
              style={{ marginBottom: '0.8rem' }}
            >
              Desk A1
            </span>
            <span className="text-lg" style={{ marginBottom: '0.88rem' }}>
              Level 1
            </span>
            <span style={{ marginBottom: '0.72rem' }}>Standard desk</span>
            <span className="leading-6">
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
          <div
            id="reserve-qr"
            className="opacity-0 transition-opacity duration-100"
          >
            <QRCode value={window.location.href} size={100} />
          </div>
        </section>

        <span className="block mt-4 text-white opacity-0 transition-opacity duration-100">
          Scan the code to save confirmation on your phone
        </span>
        <Link to="/">
          <span
            id="confirm-button"
            className="-translate-y-64 bg-primary block duration-300 focus:outine-none font-black rounded-lg scale-125 text-3xl text-secondary transform transition w-48 flex justify-center items-center btn-border border"
          >
            OK
          </span>
        </Link>

        <Link to="/">
          <span
            id="cancel-button"
            className="flex justify-center items-center border-primary focus:outine-none font-bold rounded-lg text-primary w-48 opacity-0 transition-opacity duration-100 text-lg"
          >
            Cancel Reservation
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Reserve;
