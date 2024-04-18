
import '../App.css'

import { Testimonial } from '../components/Testimonial'
import MenuTutorias from "../components/MenuTutorias";
import ProfesorDestacado from '../components/ProfesorDestacado';
import { Banner } from '../components/Banner';

export default function Home() {
  return (
    <>
      <Banner />
      <ProfesorDestacado />
      {/*<MenuTutorias></MenuTutorias>*/}
      <Testimonial />
    </>
  );
};
