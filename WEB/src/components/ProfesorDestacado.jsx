import "../styles/ProfesorDestacado.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";

function ProfesorDestacado({ name, phrase, img, whatsnumber, tool, whytool }) {
  return (
    // quise mejorar el responsive pero no pude
    <div className="profesorDestacado shadow-md border border-gray-300 p-6 rounded-xl   lg:flex lg:items-center lg:p-8 font-sans">
      <div className="header  ">
        <h1 className="text-3xl font-bold  mb-4">{name}</h1>
        <h6 className="text-xl  mb-2">{phrase}</h6>
      </div>
      <div className="content">
        <img className="profImg .shadow-lg rounded-xl " src={img} alt="" />
        <div className="info">
          <div className="whatsapp ">
            <FaWhatsapp className="icon" />
            <h4>Whatsapp</h4>
            <p>{whatsnumber}</p>
          </div>
          <div className="tool">
            <MdLabelOutline className="icon" />
            <h4>{tool}</h4>
            <p>{whytool}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfesorDestacado;
