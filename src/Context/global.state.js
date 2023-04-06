import { useReducer, useMemo } from "react";
import { themes, apiUrl } from "../Constants/context";
import GlobalContext from "./global.context";
import GlobalReducer from "./global.reducer";
import axios from "axios";
import { globalActionTypes as actions } from "./global.actions";
import { getStorageFavs } from "../Util/storage";

const GlobalState = ({ children }) => {
  const initialState = {
    theme: themes.light,
    dentists: [],
    favs: getStorageFavs(),
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setLightTheme = () => {
    dispatch({ type: actions.LIGHT_THEME });
  };

  const setDarkTheme = () => {
    dispatch({ type: actions.DARK_THEME });
  };

  const getDentists = () => {
    axios.get(`${apiUrl}/users`).then((data) => {
      dispatch({ type: actions.GET_DENTISTS, payload: data.data });
    });
  };

  const addFav = async (id) => {
    const fav = state.favs.find((f) => f.id === id);
    if (fav) {
      deleteFav(id);
    } else {
      const dentist = await axios.get(`${apiUrl}/users/${id}`);
      if (dentist.data) {
        dispatch({ type: actions.ADD_FAV, payload: dentist.data });
        alert(`Dentista con id ${id} agregado a favoritos`);
      }
    }
  };

  const deleteFav = async (id) => {
    const dentist = await axios.get(`${apiUrl}/users/${id}`);
    dispatch({ type: actions.DELETE_FAV, payload: dentist.data });
    //alert(`Dentista con id ${id} eliminado de favoritos`);
  };

  const resetFavs = () => {
    dispatch({ type: actions.RESET_FAVS });
  };

   const cache = useMemo(
    () => ({state }),
    [state]
  );

  return (
    <GlobalContext.Provider
      value={{
        cache,
        theme: state.theme,
        dentists: state.dentists,
        favs: state.favs,
        getDentists,
        setLightTheme,
        setDarkTheme,
        addFav,
        deleteFav,
        resetFavs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
