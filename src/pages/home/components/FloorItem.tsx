import React from 'react';
import { Link } from 'react-router-dom';
import { Floor } from 'models/Floor.model';

/**
 * Floor Item Props
 */
interface Props {
  floor: Floor;
}

const FloorItem: React.FC<Props> = ({ floor }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
    <div className="flex items-center justify-between">
      <span className="font-bold text-3xl text-blue-800">{floor.level}</span>
      <span className="flex items-center">
        <span className="bg-green-400 block h-4 mr-2 rounded-full w-4" />
        <span className="font-semibold text-2xl">
          {floor.available} spaces available
        </span>
      </span>
    </div>
    <div className="flex mt-3">
      <img
        className="h-32 mr-3 object-cover w-3/5"
        src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
        alt={floor.level}
      />
      <section className="flex flex-col flex-1">
        <div className="flex flex-1 flex-col leading-8 text-gray-600 text-sm">
          {floor.amenities.map((amenity, key) => (
            <span key={key}>{amenity}</span>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Link to={`/level/${floor.id}`}>
            <span className="-mr-4 duration-150 ease-in-out  hover:text-blue-600 rounded-md text-gray-700 transition">
              <svg className="feather-icon w-10 h-10">
                <use xlinkHref="/images/svg/feather-sprite.svg#chevron-right" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default FloorItem;
