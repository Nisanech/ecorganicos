"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface MenuItems {
  name: string;
  href: string;
  items: string[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('Español');

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  }

  const languages = ['Español', 'English', 'Korean'];

  const menuItems: MenuItems[] = [
    {
      name: "Alimentos",
      href: "/food",
      items: ["Panela orgánica", "Frutas deshidratadas", "Pulpa de fruta pasteurizada", "Pulpa de fruta congelada", "Cafe", "Miel de yacón"]
    },
    {
      name: "Materias primas",
      href: "/raw-materials",
      items: ["Extracto de ipecacuana", "Miel invertida de caña"]
    },
  ]

  return (
    <>
      <header className={`w-full bg-white`}>
        {/* Top bar */}
        <div className={`w-full bg-light-gray h-10`}>
          <div className={`container mx-auto px-4`}>
            <div className={`hidden sm:flex justify-between items-center`}>
              {/* Contact information */}
              <div className={`flex items-center gap-20 mt-2.5`}>
                <p className={`m-0 font-jaldi text-[14px] text-dark-gray`}>
                  <span className={`font-bold`}>Ventas:</span>
                  Luis.betancur@ecorganicosdecolombia.com
                </p>

                <p className={`m-0 font-jaldi text-[14px] text-dark-gray`}>
                  <span className={`font-bold`}>Información general:</span>
                  ecorganicos@gmail.com
                </p>
              </div>

              {/* Languages */}
              <div className={`flex justify-center`}>
                <div className={`absolute`}>
                  <Image src={`assets/common/icons/background-language.svg`} alt={`row`} width={300} height={40} />
                </div>

                <button className={`relative top-1.5 flex items-center gap-4 focus:outline-none`} onClick={() => toggleDropdown('language')}>
                  <Image src={`assets/common/icons/flag-spanish.svg`} alt={`Spanish`} width={20} height={20} />

                  <span className={`text-eco-white font-jaldi font-normal`}>{currentLanguage}</span>

                  <Image src={`assets/common/icons/row-white-menu-icon.svg`} alt={`row`} width={13} height={13} />
                </button>

                {/* Languages dropdown */}
                {openDropdown === 'language' && (
                  <div className={`absolute right-0 z-10 w-40 py-2 mt-2 bg-eco-white rounded-md shadow-xl`}>
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLanguage(lang)
                          toggleDropdown('language')
                        }}
                        className={`block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-200`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Container */}
        <div className={`w-full`}>
          <div className={`container mx-auto px-4`}>
            {/* Main header */}
            <div className={`flex justify-between items-center py-4`}>
              <Link href={``}>
                <Image src={`/assets/common/images/logo-ecogarnanicos-horizontal.png`}
                       alt={`Ecorganicos de Colombia logo`} width={160} height={70} />
              </Link>

              {/* Desktop menu */}
              <nav className={`hidden lg:flex items-center justify-between space-x-6`}>
                <Link href="/" className={`font-jaldi font-bold text-[20px] text-dark-gray`}>Nosotros</Link>

                {menuItems.map((item) => (
                  <div key={item.name} className={`relative group`}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center m-0 p-0 gap-2 font-jaldi font-bold text-[20px] text-dark-gray focus:outline-none"
                    >
                      {item.name}
                      <Image src={`assets/common/icons/row-menu-icon.svg`} alt={`row`} width={13} height={13} />
                    </button>

                    {openDropdown === item.name && (
                      <div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`${item.href}/${subItem.toLowerCase()}`}
                            className="block px-4 py-2 font-jaldi font-bold text-[20px] text-dark-gray hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link href="/noticias" className="font-jaldi font-bold text-[20px] text-dark-gray">Noticias</Link>

                <Link href="/contacto" className="font-jaldi font-bold text-[20px] text-dark-gray">Contacto</Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}