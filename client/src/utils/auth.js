import axios from "axios";
import jwt_decode from "jwt-decode";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const registerUser = (userData, history)  => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      history.push('/login');
    })
    .catch(err => {console.log(err.response.data)})
};

export async function loginUser(userData) {
    let res = await axios.post("/api/users/login", userData);
    const {
        token
    } = res.data;
    localStorage.setItem("jwtToken", token);
    setAuthToken(token);
    const decoded = jwt_decode(token);
    return decoded;
};

export const logoutUser = (history) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  //unset user from ???
  history.push('/landing');
};
