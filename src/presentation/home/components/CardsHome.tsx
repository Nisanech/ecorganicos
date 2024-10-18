import Image from "next/image";

export default function CardsHome() {

    return (
        <>

        <div className="flex gap-[10px]">

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3 mt-[-40px]`}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-13 rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/apple-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Producción Responsable</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Ofrecemos alimentos y materias primas 
                    orgánicas con enfoque en trazabilidad y
                    calidad para garantizar productos saludables 
                    y sostenibles</p>
            </div>
            </div>

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3`}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-13 rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/apple-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Producción Responsable</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Ofrecemos alimentos y materias primas 
                    orgánicas con enfoque en trazabilidad y
                    calidad para garantizar productos saludables 
                    y sostenibles</p>
            </div>
            </div>

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3`}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-13 rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/apple-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Producción Responsable</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Ofrecemos alimentos y materias primas 
                    orgánicas con enfoque en trazabilidad y
                    calidad para garantizar productos saludables 
                    y sostenibles</p>
            </div>
            </div>

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3 mt-[-40px]`}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-13 rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/apple-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Producción Responsable</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Ofrecemos alimentos y materias primas 
                    orgánicas con enfoque en trazabilidad y
                    calidad para garantizar productos saludables 
                    y sostenibles</p>
            </div>
            </div>

        </div>
        </>
    )
}