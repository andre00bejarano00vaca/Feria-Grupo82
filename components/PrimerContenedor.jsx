import React from "react";

const PrimerContenedor = () => {
  return (
    <div className="rounded-[16px] grid grid-cols-1 sm:grid-cols-2 h-[87%] bg-[url('/imagenes/foto2.jpg')] bg-cover bg-center">
      <div className="flex flex-col justify-center items-center h-[100%] bg-black/50 sm:bg-inherit p-4 sm:p-0">
        <p className="text-[1.5rem] sm:text-[2rem] edu-au-vic-wa-nt-hand-hola text-white">
          Whereas
        </p>
        <p className="text-[2rem] sm:text-[3rem] prompt-semibold text-white">
          Nueva colección
        </p>
        <p className="text-white">Otro documento</p>
      </div>
    </div>
  );
};

export default PrimerContenedor;
