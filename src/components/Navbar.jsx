import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const count = useSelector((state) => state.cart.totalQty);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Products",
      slug: "/products",
    },
  ];

  return (
    <>
      <header className="flex flex-col z-50 w-full fixed text-slate-800 transition-all ease-in duration-200">
        <nav className="flex text-lg w-full h-20 bg-[#B3C8CF] justify-between items-center px-4 lg:px-10  z-50">
          <div className="mr-4 font-bold ">
            <Link to="/">Q-Shop</Link>
          </div>

          <div className="flex">
            <div className="hidden lg:block">
              <ul className="flex items-center">
                {navItems.map((item) => (
                  <li
                    className="mx-3 hover:text-white hover:underline"
                    key={item.name}
                  >
                    <Link to={item.slug}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/cart">
              <div className="relative">
                <ShoppingBag className="mx-5  hover:text-white">4</ShoppingBag>
                {count !== 0 && (
                  <span className="absolute -top-3 ml-9  bg-[#ef4444ea] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {count}
                  </span>
                )}
              </div>
            </Link>

            <div className="lg:hidden">
              {isMenuOpen ? (
                <X onClick={toggleMenu} />
              ) : (
                <Menu onClick={toggleMenu} className="cursor-pointer" />
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Transition
          show={isMenuOpen}
          enter="transition-transform ease-out duration-200"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition-transform ease-in duration-300"
          leaveFrom="translate-y-0 "
          leaveTo=" -translate-y-full "
        >
          <ul className="w-full pb-6 bg-[#B3C8CF] flex flex-col lg:hidden items-center justify-center">
            {navItems.map((item) => (
              <li onClick={toggleMenu} className="mx-3 py-3" key={item.name}>
                <Link to={item.slug}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Transition>
      </header>
    </>
  );
}

export default Navbar;
