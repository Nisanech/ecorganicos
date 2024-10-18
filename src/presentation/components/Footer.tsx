import Image from "next/image"

export default function Footer() {
  return (
    <>
      <div className="bg-dark-green">
        <div className="flex pt-6 pb-6 pl-12 pr-12  justify-between">
            <div className="flex gap-8 ">
              <Image src="/assets/footer/logos/fedeorganicos-logo-footer.png" alt={"logo-fedeorganicos"} width={140} height={10} ></Image>
              <div className="h-[90] w-[2px] bg-white rounded-full"></div>
              <Image src="/assets/footer/logos/ecorganicos-logo-footer.png" alt={"logo-ecorganicos"} width={140} height={35} ></Image>
            </div>

            <div className="flex gap-12 pr-[150px] text-sm">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neon-green">Interes</p>
                <a href="" className="text-white">Nosotros</a>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-neon-green">Otros</p>
                <a href="" className="text-white">Noticias</a>
                <a href="" className="text-white">Contacto</a>
              </div>
            </div>
        </div>
      </div>

      <div className="bg-light-green flex justify-between pt-2 pb-2 pl-20 pr-20 text-xs text-white">
        <div className="flex gap-2 font-kumbh-sans">
        <p>Información general: </p>
        <p>ecorganicos@gmail.com</p>
        </div>

        <div className="font-kumbh-sans">
          <p>ecorganicos2024©</p>
        </div>
      </div>
    </>
  )
}