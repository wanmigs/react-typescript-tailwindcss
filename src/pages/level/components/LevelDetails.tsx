import React from 'react';
import { Link } from 'react-router-dom';
import { Floor } from 'models/Floor.model';
import QRCode from 'qrcode.react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

/**
 * Props Definition for LevelDetail component
 */
interface Props {
  floor: Floor;
}

const LevelDetail: React.FC<Props> = ({ floor }) => {
  if (!floor) {
    return null;
  }

  return (
    <div className="bg-white relative rounded-lg shadow-lg pt-6">
      {/* <div className="flex items-center justify-start mb-8">
        <Link to="/levels">
          <span className="duration-150 ease-in-out flex font-semibold hover:bg-gray-200 hover:text-blue-600 items-center pr-6 rounded-md shadow-lg text-gray-700 text-lg transition py-1">
            <svg className="feather-icon h-10 sm:h-12 sm:w-12 w-10">
              <use xlinkHref="/images/svg/feather-sprite.svg#chevron-left" />
            </svg>
            All Levels
          </span>
        </Link>
      </div> */}

      <Carousel slidesPerPage={3} arrows={true} offset={20}>
        <img
          src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
          alt={floor.level}
        />
        <img
          src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
          alt={floor.level}
        />
      </Carousel>

      <section className="p-6">
        <section className="flex items-start justify-between mt-4 relative">
          <div>
            <span className="bg-white font-bold md:text-5xl pr-6 text-4xl">
              {floor.level}
            </span>
            <span className="flex items-center ">
              <span className="-mt-3 font-semibold md:text-2xl text-green-500">
                {floor.available} spaces available
              </span>
            </span>
            <span className="flex font-semibold mb-2 mt-4 sm:text-lg text-base text-gray-600">
              Amenities
            </span>
            <div className="flex flex-1 sm:text-lg text-gray-600 text-base">
              {floor.amenities.map((amenity, key) => (
                <span key={key} className="mr-6">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <QRCode value={window.location.href} size={100} />
        </section>
      </section>
    </div>
  );
};

export default LevelDetail;
