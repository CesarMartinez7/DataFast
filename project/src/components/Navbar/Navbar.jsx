import { useRef } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const barraNav = useRef()
  return (
    <nav className= "relative w-full z-20 top-0 start-0 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button className="font-semibold text-zinc-700">DataFast</button>
        <div className="inline-flex gap-1 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link className="bg-green-400 pl-4 pr-4 font-medium text-white pt-2 pb-2 rounded-md " to="register">Registrar</Link>
          <Link className=" pl-4 pr-4 text-zinc-500 border font-medium border-indig pt-2 pb-2 rounded-md " to="login">Iniciar sesion</Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 md:hidden justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden xl:hidden"
            onClick={(e)=>{
              barraNav.current.classList.toggle("hidden")
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
          ref={barraNav}
          
        >
          <ul className="flex flex-col  md:p-0 mt-4 border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navigation.map((value,key)=>(
              <li className="p-2" key={key}>
                <Link to={value.href} className="text-gray-500 font-medium">{value.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};


const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Documentacion", href: "docs" },
  { name: "Datos", href: "datos" },
  { name: "DashBoard", href: "dash" },
  { name: "Crear", href:"create"}
];