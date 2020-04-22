import React, { useEffect, useState, useCallback } from 'react';
import { Floor } from 'models/Floor.model';
import { useParams, useHistory } from 'react-router-dom';
import { getFloorById } from 'services/Floor';
import LevelDetail from './components/LevelDetails';
import FloorPlan from './components/FloorPlan';
import 'dist/css/level.scss';
import { Head } from 'components/Head';

const Level: React.FC = () => {
  const [floor, setFloor] = useState<Floor | undefined | null>();
  const [selectedOption, setSelectedOption] = useState<string>('View All');
  const options: string[] = ['Standard desks', 'Standing desks', 'View All'];
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getFloorById(+(id || '')).then((data) => {
      if (!data) {
        history.push('/');
        return;
      }

      setFloor(data);
    });
  }, [history, id]);

  const onSelect = useCallback((option: string) => {
    setSelectedOption(option);
  }, []);

  if (!floor) {
    return null;
  }

  return (
    <React.Fragment>
      <Head title={floor.level} />

      <section style={{ ['--data-floor-count' as any]: 21 }}>
        <LevelDetail floor={floor} />
        <section className="flex flex-col mx-4 p-6 ">
          <div className="flex justify-center">
            {options.map((option, key) => (
              <button
                key={key}
                className={`border-2 mx-2 px-3 py-2 rounded-full font-semibold hover:border-primary focus:outine-none text-white
                  ${selectedOption === option ? 'shadow-lg border-primary' : ''}
                `}
                onClick={() => onSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <span className="font-semibold mt-4 text-center text-gray-500 mb-8 select-none">
            Click on a desk to select it
          </span>
          <FloorPlan filter={selectedOption} floor={floor} />
        </section>
      </section>
    </React.Fragment>
  );
};

export default Level;
