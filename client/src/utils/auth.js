import axios from "axios";
import jwt_decode from "jwt-decode";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const registerUser = (userData, history)  => {
  axios
    .post(`${BASE_URL}/api/users/register`, userData)
    .then(res => {
      history.push('/login');
    })
    .catch(err => {console.log(err.response.data)});
};

export function initialiseUserFromLocalStorage() {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  return decoded;
};

export async function loginUser(userData) {
    try {
        let res = await axios.post(`${BASE_URL}/api/users/login`, userData);
        const {
            token
        } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        return decoded;
    } catch (err) {
      console.log(err);
      alert(JSON.stringify(err));
    }
};

export const logoutUser = (history) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  history.push('/landing');
};
