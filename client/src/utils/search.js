import axios from "axios";
export const searchOnliner = (query)  => {
  console.log(query);
  axios
    .post("/api/search", query)
    .then(res => {
      console.log(res.body);
    })
    .catch(err => {console.log(err.response.data)})
};

