import { useQuery } from "@tanstack/react-query";
import { getMealsByAreaName, getMealsByFirstLetter } from "../services";
import { TMealResponse } from "../models";

export const useGetMealsByFirstLetter = (letter: string) => {
  return useQuery<TMealResponse>({
    queryKey: ["meals", "first_letter", letter],
    queryFn: async () => {
      return getMealsByFirstLetter(letter);
    },
  });
};

export const useGetMealsByAreaName = (areaName: string) => {
  return useQuery<TMealResponse>({
    queryKey: ["meals", "area", areaName],
    queryFn: async () => {
      return getMealsByAreaName(areaName);
    },
  });
};
