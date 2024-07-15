import Link from 'next/link';
import { FaHome, FaCompass, FaGraduationCap, FaMicrophoneAlt, FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <nav className="bg-[#2B2B2B] text-[#FFFAFA] fixed bottom-0 w-full z-50 flex justify-around p-3 md:hidden">
        <Link href="/" className="flex flex-col items-center">
          <FaHome className="h-6 w-6" />
          <span className="text-xs">Descobrir</span>
        </Link>
        <Link href="/explorar" className="flex flex-col items-center">
          <FaCompass className="h-6 w-6" />
          <span className="text-xs">Explorar</span>
        </Link>
        <Link href="/cursos" className="flex flex-col items-center">
          <FaGraduationCap className="h-6 w-6" />
          <span className="text-xs">Cursos</span>
        </Link>
        <Link href="/podcasts" className="flex flex-col items-center">
          <FaMicrophoneAlt className="h-6 w-6" />
          <span className="text-xs">Podcasts</span>
        </Link>
        <Link href="/buscar" className="flex flex-col items-center">
          <FaSearch className="h-6 w-6" />
          <span className="text-xs">Buscar</span>
        </Link>
      </nav>
      <div className="bg-[#2B2B2B] text-[#FFFAFA] p-4 text-center mt-auto w-full hidden md:block">
        © 2024 Pra Quem Faz. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
