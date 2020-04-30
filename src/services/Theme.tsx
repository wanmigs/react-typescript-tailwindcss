import { axios } from 'utilities/Axios';
import { Theme } from 'models/Theme.model';

/**
 * Get Theme by name
 * @param key The theme name.
 */
export const getThemeByName = async (key: string): Promise<Theme> => {
  const { data } = await axios.get('/data/themes.json');

  if (key in data) {
    return data[key];
  }

  return data.default;
};
