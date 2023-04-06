/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/global.context";
import "./Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, dentists, getDentists } = useContext(GlobalContext);

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <main className={`home home-${theme.id}`}>
      <h1>Home</h1>
      <div className="home__grid">
        {dentists.map((dentist) => {
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
    </main>
  );
};

export default Home;
