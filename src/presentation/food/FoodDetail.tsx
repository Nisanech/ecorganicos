import Image from "next/image";
import { useState } from "react";

import type { FoodDetails } from "@/domain/entities/food-detail.interface";

interface NavigationButton {
  prevThumbnails: () => void;
  nextThumbnails: () => void;
  startIndex: number;
  responsive: "mobile" | "desktop";
  productImages: string[]
}

interface ThumbnailCarousel {
  productImg: string[];
  startIndex: number;
  currentImage: number;
  handleThumbnailClick: (index: number) => void;
  responsive: "mobile" | "desktop";
}

interface FoodDetailProps {
  data: FoodDetails;
  background: string;
}

const NavigationButtons = ({
  prevThumbnails,
  nextThumbnails,
  startIndex,
  responsive,
  productImages
}: NavigationButton) => (
  <div
    className={`${responsive === "mobile" ? "mt-5 md:hidden max-w-[360px] mx-auto" : "mt-5 hidden md:block w-full"}`}
  >
    <div
      className={`flex ${responsive === "mobile" ? "justify-center" : "justify-end"} gap-4 mb-4`}
    >
      <button
        className={`rounded-full mr-2`}
        onClick={prevThumbnails}
        disabled={startIndex === 0}
      >
        <div
          className={`rounded-full p-2 w-8 h-8 flex items-center justify-center rotate-90 ${startIndex === 0 ? "bg-medium-gray" : "bg-medium-green"}`}
        >
          <Image
            src={"/assets/common/icons/row-white-menu-icon.svg"}
            alt={"Icon"}
            width={25}
            height={25}
          />
        </div>
      </button>

      <button
        className={`rounded-full mr-2`}
        onClick={nextThumbnails}
        disabled={startIndex >= productImages.length - 4}
      >
        <div
          className={`rounded-full p-2 w-7 h-7 flex items-center justify-center -rotate-90 ${startIndex >= productImages.length - 4 ? "bg-medium-gray" : "bg-medium-green"}`}
        >
          <Image
            src={"/assets/common/icons/row-white-menu-icon.svg"}
            alt={"Icon"}
            width={25}
            height={25}
          />
        </div>
      </button>
    </div>
  </div>
);

const ThumbnailCarousel = ({
  productImg,
  startIndex,
  currentImage,
  handleThumbnailClick,
  responsive,
}: ThumbnailCarousel) => (
  <div
    className={`${responsive === "mobile" ? "flex gap-2 overflow-x-auto p-2 justify-center" : "flex gap-5 overflow-x-hidden p-2 w-full"}`}
  >
    {productImg.slice(startIndex, startIndex + 4).map((img, index) => (
      <button
        key={startIndex + index}
        onClick={() => handleThumbnailClick(startIndex + index)}
        className={`relative border-2 bg-eco-white border-[#e9e9e9] flex-shrink-0 rounded-md ${responsive === "mobile" ? "w-[80px] h-[80px] overflow-x-hidden" : "w-1/4 aspect-square overflow-hidden"} ${currentImage === startIndex + index ? "ring-2 ring-medium-green" : ""}`}
      >
        {responsive === "mobile" ? (
          <Image
            src={img}
            alt={`Miniatura ${startIndex + index + 1}`}
            width={80}
            height={80}
            className={`object-contain w-full h-full`}
          />
        ) : (
          <Image
            src={img}
            alt={`Miniatura ${startIndex + index + 1}`}
            layout="fill"
            objectFit="contain"
          />
        )}
      </button>
    ))}
  </div>
);

export default function FoodDetail({data, background}: FoodDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const prevThumbnails = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const nextThumbnails = () => {
    setStartIndex((prevIndex) =>
      Math.min(data.productImages.length - 4, prevIndex + 1)
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <>
      <main className={`${background} w-full md:mt-[45px]`}>
        <div className={`px-1 py-6 md:mx-[20px] md:py-10 lg:py-20`}>
          <div className={`grid gap-4 md:grid-cols-2 md:gap-10 lg:gap-0`}>
            <div className={`order-1 md:order-1`}>
              <div
                className={`relative rounded-lg border-2 border-[#4EBC57] w-full max-w-[400px] h-auto bg-eco-white mx-auto`}
              >
                <Image
                  className={`object-contain h-full w-full`}
                  src={data.productImages[currentImage]}
                  alt={`Producto ${currentImage + 1}`}
                  width={400}
                  height={500}
                />
              </div>

              {/* Mobile Navigation of carousel */}
              <div className={`mt-5 md:hidden max-w-[360px] mx-auto`}>
                <NavigationButtons
                  prevThumbnails={prevThumbnails}
                  nextThumbnails={nextThumbnails}
                  startIndex={startIndex}
                  responsive={"mobile"}
                  productImages={data.productImages}
                />

                {/* Mobile carousel */}
                <ThumbnailCarousel
                  productImg={data.productImages}
                  startIndex={startIndex}
                  currentImage={currentImage}
                  handleThumbnailClick={handleThumbnailClick}
                  responsive={"mobile"}
                />
              </div>
            </div>

            <div
              className={`order-2 md:order-2 px-4 flex flex-col justify-between w-[90%]`}
            >
              <div className={`w-full`}>
                <h2
                  className={`font-kumbh text-xl text-darker-green font-semibold md:text-2xl lg:text-3xl`}
                >
                  {data.productName}
                </h2>

                <div className={`flex gap-3 my-7 items-center`}>
                  <Image
                    src={"/assets/common/icons/vineta-icon.svg"}
                    alt={"Icono"}
                    width={20}
                    height={35}
                  />

                  <h3
                    className={`font-kumbh text-xl text-darker-green font-semibold lg:text-2xl`}
                  >
                    Descripción
                  </h3>
                </div>

                <div className={`flex flex-col gap-7`}>
                  {
                    data.paragraphs?.map((paragraph: string) => (
                      <p
                        key={paragraph}
                        className={`font-kumbh text-[14px] text-eco-black font-normal lg:text-[16px]`}
                      >
                        {paragraph}
                      </p>
                    ))
                  }
                </div>
              </div>

              {/* Desktop Navigation of carousel */}
              <div className={`mt-5 hidden md:block w-full`}>
                <NavigationButtons
                  prevThumbnails={prevThumbnails}
                  nextThumbnails={nextThumbnails}
                  startIndex={startIndex}
                  responsive={"desktop"}
                  productImages={data.productImages}
                />

                {/* Desktop carousel */}
                <ThumbnailCarousel
                  productImg={data.productImages}
                  startIndex={startIndex}
                  currentImage={currentImage}
                  handleThumbnailClick={handleThumbnailClick}
                  responsive={"desktop"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
