import Image from "next/image";

import { loadCardHomeData } from "@/infrastructure/home/card-home.repository";
import type { CardHome } from "@/domain/entities/card-home.interface";

const Card: React.FC<{ data: CardHome }> = ({ data }) => {
  const cardMarginClass = (data.id === 1 || data.id === 4) ? 'mt-[-40px]' : 'mt-0';

  return (
    <>
      <div>
        <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3 lg:${cardMarginClass}`}>
          <div className={`flex items-center gap-5`}>
            <div className={`w-10 h-13 rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
              <Image src={`./assets/home/icons/${data.icon}`} alt={"Icono"} width={25} height={35} />
            </div>

            <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">
              {data.title}
            </p>
          </div>

          <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>
            Description {data.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default function CardHome() {
  const cardItems: CardHome[] = loadCardHomeData();

  return (
    <>
      <div className={`grid grid-cols-1 grid-rows-2 mt-[450px] gap-4 md:grid-cols-2 md:grid-rows-2 md:mt-[40px] lg:grid-cols-3 xl:mt-[40px] xl:flex xl:gap-[10px]`}>
        {cardItems.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  );
}
