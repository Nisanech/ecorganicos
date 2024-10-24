import { TechnicalData } from "@/domain/entities/food-detail.interface";
import Image from "next/image";

interface TechnicalSheetProps {
  data?: TechnicalData[];
  background?: string;
  textColor?: string;
  category?: "food" | "raw-material";
}

export default function DocumentationBanner({
  data,
  background,
  textColor,
  category,
}: TechnicalSheetProps) {

  const openSheet = (url: string) => {
    window.open(url, "_blank");
  }

  return (
    <>
      <div className={`w-full ${background} p-4 md:p-12`}>
        <div className="w-full mx-auto">
          <div className="flex flex-col items-center gap-4 lg:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex gap-4">
              <Image
                src="/assets/common/icons/vineta-white-icon.svg"
                alt="row-icon"
                width={15}
                height={10}
              />
              <h2 className="text-white text-lg font-semibold flex items-center">
                Fichas técnicas
              </h2>
            </div>

            <div className="w-[70%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((sheet, index) => (
                  <button
                    key={index}
                    className={`bg-eco-white font-kumbh ${textColor} px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center hover:bg-green-100 transition-colors duration-200 shadow-md hover:scale-110`}
                    onClick={() => openSheet(sheet.url)}
                  >
                    {sheet.title}
                    {category === "food" && (
                      <Image
                        src="/assets/common/icons/row-green-inclinated-icon.svg"
                        alt="row-icon"
                        width={10}
                        height={10}
                        className="ml-4"
                      />
                    )}

                    {category === "raw-material" && (
                      <Image
                        src="/assets/common/icons/row-orange-inclinated-icon.svg"
                        alt="row-icon"
                        width={10}
                        height={10}
                        className="ml-4"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
