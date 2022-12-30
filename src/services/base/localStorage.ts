export const localStorage = (): localStorageTypes => {
  const getData = (key: string): string => {
    return window.localStorage.getItem(key) ?? "";
  };

  const setData = (key: string, data: string) => {
    return window.localStorage.setItem(key, data);
  };

  const removeData = (key: string) => {
    return window.localStorage.removeItem(key);
  };

  return { getData, setData, removeData };
};
