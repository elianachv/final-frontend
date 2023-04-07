export const getStorageFavs = () => {
  const localData = localStorage.getItem("favs");
  let localFavs = [];
  if (localData) {
    localFavs = JSON.parse(localData);
  }
  return localFavs;
};

export const setStorageFavs = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
};
