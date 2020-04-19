import { axios } from "utilities/Axios";
import { Floor } from "models/Floor.model";

/**
 * Get all floors data
 */
export const getFloors = async (): Promise<Floor[]> => {
  const { data } = await axios.get("/data/floors.json");
  return data;
};

/**
 * Get Floor by id
 * @param id The floor id.
 */
export const getFloorById = async (id: number): Promise<Floor> => {
  const { data } = await axios.get("/data/floors.json");
  return data.filter((floor: { id: number }) => floor.id === id)[0] || null;
};
