export const getStorageFavs = () => {
  console.log("GET STORAGE FVAS");
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
