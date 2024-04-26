import { NavLink } from "react-router-dom";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ButtonNavBar } from "./ButtonNavBar";
import { LogInSignUp } from "./LogInSignUp";
import { SignProvider } from "../../context/signProvider";
import { useUser } from "../../context/userProvider";
import { ProfileMenu } from "../ProfileMenu";

export const NavBar = () => {
  const links = [
    { to: "/", label: "" },
    { to: "/about", label: "Sobre Nosotros" },
    { to: "/courses", label: "Cursos" },
    { to: "/services", label: "Servicios" },
    { to: "/contact", label: "Contacto" },

  ];

  const { user, logout } = useUser();
  const userData = user;
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 text-sm lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-normal lg:text-lg xl:text-xl">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.to}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <SignProvider>
      <div className="">
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-gradient-to-br from-primary to-secondary">
          <div className="flex items-center justify-between text-white">
            {/* div para centrar Master aula en version movil */}
            <div className="lg:hidden"></div>
            <Typography
              variant="h2"
              as="a"
              href="/"
              className=" cursor-pointer  font-bold lg:mr-4 lg:py-1.5"
            >
              MasterAula
            </Typography>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>

              {user ? (<>
                <div className="items-center gap-x-4 hidden lg:flex ">
              <ProfileMenu userData={userData} />
              </div>
              </>) : (<>
                <div className="items-center gap-x-4 hidden lg:flex 2xl:hidden">
                  <ButtonNavBar buttonText="Regístrate"
                    dialogContent={<LogInSignUp signInit={false} />}
                    size="md" />
                  <ButtonNavBar buttonText="Inicia Sesión"
                    dialogContent={<LogInSignUp signInit={true} />}
                    size="md" />
                </div>

                <div className="items-center gap-x-4 hidden 2xl:flex">
                  <ButtonNavBar buttonText="Regístrate"
                    dialogContent={<LogInSignUp signInit={false} />}
                    size="lg" />
                  <ButtonNavBar buttonText="Inicia Sesión"
                    dialogContent={<LogInSignUp signInit={true} />}
                    size="lg" />
                </div>
              </>)}
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav} className="text-center">
            {navList}
            {user ? (
              <ProfileMenu userData={userData} />              
              ) : (<>
                <div className="flex items-center gap-x-1">
                  <ButtonNavBar buttonText="Regístrate"
                    dialogContent={<LogInSignUp signInit={false} />}
                    size="lg" />
                  <ButtonNavBar buttonText="Inicia Sesión"
                    dialogContent={<LogInSignUp signInit={true} />}
                    size="lg" />
                </div>
              </>)}
          </MobileNav>
        </Navbar>
      </div>


    </SignProvider>
  );
};
