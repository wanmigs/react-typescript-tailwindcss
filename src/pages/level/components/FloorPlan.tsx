import React, { useEffect, useState } from 'react';
import ReservationModal from './ReservationModal';
import { Floor } from 'models/Floor.model';
import { Workspace } from 'types/Workspace';

/**
 * Definition props of FloorPlan component
 */
interface Props {
  filter: string;
  floor: Floor;
}

const activeClass: {
  [key: string]: string;
} = {
  'View All': 'all',
  'Standing desks': 'standing-desks',
  'Standard desks': 'standard-desks',
};

const FloorPlan: React.FC<Props> = ({ filter = 'View All', floor }) => {
  const [workspace, setWorkspace] = useState<Workspace | null>();

  useEffect(() => {
    const initializeCss = () => {
      floor.workspaces.forEach((workspace) => {
        const chairs = document.querySelectorAll<SVGRectElement>(
          `.workspace-${workspace.id}`
        )!;

        if (!workspace.isAvailable) {
          chairs.forEach((chair) => {
            chair.classList.add('active');
          });
          return;
        }

        chairs.forEach((chair) => {
          chair.setAttribute('data-type', workspace.type);
          chair.onmouseenter = () => {
            updateSyle(chairs, '#9ae6b4');
          };

          chair.onmouseout = () => {
            updateSyle(chairs, '#ebffec');
          };

          chair.onclick = () => {
            if (filter !== 'View All' && chair.dataset.type !== filter) return;
            resetReservation();
            setWorkspace(workspace);
            chairs.forEach((chair) => {
              chair.classList.add('reserve');
            });
          };
        });
      });
    };

    const updateSyle = (
      elements: NodeListOf<SVGRectElement>,
      color: string
    ) => {
      elements.forEach((chair) => {
        chair.style.fill = color;
      });
    };

    initializeCss();
  }, [floor, filter]);

  const handleClose = () => {
    setWorkspace(null);
    resetReservation();
  };

  const resetReservation = () => {
    const chairs = document.querySelectorAll<SVGRectElement>('.reserve')!;
    chairs.forEach((chair) => {
      chair.classList.remove('reserve');
    });
  };

  return (
    <div id="image-map-wrapper" className={activeClass[filter]}>
      <ReservationModal
        level={floor.level}
        workspace={workspace}
        onClose={handleClose}
      />
      <div id="image-map-container">
        <div id="image-map" className="image-mapper">
          <img
            className="w-full"
            src="/images/Floor-Plan.png"
            alt="Floor-Plan"
          />
          <svg
            className="image-mapper-svg"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 449 536"
          >
            <rect
              x="258"
              y="54"
              width="27"
              height="21"
              className="image-mapper-shape standing-chair workspace-6"
            />
            <rect
              x="224"
              y="15"
              width="94"
              height="35"
              className="image-mapper-shape standing-chair workspace-6"
            />
            <rect
              x="383"
              y="325"
              width="20"
              height="26"
              className="image-mapper-shape standing-chair workspace-10"
            />
            <rect
              x="407"
              y="291"
              width="36"
              height="94"
              className="image-mapper-shape standing-chair workspace-10"
            />
            <rect
              x="277"
              y="416"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-21"
            />
            <rect
              x="238"
              y="403"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-21"
            />
            <rect
              x="176"
              y="416"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-12"
            />
            <rect
              x="200"
              y="403"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-12"
            />
            <polygon
              points="80,151,103,137,114,155,91,169"
              className="image-mapper-shape standing-chair workspace-4"
            />
            <polygon
              points="30,137,110,86,129,115,50,167"
              className="image-mapper-shape standing-chair workspace-4"
            />
            <rect
              x="49"
              y="420"
              width="22"
              height="26"
              className="image-mapper-shape standing-chair workspace-1"
            />
            <rect
              x="11"
              y="386"
              width="36"
              height="94"
              className="image-mapper-shape standing-chair workspace-1"
            />
            <rect
              x="50"
              y="318"
              width="21"
              height="26"
              className="image-mapper-shape standing-chair workspace-2"
            />
            <rect
              x="11"
              y="283"
              width="35"
              height="94"
              className="image-mapper-shape standing-chair workspace-2"
            />
            <rect
              x="50"
              y="215"
              width="21"
              height="26"
              className="image-mapper-shape standing-chair workspace-3"
            />
            <rect
              x="11"
              y="181"
              width="35"
              height="94"
              className="image-mapper-shape standing-chair workspace-3"
            />
            <rect
              x="407"
              y="394"
              width="36"
              height="94"
              className="image-mapper-shape standing-chair workspace-11"
            />
            <rect
              x="383"
              y="428"
              width="20"
              height="26"
              className="image-mapper-shape standing-chair workspace-11"
            />
            <rect
              x="407"
              y="189"
              width="36"
              height="94"
              className="image-mapper-shape standing-chair workspace-9"
            />
            <rect
              x="383"
              y="223"
              width="20"
              height="26"
              className="image-mapper-shape standing-chair workspace-9"
            />
            <rect
              x="407"
              y="86"
              width="36"
              height="94"
              className="image-mapper-shape standing-chair workspace-8"
            />
            <rect
              x="383"
              y="120"
              width="20"
              height="26"
              className="image-mapper-shape standing-chair workspace-8"
            />
            <rect
              x="329"
              y="15"
              width="94"
              height="35"
              className="image-mapper-shape standing-chair workspace-7"
            />
            <rect
              x="362"
              y="54"
              width="27"
              height="21"
              className="image-mapper-shape standing-chair workspace-7"
            />
            <rect
              x="200"
              y="348"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-13"
            />
            <rect
              x="176"
              y="361"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-13"
            />
            <rect
              x="200"
              y="293"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-14"
            />
            <rect
              x="176"
              y="306"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-14"
            />
            <rect
              x="200"
              y="238"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-15"
            />
            <rect
              x="176"
              y="251"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-15"
            />
            <rect
              x="200"
              y="182"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-16"
            />
            <rect
              x="176"
              y="196"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-16"
            />
            <rect
              x="238"
              y="348"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-20"
            />
            <rect
              x="277"
              y="361"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-20"
            />
            <rect
              x="238"
              y="293"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-19"
            />
            <rect
              x="277"
              y="306"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-19"
            />
            <rect
              x="238"
              y="238"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-18"
            />
            <rect
              x="277"
              y="251"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-18"
            />
            <rect
              x="238"
              y="182"
              width="35"
              height="53"
              className="image-mapper-shape standard workspace-17"
            />
            <rect
              x="277"
              y="196"
              width="20"
              height="26"
              className="image-mapper-shape standard workspace-17"
            />
            <polygon
              points="194,33,116,82,135,111,212,61"
              className="image-mapper-shape standing-chair workspace-5"
            />
            <polygon
              points="165,96,186,83,196,98,176,111"
              className="image-mapper-shape standing-chair workspace-5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
