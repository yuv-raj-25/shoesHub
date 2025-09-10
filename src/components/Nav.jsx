import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/Sign-In'>Sign in</a>
          <span>/</span>
          <a href='/explore-now'>Explore now</a>
        </div>

        {/* Hamburger Icon */}
        <div
          onClick={handleNav}
          className="block lg:hidden cursor-pointer"
        >
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {nav && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden xl:bg-white xl:whitespace-nowrap  z-10 pr-10">
          <ul className="flex flex-col items-center gap-4 p-4">
            {navLinks.map((item) => (
              <li key={item.label} className="w-full text-center">
                <a
                  href={item.href}
                  className="block w-full font-montserrat text-lg text-slate-gray py-2"
                  onClick={() => setNav(false)} // Close menu on link click
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      )}
    </header>
  );
}

export default Nav;
