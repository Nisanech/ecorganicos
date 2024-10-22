"use client";

import FoodDetail from "@/presentation/food/components/FoodDetail";
import DocumentationBanner from "@/presentation/food/components/DocumentationBanner";
import ProductsCarousel from "@/presentation/food/components/ProductsCarousel";
import PanelaOrganicaBanner from "@/presentation/food/components/banners/PanelaOrganicaBanner";
import { useFoodDetail } from "@/shared/hooks/useFoodDetail";

export default function PanelaOrganica() {
  const foodDetail = useFoodDetail();

  if (!foodDetail) {
    return <div>Producto no encontrado o cargando...</div>;
  }

  return (
    <>
      <PanelaOrganicaBanner />

      <FoodDetail data={foodDetail} background={"bg-[#4EBC57]/15"} />

      <DocumentationBanner />

      <ProductsCarousel />
    </>
  )
}