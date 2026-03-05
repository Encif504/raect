import { useState } from "react";
import { Link } from "react-scroll";
import logo from "./assets/logo.png"

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-amber-400 shadow z-50">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-8 md:w-20 md:h-10 object-contain" />
          <h6 className="text-amber-800 font-bold ml-1">Grannada Enterprise</h6>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 dark:text-amber-800">
          <Link to="home" smooth={true} duration={500} className="hover:text-amber-800 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-amber-800 cursor-pointer">About</Link>
          <Link to="products" smooth={true} duration={500} className="hover:text-amber-800 cursor-pointer">Products</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-amber-800 cursor-pointer">Contact</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-amber-800 cursor-pointer">Projects</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-500 dark:text-yellow-400 px-4 pb-4 flex flex-col space-y-2 shadow-md">
          <Link to="home" smooth={true} duration={500} className="block py-2 px-2 rounded hover:bg-amber-700 hover:text-white cursor-pointer" onClick={() => setOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block py-2 px-2 rounded hover:bg-amber-700 hover:text-white cursor-pointer" onClick={() => setOpen(false)}>About</Link>
          <Link to="products" smooth={true} duration={500} className="block py-2 px-2 rounded hover:bg-amber-700 hover:text-white cursor-pointer" onClick={() => setOpen(false)}>Products</Link>
          <Link to="contact" smooth={true} duration={500} className="block py-2 px-2 rounded hover:bg-amber-700 hover:text-white cursor-pointer" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="projects" smooth={true} duration={500} className="block py-2 px-2 rounded hover:bg-amber-700 hover:text-white cursor-pointer" onClick={() => setOpen(false)}>Projects</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;