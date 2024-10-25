import NewsCard from "@/presentation/news/components/NewsCard"
import SwiperCarousel from "@/presentation/news/components/SwiperCarousel"


export default function NewsPage() {

    const data = [
        {
          image: "/assets/news/images/connect-americas/connect-americas-1.jpg",
          date: "10 Octubre 2022",
          title: "Lanzamiento connectamericas en Colombia",
          description:
            "Ecorgánicos de Colombia Participamos como invitados especiales contando nuestra experiencia en el Lanzamiento de ConnectAmericas.com en Colombia. ConnectAmericas.com-ecorganicos-02EL pasado martes 12 de mayo del 2015.",
          linkButton: "",
        }
      ];

        
    return (
        <>
        <div>
            <div className="z-10">
                <div className="bg-[url('/assets/home/images/margen-1.png')] bg-no-repeat bg-left-top bg-contain bg-medium-green pb-20  mt-16 w-[100%] pl-[60px] md:pl-44 lg:w-[40%]">
                    <div className="pt-10 [text-shadow:_2px_2px_3px_#000000]">
                        <h3 className="font-kumbh font-semibold text-[30px] text-white">Últimas noticias</h3>
                        <h4 className="font-kumbh font-light text-[18px] text-white">DEL MUNDO ORGÁNICO</h4>
                    </div>
                </div> 
            </div>

            <div className="w-[40%] bg-medium-green h-[100px]" >
            </div>

            <div className="ml-[20px] mr-[20px] p-4 md:ml-[100px] md:mr-[100px]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between bg-white rounded-[20px] mt-[-150px] mb-[50px]">
                
                <div>
            {data.map((newsItem, index) => (
                <NewsCard
                key={index}
              imageSrc={newsItem.image}
              date={newsItem.date}
              title={newsItem.title}
              description={newsItem.description}
              link={newsItem.link}
                />
            ))}

                </div>

                <div className="mt-[180px] pb-[30px]">
                     <SwiperCarousel/>
                </div>

            </div>

            
        </div>
        </>
    )
}