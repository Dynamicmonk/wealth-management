import { localStorage } from "../base/localStorage";

export const setLocalStorageDataUseCase = (key: string, data: string): void => {
  const { setData } = localStorage();
  return setData(key, data);
};
