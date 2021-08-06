import { APIResponse } from '../types/interface';

export const fetchCovidData = async (): Promise<APIResponse> => {
  const res = await fetch(`https://api.covid19api.com/summary`);
  const data = await res.json();
  return data;
};
