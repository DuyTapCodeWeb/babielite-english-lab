
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-english-blue">
            Duy
          </span>
          <span className="text-sm bg-english-blue text-white px-2 py-1 rounded">
            English Lab
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/login">Đăng nhập</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Đăng ký</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          <Menu />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t mt-4 animate-accordion-down">
          <div className="flex flex-col gap-4">
            <NavLinks mobile />
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Đăng nhập</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register">Đăng ký</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const links = [
    { name: "Listening", path: "/listening" },
    { name: "Speaking", path: "/speaking" },
    { name: "Reading", path: "/reading" },
    { name: "Writing", path: "/writing" },
    { name: "Giáo trình", path: "/courses" },
  ];

  const baseClasses = "font-medium hover:text-english-blue transition-colors";
  const mobileClasses = "py-2 border-b border-gray-100";
  const desktopClasses = "";

  return (
    <div className={mobile ? "flex flex-col" : "flex items-center gap-6"}>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
