
import '../App.css'

import { Footer } from '../components/Footer'
import { Testimonial } from '../components/Testimonial'
import MenuTutorias from "../components/MenuTutorias";
import ProfesorDestacado from '../components/ProfesorDestacado';

export default function Home() {
  return (
    <>
      <ProfesorDestacado />
      {/*<MenuTutorias></MenuTutorias>*/}
      <Testimonial />
    </>
  );
};
