import React from "react";
import Card from "./CardImg";
import DosContenedores from "./DosContenedores";
import PrimerContenedor from "./PrimerContenedor";
import Footer from "./Footer";
import ImageList from "./ImageList";

const PaginaPrincipal = () => {
  return (
    <div className="gap-4  h-screen">
        <PrimerContenedor/>
        <DosContenedores/>       
        <div className=" bg-gray-200 ">
          <p className="text-center text-[27px] p-4">Productos</p>
          <div >
            <ImageList/>
          </div>
        </div>
        <Footer/>
      </div>
  );
};

export default PaginaPrincipal;
