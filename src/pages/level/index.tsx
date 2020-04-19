import React, { useEffect, useState } from "react";
import { Floor } from "models/Floor.model";
import { useParams, useHistory } from "react-router-dom";
import { getFloorById } from "services/Floor";
import LevelDetail from "./components/LevelDetails";

const Level: React.FC = () => {
  const [floor, setFloor] = useState<Floor | undefined | null>();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getFloorById(+(id || "")).then((data) => {
      if (!data) {
        history.push("/");
        return;
      }

      setFloor(data);
    });
  }, [history, id]);

  if (!floor) {
    return null;
  }

  return (
    <section className="max-w-2xl mx-auto">
      <LevelDetail floor={floor} />
      <section className="bg-white flex flex-col mx-4 p-6 ">
        <div className="flex justify-center">
          <button className="border-green-500 mx-2 px-3 py-2 rounded-full font-semibold hover:bg-gray-200">
            Standard desks
          </button>
          <button className="bg-gray-100 border-2 border-green-500 mx-2 px-3 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200">
            Standing desks
          </button>
          <button className="border-green-500 mx-2 px-3 py-2 rounded-full font-semibold hover:bg-gray-200">
            View All
          </button>
        </div>
        <span className="font-semibold mt-4 text-center text-gray-500">
          Click on a desk to select it
        </span>
      </section>
    </section>
  );
};

export default Level;
