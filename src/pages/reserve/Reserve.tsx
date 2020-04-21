import React from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

const Reserve: React.FC = () => {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <section className="flex flex-col items-center max-w-2xl mx-auto text-center">
        <section className="bg-white flex flex-col items-center mb-2 p-4 rounded-lg shadow-2xl w-48">
          <svg className="feather-icon h-10 text-green-500 w-10">
            <use xlinkHref="/images/svg/feather-sprite.svg#check" />
          </svg>
          <div className="flex flex-col leading-8 text-gray-800">
            <span className="font-black text-3xl text-black">Desk A1</span>
            <span className="font-bold">Level 1</span>
            <span className="">Standard desk</span>
            <span className="leading-5 text-sm">
              Reserve on 6/12/2012 <br /> at 10:06AM
            </span>
          </div>
        </section>

        <section className="bg-white flex flex-col items-center mb-2 p-4 rounded-lg shadow-2xl w-48">
          <QRCode value={window.location.href} size={100} />
        </section>

        <span className="block mb-8 text-white">
          Scan the code to save confirmation on your phone
        </span>
        <Link to="/">
          <span className="block bg-primary focus:outine-none font-bold font-semibold mx-2 px-3 py-2 rounded-lg text-2xl text-black w-48">
            OK
          </span>
        </Link>

        <Link to="/">
          <span className="block border border-primary focus:outine-none font-bold font-semibold mt-4 mx-2 px-3 py-2 rounded-lg text-black text-primary w-48">
            Cancel Reservation
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Reserve;
