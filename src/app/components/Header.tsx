export default function Header() {
  return (
    <header className="flex justify-between items-center bg-black text-white py-4 px-8">
      <div className="text-2xl font-bold">Portfolio</div>
      <nav className="flex space-x-6">
        <a href="#projects" className="hover:text-teal-500">
          Projects
        </a>
        <a href="#tools" className="hover:text-teal-500">
          Tools
        </a>
        <a href="#contact" className="hover:text-teal-500">
          Contact
        </a>
      </nav>
    </header>
  );
}
