import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#2B2B2B] p-4 text-[#FFFAFA] text-center fixed top-0 w-full z-50 h-15 flex items-center">
      <nav className="flex justify-between w-full ml-20 mr-20 items-center">
        <Link href="/"><img src="../images/logo.png" alt="Logo" className="h-7" /></Link>
        <div className="flex space-x-11">
          <h1 className="hover:text-[#FF0055]"><Link href="/">Descobrir</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Explorar</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Cursos</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Podcasts</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Buscar</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Fale Conosco</Link></h1>
        </div>
        <Link legacyBehavior href="/">
          <a href="/"><FaUserCircle size={24}/></a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;