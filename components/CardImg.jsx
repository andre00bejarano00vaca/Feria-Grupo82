import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const CardImg = ({ image }) => {
  return (
    <Card className="py-4 w-[18rem] bg-gray-400">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{image.name}</p>
        <small className="text-default-500">{image.tipo}</small>
        <h4 className="font-bold text-large">{image.precio}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <div className="relative w-full h-[200px]">
          <Image
            alt={`${image.nombre}`}
            className="object-cover rounded-xl"
            src={`data:image/jpeg;base64,${image.data}`}
            layout="fill" // Esto asegura que la imagen se ajuste al contenedor
            objectFit="cover" // Mantiene la relación de aspecto sin distorsionarse
          />
        </div>

      </CardBody>
    </Card>
  );
};

export default CardImg;
