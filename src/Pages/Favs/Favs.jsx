import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import GlobalContext from "../../Context/global.context";
import "./Favs.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs, theme } = useContext(GlobalContext);

  return (
    <div className={`favs favs-${theme.id}`}>
      <h1>Dentists Favs</h1>
      <div className="favs__grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favs.length === 0 ? <p className="advertise">You have no favorites yet</p> : null}
        {favs.map((dentist) => {
          return (
            <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
              <Card
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Favs;
