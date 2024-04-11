import "../styles/ProfesorDestacado.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";

function ProfesorDestacado({ name, phrase, img, whatsnumber, tool, whytool }) {
  return (
    // quise mejorar el responsive pero no pude
    <div className="profesorDestacado bg-gray-800 text-white p-4 lg:flex lg:items-center lg:p-8">
      <div className="header lg:w-1/2">
        <h1>{name}</h1>
        <h6>{phrase}</h6>
      </div>
      <div className="content lg:w-1/2 lg:flex lg:justify-around">
        <img
          className="lg:w-48 lg:h-48"
          src={img}
          alt=""
        />
        <div className="info lg:w-1/2 lg:text-left">
          <div className="whatsapp flex items-center">
            <FaWhatsapp className="icon" />
            <div>
              <h4>Whatsapp</h4>
              <p>{whatsnumber}</p>
            </div>
          </div>
          <div className="tool mt-4">
            <MdLabelOutline className="icon" />
            <div>
              <h4>{tool}</h4>
              <p>{whytool}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfesorDestacado;