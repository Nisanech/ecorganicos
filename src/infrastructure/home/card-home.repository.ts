import cardHomeData from "./cardHomeData.json"
import type { CardHome } from "@/domain/entities/card-home.interface";

export const loadCardHomeData = (): CardHome[] => {
  console.log("Load Card Home Data", cardHomeData);
  return cardHomeData
}