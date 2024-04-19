import { Carousel } from "@material-tailwind/react";
 
export function Banner() {
  return (
    <Carousel className="">
      <img
        src= "public/MasterAula-slogan.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="public/BannerOfertaFigma.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="public/BannerWebDescuentos.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}