import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
const Menu = ({ catalogo, apiUrl , focus}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleRedirect = (url) => {
    setTimeout(() => {
      window.location.href = url; // Redirige después de 300 ms
    }, 250);
  };

  return (
    <div className="xl:hidden ">
      <label className="peer hidden">
        <input type="checkbox" checked={isOpen} />
      </label>
      <div
        onClick={() => setIsOpen(false)}
        class="fixed z-10 bg-slate-900/50 top-0 h-full right-0 left-0 hidden peer-has-checked:block "
      ></div>
      <div className=" z-20 fixed top-0 right-0 w-0  h-full bg-slate-200 transition-all duration-250 ease-in-out peer-has-checked:w-56 shadow">
        <div className="flex flex-col gap-2 p-2 h-full overflow-y-auto">
        <p class="text-lg font-bold px-4 pb-2">Categorias</p>
        <a
              onClick={(e) => {
                e.preventDefault(); // Evita la redirección inmediata
                setIsOpen(!isOpen); // Cierra el menú
                handleRedirect(`${apiUrl}/categoria/all`); // Redirige con retardo
              }}

              className={`cursor-pointer rounded-lg shadow shadow-slate-500/50 hover:bg-slate-300 hover:text-slate-700 active:bg-slate-400 ${(focus==='all')?'bg-slate-500 text-slate-200':''}`}
            >
              <div class="flex gap-2 items-center justify-start  p-2">
                <img
                  src="https://www.deltajoyas.cl/catalogo/catalogo_master.jpg"
                  alt="todos"
                  class={`size-10 rounded-full object-cover ${(focus==='all')?'':'opacity-25'} `}
                  loading="lazy"
                  decoding="async"
                />
                <label class="cursor-pointer w-full font-medium  flex items-center text-sm">
                  todos
                </label>
              </div>
            </a>



          {catalogo.map((item, index) => (
            <a
              onClick={(e) => {
                e.preventDefault(); // Evita la redirección inmediata
                setIsOpen(!isOpen); // Cierra el menú
                handleRedirect(`${apiUrl}/categoria/${item.alias}`); // Redirige con retardo
              }}
              key={index}
              className={`cursor-pointer rounded-lg shadow shadow-slate-500/50 hover:bg-slate-300 hover:text-slate-700 active:bg-slate-400 ${(focus==item.alias)?'bg-slate-500 text-slate-200':''}`}
            >
              <div class="flex gap-2 items-center justify-start  p-2">
                <img
                  src={`https://www.deltajoyas.cl/${item.item}`}
                  alt={item.categoria}
                  class={`size-10 rounded-full object-cover ${(focus==item.alias || focus==='all')?'':'opacity-25'} `}
                  loading="lazy"
                  decoding="async"
                />
                <label class="cursor-pointer w-full font-medium  flex items-center text-sm">
                  {item.categoria}
                </label>
              </div>
            </a>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hover:bg-slate-300 active:bg-slate-400 bg-slate-200 rounded-lg p-2 shadow shadow-slate-500/50 size-10 flex items-center justify-center"
      >
        <TbLayoutSidebarLeftCollapse className="size-10" />
      </button>
    </div>
  );
};
export default Menu;
