import axios from "axios";

const http = axios.create({
  baseURL: "/",
  headers: {
    Accept: "applicaion/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
  },
});

http.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    const email = JSON.parse(localStorage.getItem("authEmail"));
    if (token && email) {
      config.headers["X-Auth-Email"] = email;
      config.headers["X-Auth-Token"] = token;
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => {
    if (response.status === 200) {
      response.success = true;
    }
    return response;
  },
  error => {
    const { status } = error.response
    if(status === 401){
      localStorage.removeItem("authToken");
      localStorage.removeItem("authEmail");
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);

export default http;