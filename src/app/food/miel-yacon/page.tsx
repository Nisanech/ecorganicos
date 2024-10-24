"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import MielYaconBanner from "@/presentation/food/food-banners/MielYaconBanner";
import FoodDetail from "@/presentation/food/FoodDetail";
import DocumentationBanner from "@/presentation/food/DocumentationBanner";

export default function MielYacon() {
  const foodDetail = useFoodDetail().foodDetail;
  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }
  return (
    <>
      <MielYaconBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />

      <DocumentationBanner data={foodDetail["technical-data"]} background="bg-light-green" textColor="text-light-green" category="food"  />
    </>
  )
}