import { useContext } from "react";
import GlobalContext from "../../Context/global.context";
import "./NotFound.css";

const NotFound = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={`notFound notFound-${theme.id}`}>
      <p className="warning">404</p>
      <p>Sorry this page does not exist!</p>
    </div>
  );
};

export default NotFound;
