import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const search = (query)  => {
  console.log('search products ', query);
  axios
    .post(`${BASE_URL}/api/products/search`, {query})
    .then(res => {
      console.log(res);
    })
    .catch(err => {console.log(err)});
};

