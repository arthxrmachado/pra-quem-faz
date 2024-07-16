import Link from 'next/link';
import { FaHome, FaCompass, FaGraduationCap, FaMicrophoneAlt, FaSearch } from "react-icons/fa";

const footerItems = [
  { name: "Descobrir", link: "/", icon: FaHome },
  { name: "Explorar", link: "/explorar", icon: FaCompass },
  { name: "Cursos", link: "/cursos", icon: FaGraduationCap },
  { name: "Podcasts", link: "/podcasts", icon: FaMicrophoneAlt },
  { name: "Buscar", link: "/buscar", icon: FaSearch },
];

const Footer = () => {
  return (
    <footer>
      <nav className="bg-[#2B2B2B] text-[#FFFAFA] fixed bottom-0 w-full z-50 flex justify-around p-3 md:hidden">
        {footerItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.link} className="flex flex-col items-center">
              <Icon className="h-6 w-6" />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="bg-[#2B2B2B] text-[#FFFAFA] p-4 text-center mt-auto w-full hidden md:block">
        © 2024 Pra Quem Faz. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
