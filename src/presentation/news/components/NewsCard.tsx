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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Imagen */}
      <div className="relative h-48 w-full">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        {/* Fecha */}
        <div className="text-sm text-green-600 flex items-center">
          <svg
            className="w-4 h-4 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm5 8a1 1 0 10-2 0v2a1 1 0 002 0v-2zm-1 9a7 7 0 100-14 7 7 0 000 14z"
              clipRule="evenodd"
            />
          </svg>
          {date}
        </div>

        {/* Título */}
        <h3 className="text-lg font-semibold text-gray-900 mt-2">{title}</h3>

        {/* Descripción */}
        <p className="text-gray-700 mt-2">{description}</p>

        {/* Botón */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors"
        >
          Leer noticia completa
          <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;