export interface FoodDetails {
  id: string;
  category: string;
  productImages: string[];
  productName: string;
  description: string;
  paragraphs?: string[];
  "technical-data": TechnicalData[];
}

export interface TechnicalData {
  title: string;
  url: string;
}