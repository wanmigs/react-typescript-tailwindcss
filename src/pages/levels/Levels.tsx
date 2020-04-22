import React, { useEffect, useState } from 'react';
import { getFloors } from 'services/Floor';
import { Floor } from 'models/Floor.model';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'dist/css/levels.scss';

const AllLevels: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([]);
  const [selected, setSelected] = useState<number>(1);
  const [time, setTime] = useState(moment().format('h:mm'));
  const [lastID, setID] = useState<number>(1);

  useEffect(() => {
    getFloors().then((data) => {
      setFloors(data);
      setSelected(data.length);
      for (let x = 0; x < data.length; x++) {
        setID(data[x].id);
      }
    });

    setInterval(() => {
      setTime(moment().format('h:mm'));
    }, 30000);
  }, []);

  const renderBoxes = () =>
    floors
      .slice(0)
      .reverse()
      .map((floor, key) => {
        return (
          <li
            className={`levels flex justify-between relative ${
              selected === floor.id ? 'active' : ''
            }`}
            key={key}
            onClick={() => setSelected(floor.id)}
          >
            <div className="absolute inset-0 levels-overlay z-10" />
            <div className="flex flex-col levels-container">
              <span className="level-title">{floor.level}</span>
              <span className="level-availability text-white text-lg">
                {floor.available} available
              </span>
              <div className="level-details flex z-20">
                <Link to={`/level/${floor.id}`}>
                  <span
                    className={`rounded-lg text-xxl flex font-bold  justify-center items-center shadow-2xl ${
                      floor.available
                        ? 'bg-primary  text-secondary'
                        : 'border border-primary text-primary'
                    }`}
                  >
                    {floor.available ? 'Select' : 'View details'}
                  </span>
                </Link>
              </div>
            </div>
            <div className="level-popup">
              <span>{floor.spaces} spaces</span>
              <span
                className={`font-bold ${
                  floor.available ? 'text-custom-green' : 'text-red-600'
                }`}
              >
                {floor.available} available
              </span>
            </div>
            <div
              style={{ zIndex: floor.id }}
              className="level-images-container"
            >
              <img
                className="levels-floor z-10"
                src="/images/Floor.png"
                alt={floor.level}
              />
              <img
                src="/images/Active-Floor.png"
                className="levels-image"
                alt={floor.level}
              />
              {floor.id !== lastID && (
                <div className="triangle-right" style={{ zIndex: floor.id }} />
              )}
            </div>
          </li>
        );
      });

  return (
    <section className="flex flex-col mx-auto">
      <section id="levels-wrapper" className="flex items-start">
        <img src="/images/Logo.png" alt="Logo" id="logo" />
        <div
          id="level-header"
          className="flex flex-1 justify-between text-white items-center"
        >
          <span id="level-location" className="text-lg opacity-75">
            Welcome to <br />
            44 George St
          </span>
          <div className="flex flex-col items-end">
            <span className="text-lg opacity-75">
              {moment().format('D MMM YYYY')}
            </span>
            <span className="font-semibold text-xl">{time}</span>
          </div>
        </div>
      </section>
      <section className="text-center text-white mb-8">
        <p className="text-3xl">
          <span className="font-bold">350</span> available spaces
        </p>
        <p className="font-medium">Select a floor to reserve your space</p>
      </section>
      <section>
        <ul>{renderBoxes()}</ul>
      </section>
    </section>
  );
};

export default AllLevels;
