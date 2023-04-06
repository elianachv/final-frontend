import "./Footer.css";
import logo from "../../Assets/images/DH.png";

const Footer = () => {
  return (
    <footer>
      
      <div className="footer__author">
        <p>Eliana Chavez Valencia </p>
      </div>

      <div className="footer__sponsor">
        <img src={logo} alt="DH-logo" />
 
      </div>

    </footer>
  );
};

export default Footer;
