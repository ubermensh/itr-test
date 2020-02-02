import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export async function searchProducts (query) {
  console.log('search products ', query);
  const res = await axios.post(`${BASE_URL}/api/products/search`, {query});
  return res.data.products;
};
export async function addFavorite(key, userId){
  console.log(key,userId);
  //const res = await axios.post(`${BASE_URL}/api/products/favorite`, {key});
}

