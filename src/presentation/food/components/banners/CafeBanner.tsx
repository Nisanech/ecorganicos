import Image from "next/image";

export default function CafeBanner() {
  return (
    <div className={`bg-[url("/assets/food/images/cafe/cafe-banner-background.jpg")] bg-cover bg-no-repeat p-4 w-full md:pl-[60px] py-[60px] lg:h-[500px] pt-[90px]`}>
      <div className={`flex flex-col items-center sm:justify-center md:flex-row justify-between`}>
        <div className={`flex flex-col items-center w-full`}>
          <h1 className={`text-center w-full m-0 font-koulen text-[#622814] text-2xl md:text-4xl lg:text-[40px]`}>
            Cultivado de manera sostenible <br/>

          </h1>
            <span className={`text-center font-pacifico font-normal text-2xl text-eco-black md:text-[36px] md:mt-[30px]`}>
              Nuestro café ofrece una experiencia <br/> rica y aromática en cada taza
            </span>

          <div className={`flex mt-10 items-center gap-5 md:mt-[30px]`}>
            <p className={`font-koulen text-xl text-[#622814] lg:text-3xl`}>Calidades:</p>

            <Image className={`w-[200px] lg:w-[300px] h-auto`} src={"/assets/food/icons/cafe-icon.png"} alt={"Icon Presentación"}
                   width={300} height={100} />
          </div>
        </div>

        <div className={`mt-10 md:mt-0 w-full relative flex flex-col items-center`}>
          <Image className={`md:absolute top-[-107px] right-0 h-auto md:w-[500px] lg:top-[-174px] xl:top-[-163px]`} src={"/assets/food/images/cafe/cafe-banner-product.png"}
                 alt={"Producto"} width={450} height={100} />
        </div>
      </div>
    </div>
  )
}