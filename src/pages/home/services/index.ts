import apiClient from "../../../api/apiClient";

export const getMealsByFirstLetter = async (letter: string) => {
  return await apiClient("get", `/search.php?f=${letter}`);
};

export const getMealsByAreaName = async (areaName: string) => {
  return await apiClient("get", `/filter.php?a=${areaName}`);
};
