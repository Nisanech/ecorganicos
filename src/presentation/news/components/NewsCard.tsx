import Image from 'next/image';

type NewsCardProps = {
  imageSrc: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imageSrc, date, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
      {/* Imagen */}
      <div className="relative h-48 w-full rounded-lg">
        <Image className='rounded-lg' src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">

        <div className='flex flex-col sm:flex-row justify-between'>
          {/* Título */}
          <h3 className="text-medium-green font-kumbh-sans font-semibold text-[16px] pt-4 pb-4">{title}</h3>
          {/* Fecha */}
          <div className="text-sm text-green-600 flex items-center">
          <Image
                      src="/assets/news/icons/calendario-icon.svg"
                      alt="row-icon"
                      width={15}
                      height={10}
                    />
            {date}
          </div>
        </div>

        

        {/* Descripción */}
        <p className="text-gray-700 mt-2 pb-[20px]">{description}</p>

        {/* Botón */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer max-w-[300px] flex gap-4 justify-center font-semibold text-darker-green py-2 px-6 rounded-full border-solid border-2 border-light-green text-light-green hover:bg-[rgba(78,188,87,0.30)] hover:text-dark-green"
        >
          Leer noticia completa
          <Image
                    src="/assets/news/icons/row-inclinated-icon.svg"
                    alt="row-icon"
                    width={13}
                    height={10}
                  />
        </a>
      </div>
    </div>
  );
};

export default NewsCard;