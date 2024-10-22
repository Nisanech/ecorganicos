import foodDetail from "./foodDetails.json";
import type { FoodDetails } from "@/domain/entities/food-detail.interface";

export const loadFoodDetail = (): FoodDetails[] => {
  return foodDetail;
};
