import cardHomeData from "./cardHomeData.json"
import type { CardHome } from "@/domain/entities/card-home.interface";

export const loadCardHomeData = (): CardHome[] => {
  return cardHomeData
}