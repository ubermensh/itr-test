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

export const loginUser = (userData, history) =>  {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      //to be accessible in dashboard;
      //https://reactjs.org/docs/lifting-state-up.html
      console.log(decoded);
      history.push('/dashboard');
    })
    .catch(err => {console.log(err.response.data);});
};

export const logoutUser = (history) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  //unset user from ???
  history.push('/landing');
};
