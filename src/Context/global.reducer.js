import { themes } from "../Constants/context";
import { globalActionTypes as actions } from "../Context/global.actions";
import { setStorageFavs } from "../Util/storage";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case actions.GET_DENTISTS:
      return {
        ...state,
        dentists: action.payload,
      };
    case actions.LIGHT_THEME:
      return {
        ...state,
        theme: themes.light,
      };
    case actions.DARK_THEME:
      return {
        ...state,
        theme: themes.dark,
      };
    case actions.ADD_FAV:
      const updatedFavs = [...state.favs, action.payload];
      setStorageFavs(updatedFavs);
      return {
        ...state,
        favs: updatedFavs,
      };

    case actions.DELETE_FAV:
      const deleteFav = state.favs.findIndex((f) => f.id === action.payload.id);
      if (deleteFav !== -1) {
        state.favs.splice(deleteFav, 1);
        setStorageFavs(state.favs);
      }
      return {
        ...state,
      };
    case actions.RESET_FAVS:
      return {
        ...state,
        favs: [],
      };
    default:
      return state;
  }
};

export default GlobalReducer;
