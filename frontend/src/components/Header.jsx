import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { to: "/", label: "Home", activeClass: "text-blue-600" },
        { to: "/CreateEmployee", label: "Create Employee", activeClass: "text-blue-600" },
        { to: "/ListOfEmployee", label: "List Employee", activeClass: "text-green-600" },
        { to: "/Assignment1", label: "Assgn 1", activeClass: "text-orange-600" },
        { to: "/Assignment2", label: "Assgn 2", activeClass: "text-purple-600" },
        { to: "/Assignment3", label: "Assgn 3", activeClass: "text-blue-500" },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            BlogApp
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-lg font-medium transition-colors duration-200 ${
                                        isActive
                                            ? `${link.activeClass} font-bold border-b-2 border-current`
                                            : "text-gray-600 hover:text-blue-500"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none p-2"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Content */}
                {isMenuOpen && (
                    <div className="md:hidden pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-4 py-3 text-lg font-medium rounded-xl transition-all ${
                                        isActive
                                            ? `${link.activeClass} bg-blue-50 font-bold`
                                            : "text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
