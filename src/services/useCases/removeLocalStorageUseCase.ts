import { localStorage } from "../base/localStorage";

export const removeLocalStorageDataUseCase = (key: string): void => {
  const { removeData } = localStorage();
  return removeData(key);
};
