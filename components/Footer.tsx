import { links } from "@/data/links_navbar";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lightDarkMode/30 text-white p-4 border-t-8 border-primary">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around container gap-10">
        {/* Sección de Contacto */}
        <div className="w-full lg:w-auto flex flex-col items-center">
          <h2 className="text-lg font-semibold text-primary">Contacto</h2>
          <p>Email: info@example.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className="w-full lg:w-auto flex flex-col items-center lg:items-start">
          <h2 className="text-lg font-semibold text-primary">
            Enlaces Rápidos
          </h2>
          <ul className="flex flex-col px-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Sección de Redes Sociales */}
        <div className="w-full lg:w-auto flex flex-col items-center">
          <h2 className="text-lg font-semibold text-primary">Redes Sociales</h2>
          <ul className="list-none p-0 flex space-x-4">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            {/* Agrega más iconos o enlaces según sea necesario */}
          </ul>
        </div>
      </div>

      {/* Derechos de Autor */}
      <div className="mt-8 text-center">
        <p className="text-slate-400">
          &copy; 2023 Nombre de tu Empresa. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
