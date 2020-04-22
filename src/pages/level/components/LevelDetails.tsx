import React from 'react';
import { Floor } from 'models/Floor.model';
import { Link } from 'react-router-dom';
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
    <div id="level-details-container" className="bg-white relative shadow-lg">
      <Link to="/">
        <span className="border duration-150 ease-in-out flex font-semibold hover:bg-gray-200 hover:text-blue-600 items-center px-2 py-1 rounded-md shadow-lg text-gray-700 text-lg transition absolute bg-white top-0 left-0 m-4">
          <svg className="feather-icon h-12 w-12">
            <use xlinkHref="/images/svg/feather-sprite.svg#chevron-left" />
          </svg>
        </span>
      </Link>
      {/* <Carousel slidesPerPage={3} arrows={true} offset={20}>
        <img
          src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
          alt={floor.level}
        />
        <img
          src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
          alt={floor.level}
        />
      </Carousel> */}
      <div id="carousel" className="flex">
        <img src="/images/Image-21.png" alt="alt-21" />
        <img src="/images/Image-22.png" alt="alt-22" />
        <img src="/images/Image-23.png" alt="alt-23" />
      </div>

      <section className="">
        <section className="flex items-start justify-between relative">
          <div>
            <span className="bg-white font-bold pr-6 text-4xl">
              {floor.level}
            </span>
            <span className="flex items-center ">
              <span className="-mt-3 font-bold text-xxl text-custom-green">
                {floor.available} spaces available
              </span>
            </span>
            <span className="flex font-semibold mb-2 mt-4 text-lg text-base text-gray-600">
              Amenities
            </span>
            <div className="flex flex-1 text-lg text-gray-600 text-base">
              {floor.amenities.map((amenity, key) => (
                <span key={key} className="flex items-center mr-4">
                  <span className="bg-gray-300 block flex h-5 items-center justify-center mr-2 rounded-full w-5">
                    <svg className="feather-icon w-10 h-10 h-4 w-4">
                      <use xlinkHref="/images/svg/feather-sprite.svg#check" />
                    </svg>
                  </span>
                  {amenity}
                </span>
              ))}
            </div>
          </div>
          <div className="canvas">
            <QRCode value={window.location.href} size={200} />
          </div>
        </section>
      </section>
    </div>
  );
};

export default LevelDetail;
