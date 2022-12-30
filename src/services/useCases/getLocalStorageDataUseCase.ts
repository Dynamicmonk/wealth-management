import { localStorage } from "../base/localStorage";

export const getLocalStorageDataUseCase = (key: string): string => {
  const { getData } = localStorage();
  return getData(key);
};
