"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import FoodDetail from "@/presentation/food/FoodDetail";
import PulpaFrutaCongeladaBanner from "@/presentation/food/food-banners/PulpaFrutaCongeladaBanner";
import DocumentationBanner from "@/presentation/food/DocumentationBanner";

export default function PulpaFrutaCongelada() {
  const foodDetail = useFoodDetail().foodDetail;

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <PulpaFrutaCongeladaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />

      <DocumentationBanner data={foodDetail["technical-data"]} background="bg-light-green" textColor="text-light-green" category="food"  />
    </>

  )
}