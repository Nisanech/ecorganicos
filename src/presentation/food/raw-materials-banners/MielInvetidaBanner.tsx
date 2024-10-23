export default function MielInvetidaBanner() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 w-1/2 h-full bg-[url('/assets/raw-materials/images/miel/miel-banner-background.jpg')] bg-left bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FEFFE9] via-[#FEFFE9]/10 w-full h-full"
             style={{ right: '-25%' }}></div>
      </div>

      <div className="absolute right-0 w-1/2 h-full bg-[#FEFFE9]"></div>

      <div className="relative h-full w-full container mx-auto px-4 flex items-center justify-end">
        <div className="w-1/2 text-center space-y-6">
          <h1 className="font-kreon font-normal text-[#622814] text-3xl md:text-4xl lg:text-5xl leading-tight">
            La miel de caña invertida <br/> ofrece una dulzura única y <br/> más fácil de asimilar
          </h1>
          <p className="font-new-tegomin text-[#A36752] text-lg md:text-xl lg:text-2xl leading-relaxed">
            Ideal como alternativa natural al azúcar, <br/> aporta energía rápida con un delicioso sabor <br/> a caña
          </p>
        </div>
      </div>
    </div>

  )
}