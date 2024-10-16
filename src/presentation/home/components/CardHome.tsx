import Image from "next/image";

import { loadCardHomeData } from "@/infrastructure/home/card-home.repository";
import type { CardHome } from "@/domain/entities/card-home.interface";

const Card: React.FC<{ data: CardHome }> = ({ data }) => {
  return (
    <>
      <div className={`bg-eco-white flex flex-col justify-center w-[300px] border-2 border-medium-gray rounded-xl p-3`}>
        <div className={`flex items-center gap-5`}>
          <div className={`w-13 h-13 rounded-full p-3 m-0 bg-medium-green flex items-center justify-center`}>
            <Image src={`./assets/home/icons/${data.icon}`} alt={"Icono"} width={35} height={35} />
          </div>

          <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">{data.title}</p>
        </div>

        <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Description {data.description}</p>
      </div>
    </>
  );
}

export default function CardHome() {
  const cardItems: CardHome[] = loadCardHomeData()

  return (
    <>
      <div className={`flex gap-2`}>
        {cardItems.map((card) => (
          <Card data={card} key={card.id} />
        ))}
      </div>
    </>
  )
}