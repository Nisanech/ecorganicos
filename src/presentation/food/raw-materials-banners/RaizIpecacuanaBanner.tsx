export default function RaizIpecacuanaBanner() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 w-1/2 h-full bg-[url('/assets/raw-materials/images/raiz-ipecacuana/ipeca-banner-background.jpg')] bg-left bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FEFFE9] via-[#FEFFE9]/10 w-full h-full"
             style={{ right: '-25%' }}></div>
      </div>

      <div className="absolute right-0 w-1/2 h-full bg-[#FEFFE9]"></div>

      <div className="relative h-full w-full container mx-auto px-4 flex items-center justify-end">
        <div className="w-1/2 text-center space-y-6">
          <h1 className="font-kreon font-normal text-[#622814] text-3xl md:text-4xl lg:text-5xl leading-tight">
            Propiedades<br />
            expectorantes y eméticas
          </h1>
          <p className="font-new-tegomin text-[#A36752] text-lg md:text-xl lg:text-2xl leading-relaxed">
            La raíz de ipecacuana es un recurso natural <br /> ideal para apoyar la salud respiratoria de <br /> manera
            orgánica
          </p>
        </div>
      </div>
    </div>

  )
}