import Image from "next/image";

export default function CardsHome() {

    return (
        <>

        <div className=" grid grid-cols-1 grid-rows-2 mt-[450px] gap-4 md:grid-cols-2 md:grid-rows-2 md:mt-[40px] lg:grid-cols-3 xl:mt-[40px] xl:flex xl:gap-[10px]">

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3 `}>
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
                <div className={`w-10 h-[40px] rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/productos-icon-blanco.svg" alt="Icono-green-apple" width={25} height={40} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Diversidad de Productos</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Comercializamos una variedad de productos como panela, frutas deshidratadas, pulpas y café orgánico, adaptándonos a las necesidades del mercado.</p>
            </div>
            </div>

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3`}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-[40px] rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/consultoria-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Consultoría Especializada</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Ofrecemos alimentos y materias primas 
                orgánicas con enfoque en trazabilidad y
                calidad para garantizar productos saludables 
                y sostenibles</p>
            </div>
            </div>

            <div>
            <div className={`bg-eco-white flex flex-col justify-center w-[310px] border-2 border-medium-gray rounded-xl p-3 `}>
                <div className={`flex items-center gap-5`}>
                <div className={`w-10 h-[40px] rounded-full p-1 m-0 bg-medium-green flex items-center justify-center`}>
                    <Image src="/assets/home/icons/naturaleza-icon-blanco.svg" alt="Icono-green-apple" width={25} height={35} />
                </div>

                <p className="text-darker-green w-fit font-kumbh-sans font-semibold text-[16px]">Compromiso con la Naturaleza</p>
                </div>

                <p className={`font-kumbh-sans font-normal text-[12px] line-clamp-4 leading-relaxed text-dark-green mt-3 text-center`}>Trabajamos con materias primas naturales, cuidando cada etapa del proceso para preservar la esencia de la biodiversidad colombiana</p>
            </div>
            </div>

        </div>
        </>
    )
}