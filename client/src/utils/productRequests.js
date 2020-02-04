import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export async function searchProducts (query) {
  console.log('search products ', query);
  const res = await axios.post(`${BASE_URL}/api/products/search`, {query});
  return res.data.products;
};

export async function addFavorite(key){
  console.log('add fav', key);
  const res = await axios.post(`${BASE_URL}/api/products/favorite`, {key});
};

export async function deleteFavorite(key){
  //console.log('toggle fav', key,userId);
  const res = await axios.delete(`${BASE_URL}/api/products/favorite`, {key});
};

export async function getFavorites(){
  console.log('getFavorites');
  const res = await axios.get(`${BASE_URL}/api/products/favorite`);
  return res;
};
