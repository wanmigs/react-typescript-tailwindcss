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

  useEffect(() => {
    getFloors().then((data) => {
      setFloors(data);
      setSelected(data.length);
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
            <div className="flex flex-col ml-6 mt-2">
              <span className="level-title">{floor.level}</span>
              <span className="level-availability text-white text-lg">
                {floor.available} available
              </span>
              <div className="level-details flex mt-4 z-20">
                <Link to={`/level/${floor.id}`}>
                  <span
                    className={`block font-semibold px-4 py-2 rounded-md text-lg ${
                      floor.available
                        ? 'bg-primary'
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
                  floor.available ? 'text-green-500' : 'text-red-600'
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
            </div>
          </li>
        );
      });

  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <section className="flex items-start mb-6">
        <img src="/images/Logo.png" alt="Logo" className="h-12 mr-3" />
        <div className="flex flex-1 justify-between text-white">
          <span className="text-lg opacity-75">
            Welcome to 44 <br />
            George St
          </span>
          <div className="flex flex-col items-end">
            <span className="opacity-75">{moment().format('D MMM YYYY')}</span>
            <span className="font-semibold text-2xl">{time}</span>
          </div>
        </div>
      </section>
      <section className="text-center text-white mb-4">
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
