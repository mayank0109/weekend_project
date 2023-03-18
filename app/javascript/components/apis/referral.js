import http from "./axios";

const create = payload => http.post("/api/v1/referral", { ...payload });

const referral = {
  create
};

export default referral;