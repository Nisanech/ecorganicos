"use client";

import { useFoodDetail } from "@/shared/hooks/useFoodDetail";
import RaizIpecacuanaBanner from "@/presentation/food/raw-materials-banners/RaizIpecacuanaBanner";
import FoodDetail from "@/presentation/food/FoodDetail";

export default function ExtractoIpecacuana() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }
  return (
    <>
      <RaizIpecacuanaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#FEFFE9]"} />
    </>
  )
}