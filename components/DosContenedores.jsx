import React from 'react'

const DosContenedores = () => {
  return (
    <div className="grid h-2/5 grid-cols-2 gap-4 p-5">
        <div className="relative group col-span-1 h-full bg-[url('/imagenes/foto3.jpg')] bg-cover bg-center rounded-[16px] p-5">
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-[16px] flex items-center justify-center">
          <p className="text-white text-center">Accesorios</p>
        </div>
      </div>
      <div className="relative group col-span-1 h-full bg-[url('/imagenes/foto5.jpg')] bg-cover bg-center rounded-[16px] p-5">
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-[16px] flex items-center justify-center">
          <p className="text-white text-center">Conjuntos</p>
        </div>
      </div>
    </div>
  )
}

export default DosContenedores