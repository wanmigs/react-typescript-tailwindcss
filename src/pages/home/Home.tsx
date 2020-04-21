import React, { useEffect, useState } from 'react';
import { getFloors } from 'services/Floor';
import { Floor } from 'models/Floor.model';
import FloorItem from './components/FloorItem';

const Home: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([]);

  useEffect(() => {
    getFloors().then((data) => {
      setFloors(data);
    });
  }, []);

  /**
   * Renders each floor item details
   */
  const renderFloors = () =>
    floors.map((floor: Floor, key: string | number | undefined) => (
      <FloorItem floor={floor} key={key} />
    ));

  return (
    <section className="">
      <div className="flex justify-center mb-6">
        <div className="flex flex-col items-center justify-center">
          <img
            className="block h-8 mb-2 w-auto"
            src="/images/logo.png"
            alt="logo"
          />
          <span className="font-bold md:text-4xl text-2xl">
            Welcome to 45 George St.
          </span>
        </div>
      </div>
      <section className="max-w-2xl mx-auto">{renderFloors()}</section>
    </section>
  );
};

export default Home;
