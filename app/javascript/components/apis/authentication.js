import http from "./axios";

const login = payload => http.post("api/v1/login", { user: payload });

const logout = () => http.delete("api/v1/logout");

const signup = ({
  email,
  first_name,
  last_name,
  password,
  password_confirmation,
  referred_by_id
}) =>
http.post("api/v1/users", {
    user: {
      email,
      first_name,
      last_name,
      password,
      password_confirmation,
      referred_by_id
    },
  });

const authenticationApi = {
  login,
  logout,
  signup,
};

export default authenticationApi;