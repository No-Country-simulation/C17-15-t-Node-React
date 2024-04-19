import { Carousel } from "@material-tailwind/react";
 
export function Banner() {
  return (
    <Carousel className="">
      <img
        src= "/MasterAula-slogan.png"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/BannerOfertaFigma.png"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="/BannerWebDescuentos.png"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}