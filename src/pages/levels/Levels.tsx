import React, { useEffect, useState } from "react";
import { getFloors } from "services/Floor";
import { Floor } from "models/Floor.model";
import { Link } from "react-router-dom";
import "dist/css/levels.scss"

const AllLevels: React.FC = () => {
  const [floors, setFloors] = useState<Floor[]>([]);

  useEffect(() => {
    getFloors().then(data => {
      setFloors(data);
    });
  }, []);

  const renderBoxes2 = () =>
    floors.map((floor, key) => {
      return (
        <li className="levels flex justify-between" key={key}>
          <div className="flex flex-col">
            <span className="font-bold text-3xl text-white">{floor.level}</span>
            <div className="level-details">
              <Link to={`/level/${floor.id}`}>
                <span className="bg-white font-semibold px-4 py-1 rounded-md text-lg">
                  View
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div className="levels-floor" />
            <img
              src="/images/floor.png"
              className="levels-image"
              alt={floor.level}
            />
          </div>
        </li>
      );
    });

  return (
    <section className="flex flex-col max-w-2xl mx-auto">
      <span className="block font-bold md:text-4xl text-2xl text-center">
        Choose a level
      </span>
      {/* <section className="relative transform scale-75">{renderBoxes()}</section> */}
      <section>
        <ul>{renderBoxes2()}</ul>
      </section>
    </section>
  );
};

export default AllLevels;
