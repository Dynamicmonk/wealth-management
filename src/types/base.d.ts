interface httpClientTypes {
  get: (input: any) => Promise<AxiosResponse<any, any>>;
  del: (input: any) => Promise<AxiosResponse<any, any>>;
  post: ({
    url,
    data,
  }: {
    url: string;
    data?: any;
  }) => Promise<AxiosResponse<any, any>>;
}

interface localStorageTypes {
  setData: (key: string, data: string) => void;
  getData: (key: string) => string;
  removeData: (key: string) => void;
}
