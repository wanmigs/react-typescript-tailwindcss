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
      <section className="mx-auto">
        <section className="flex justify-end">
          <button className="m-5" onClick={onClose} id="modal-close">
            <img src="/images/x.svg" alt="close" />
          </button>
        </section>

        <section className="flex justify-center mb-4 -mt-10">
          <span
            id="reserve-image-wrapper"
            className="flex items-center justify-center rounded-full w-32"
          >
            <img src="/images/Desk.svg" alt="Desk" />
          </span>
          {workspace && (
            <div className="flex flex-col items-start leading-9 ml-6">
              <span className="font-bold text-4xl mb-3">
                Desk A{workspace.id}
              </span>
              <span>{level}</span>
              <span>{workspace.type}</span>
              <span>{workspace.equipments || 'No Equipment'}</span>
            </div>
          )}
        </section>
        <Link to="/reserve">
          <span
            id="reserve-button"
            className="flex justify-center items-center mx-auto bg-primary focus:outine-none font-bold font-semibold text-3xl text-secondary"
          >
            Reserve
          </span>
        </Link>
      </section>
    </div>
  );
};

export default ReservationModal;
