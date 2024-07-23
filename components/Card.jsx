import React from "react";

const Card = ({image}) => {
  return (
    <div className="border  w-[290px] h-[350px] m-4 rounded-[15PX] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
      <div className="border  h-3/4">
      <img src={`data:image/jpeg;base64,${image.data}`} alt={image.name} className="w-full h-full object-cover" />
      </div>
      <div className="border  h-1/4 grid grid-cols-12 p-4">
        <p className="col-span-6 row-span-2">{image.name}</p>
        <p className="col-span-6 row-span-2">{image.precio}</p>
        <p className="col-span-12 truncate ">
          Tipo:{image.tipo}
        </p>
      </div>
    </div>
  );
};

export default Card;
