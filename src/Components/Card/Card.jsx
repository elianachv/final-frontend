import { useContext } from "react";
import img from "../../Assets/images/doctor.jpg";
import GlobalContext from "../../Context/global.context";
import "./Card.css";
const Card = ({ name, username, id }) => {
  const { addFav } = useContext(GlobalContext);
  const addFavorite = (e) => {
    e.preventDefault();
    addFav(id);

    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <span className="card-id">id: {id}</span>
      <img src={img} alt="doctor" />
      <h3>{name}</h3>
      <p>{username}</p>
      <button onClick={addFavorite} className="favButton">
        ❤️
      </button>
    </div>
  );
};

export default Card;
