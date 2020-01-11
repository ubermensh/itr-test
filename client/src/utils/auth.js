import axios from "axios";
//import jwt_decode from "jwt-decode";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const registerUser = (userData)  => {
  axios
    .post("/api/users/register", userData)
    .then(res => {console.log('registered! go to Log in!')})
    .catch(err => {console.log(err.response.data)})
};

export const loginUser = (userData ) =>  {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
    })
    .catch(err => {console.log(err.response.data);});
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
};
