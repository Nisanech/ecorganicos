"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import FoodDetail from "@/presentation/food/components/FoodDetail";
import PulpaFrutaCongeladaBanner from "@/presentation/food/components/banners/PulpaFrutaCongeladaBanner";

export default function PulpaFrutaCongelada() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <PulpaFrutaCongeladaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />
    </>

  )
}