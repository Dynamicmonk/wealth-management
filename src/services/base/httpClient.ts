import axios from "axios";

export const httpClient = (): httpClientTypes => {
  const get = async (input: any) => {
    return await axios.get(input);
  };

  const del = async (input: any) => {
    return await axios.delete(input);
  };

  const post = async ({ url, data }: { url: string; data?: any }) => {
    return await axios.post(url, data ?? "", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return {
    get,
    post,
    del,
  };
};
