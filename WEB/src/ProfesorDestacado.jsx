import "./ProfesorDestacado.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";

function ProfesorDestacado({ name, phrase, img, whatsnumber, tool, whytool }) {
  return (
    <div className="profesorDestacado">
      <div className="header">
        <h1>{name}</h1>
        <h6>{phrase}</h6>
      </div>
      <div className="content">
        <img
          style={{ border: "1px solid white", width: "400px", height: "400px" }}
          src={img}
          alt=""
        />
        <div className="info">
          <div className="whatsapp ">
            <FaWhatsapp className="icon" />
            <div>
              <h4>Whatsapp</h4>
              <p>{whatsnumber}</p>
            </div>
          </div>
          <div className="tool">
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
