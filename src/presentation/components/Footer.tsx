import Image from "next/image"

export default function Footer() {
  return (
    <>
      <div className="bg-dark-green">
        <div className="flex pt-6 pb-6 pl-12 pr-12  justify-between">
            <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-8">
              <Image src="/assets/footer/logos/fedeorganicos-logo-footer.png" alt={"logo-fedeorganicos"} width={140} height={10} ></Image>
              <div className="w-[90] bg-white h-[1px] md:h-[70px] md:w-[2px] md:rounded-full"></div>
              <Image src="/assets/footer/logos/ecorganicos-logo-footer.png" alt={"logo-ecorganicos"} width={140} height={35} ></Image>
            </div>

            <div className=" text-sm md:flex md:gap-12 md:pr-[150px] ">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neon-green">Interes</p>
                <a href="" className="text-white">Nosotros</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neon-green">Otros</p>
                <a href="/news" className="text-white">Noticias</a>
                <a href="/contact" className="text-white">Contacto</a>
              </div>
            </div>
        </div>
      </div>

      <div className="bg-light-green flex items-center flex-col text-xs text-white pt-2 b-2 md:justify-between md:flex md:flex-row md:pt-2 md:pb-2 md:pl-20 md:pr-20 ">
        <div className="font-kumbh-sans flex gap-2 md:flex md:gap-2">
        <p>Información general:  </p>
        <p>ecorganicos@gmail.com</p>
        </div>

        <div className="font-kumbh-sans">
          <p>ecorganicos2024©</p>
        </div>
      </div>
    </>
  )
}