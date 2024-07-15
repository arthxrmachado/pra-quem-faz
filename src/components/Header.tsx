import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="bg-[#2B2B2B] p-4 text-[#FFFAFA] fixed top-0 w-full z-50 h-15 flex items-center justify-center space-x-10">
        <Link href="/" legacyBehavior>
          <a><img src="../images/logo.png" alt="Logo" className="h-7" /></a>
        </Link>
        <div className="hidden md:flex space-x-10">
          <h1 className="hover:text-[#FF0055]"><Link href="/">Descobrir</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Explorar</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Cursos</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Podcasts</Link></h1>
          <h1 className="hover:text-[#FF0055]"><Link href="/">Buscar</Link></h1>
        </div>
        <Link href="/login" legacyBehavior>
          <a><FaUserCircle size={24} className="text-[#FFFAFA]" /></a>
        </Link>
      </header>
    </>
  );
};

export default Header;
