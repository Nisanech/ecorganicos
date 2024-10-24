import { useState } from "react";
import Image from "next/image";
import { PopularProducts as PopularProductsInterface } from "@/domain/entities/popular-products.interface";

interface PopularProductsProps {
  data: PopularProductsInterface[];
}
const ProductCard = ({ product }: { product: PopularProductsInterface }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image
      src={product.productImage}
      alt={product.productName}
      className="w-full h-40 object-cover"
      width={200}
      height={160}
    />
    <div className="p-4 border-t-8 border-light-green">
      <h3 className="font-semibold text-lg mb-1 text-darker-green font-kumbh">
        {product.productName}
      </h3>
      <p className="text-light-green font-kumbh font-normal">
        {product.category}
      </p>
    </div>
  </div>
);

export default function PopularProducts({ data }: PopularProductsProps) {
  const [startIndex, setStartIndex] = useState(0);

  const nextProducts = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 4));
  };

  const prevProducts = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      <div className="bg-eco-white p-6">
        <div className="pl-20 pr-[50px]">
          <h2 className="text-2xl font-kumbh font-bold mb-6 text-darker-green flex items-center gap-4">
            <Image
              src="/assets/common/icons/vineta-icon.svg"
              alt="row-icon"
              width={15}
              height={10}
            />
            Otros productos populares
          </h2>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${startIndex * 25}%)`,
                }}
              >
                {data.map((product) => (
                  <div
                    key={product.id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-2"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
            {startIndex > 0 && (
              <button
                onClick={prevProducts}
                className="rotate-90 absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous products"
              >
                <Image
                  src={"/assets/common/icons/row-menu-icon.svg"}
                  alt={"Icon"}
                  width={25}
                  height={25}
                />
              </button>
            )}
            {startIndex < data.length - 4 && (
              <button
                onClick={nextProducts}
                className="-rotate-90 absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next products"
              >
                <Image
                  src={"/assets/common/icons/row-menu-icon.svg"}
                  alt={"Icon"}
                  width={25}
                  height={25}
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
