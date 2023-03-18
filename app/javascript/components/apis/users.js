import http from "./axios";

const index = _ => http.get("/api/v1/users");

const usersApi = {
  index
};

export default usersApi;