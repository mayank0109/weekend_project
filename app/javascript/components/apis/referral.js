import http from "./axios";

const create = payload => http.post("/api/v1/referral", { ...payload });
const index = payload => http.get("/api/v1/referral");

const referral = {
  create,
  index
};

export default referral;