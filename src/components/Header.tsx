import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";

const menuItems = [
  { name: "Descobrir", link: "/" },
  { name: "Explorar", link: "/" },
  { name: "Cursos", link: "/" },
  { name: "Podcasts", link: "/" },
  { name: "Buscar", link: "/" },
];

const Header = () => {
  return (
    <>
      <header className="bg-[#2B2B2B] p-4 text-[#FFFAFA] fixed top-0 w-full z-50 h-15 flex items-center justify-between md:justify-center space-x-10">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <img src="../images/logo.png" alt="Logo" className="h-7" />
          </a>
        </Link>
        <div className="hidden md:flex space-x-10">
          {menuItems.map((item) => (
            <h1 key={item.name} className="hover:text-[#FF0055]">
              <Link href={item.link}>{item.name}</Link>
            </h1>
          ))}
        </div>
        <Link href="/login" legacyBehavior>
          <a className="flex items-center">
            <FaUserCircle size={24} className="text-[#FFFAFA]" />
          </a>
        </Link>
      </header>
    </>
  );
};

export default Header;
