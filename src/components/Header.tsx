import Link from 'next/link';
import { FaUserCircle, FaHome, FaCompass, FaGraduationCap, FaPodcast, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-[#2B2B2B] p-4 text-[#FFFAFA] fixed top-0 w-full z-50 h-15 flex items-center justify-between md:justify-around">
        <Link legacyBehavior href="/">
          <img src="../images/logo.png" alt="Logo" className="h-7 ml-4" />
        </Link>
        <div className="hidden md:flex space-x-10">
          <h1 className="hover:text-[#FF0055]"><Link href="/">Descobrir</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Explorar</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Cursos</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Podcasts</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Buscar</Link></h1>
        </div>
        <Link legacyBehavior href="/login">
          <a><FaUserCircle size={24} className="text-[#FFFAFA] mr-4" /></a>
        </Link>
      </header>

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
          <FaPodcast className="h-6 w-6" />
          <span className="text-xs">Podcasts</span>
        </Link>
        <Link href="/buscar" className="flex flex-col items-center">
          <FaSearch className="h-6 w-6" />
          <span className="text-xs">Buscar</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;