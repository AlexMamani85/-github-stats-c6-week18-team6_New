import collectionClient from "./collection-client";


export const getFavorites = async () => {
  const favorites = await collectionClient("/favorites");
  return favorites;
};