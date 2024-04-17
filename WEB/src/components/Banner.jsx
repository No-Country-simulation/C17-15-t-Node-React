import { Carousel } from "@material-tailwind/react";
 
export function Banner() {
  return (
    <Carousel className="rounded-xl">
      <img
        src= "./src/assets/MasterAula-slogan.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="./src/assets/BannerOfertaFigma.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="./src/assets/BannerWebDescuentos.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}