import React from 'react';
import { Workspace } from 'types/Workspace';
import { Link } from 'react-router-dom';
import './Reservation.scss';

/**
 * Definition for ReservationModal Props
 */
interface Props {
  level: string;
  workspace?: Workspace | null;
  onClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ReservationModal: React.FC<Props> = ({ level, workspace, onClose }) => {
  return (
    <div
      id="reservation-modal"
      className={`bg-white duration-200 fixed inset-x-0 pb-10 shadow-lg top-0 transform transition-all z-50 ease-linear ${
        workspace ? 'active' : ''
      }`}
    >
      <section className="max-w-2xl mx-auto">
        <section className="flex justify-end">
          <button className="bg-gray-200 m-3 p-1" onClick={onClose}>
            <svg className="feather-icon w-10 h-10">
              <use xlinkHref="/images/svg/feather-sprite.svg#x" />
            </svg>
          </button>
        </section>

        <section className="flex justify-center mb-8">
          <span className="bg-gray-300 flex h-24 h-32 items-center justify-center rounded-full w-32">
            <svg className="feather-icon h-24 text-gray-500 w-24">
              <use xlinkHref="/images/svg/feather-sprite.svg#monitor" />
            </svg>
          </span>
          {workspace && (
            <div className="flex flex-col font-semibold items-start leading-9 ml-8">
              <span className="font-black text-3xl">Desk A{workspace.id}</span>
              <span>{level}</span>
              <span>{workspace.type}</span>
              <span>{workspace.equipments || 'No Equipment'}</span>
            </div>
          )}
        </section>
        <Link to="/reserve">
          <span className="bg-primary focus:outine-none font-bold font-semibold mx-2 px-24 px-3 py-2 rounded-lg text-2xl text-black">
            Reserve
          </span>
        </Link>
      </section>
    </div>
  );
};

export default ReservationModal;
