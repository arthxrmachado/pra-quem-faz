import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-[#A70038] p-4 text-[#FFFAFA] text-center fixed top-0 w-full z-50 h-16 flex items-center">
      <nav className="flex justify-between w-full">
        <h1 className="text-xl mx-2"><Link href="/">Descobrir</Link></h1>
        <h1 className="text-xl mx-2"><Link href="/">Explorar</Link></h1>
        <h1 className="text-xl mx-2"><Link href="/">Cursos</Link></h1>
        <h1 className="text-xl mx-2"><Link href="/">Podcasts</Link></h1>
        <h1 className="text-xl mx-2"><Link href="/">Buscar</Link></h1>
      </nav>
    </header>
  );
};

export default Header;