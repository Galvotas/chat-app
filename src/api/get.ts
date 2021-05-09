import axios, { AxiosResponse } from "axios";

export const handleGetRequest = async <T>(
  url: string,
  endpoint?: string
): Promise<T> => {
  const { data }: AxiosResponse<T> = await axios({
    method: "GET",
    url: url + endpoint,
  });

  return data;
};

export enum URLS {
  ALL_COUNTRIES = "https://restcountries.eu/rest/v2/all?fields=name;lantlng",
}
