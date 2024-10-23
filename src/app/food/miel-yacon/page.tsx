"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import MielYaconBanner from "@/presentation/food/food-banners/MielYaconBanner";
import FoodDetail from "@/presentation/food/FoodDetail";

export default function MielYacon() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }
  return (
    <>
      <MielYaconBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />
    </>
  )
}