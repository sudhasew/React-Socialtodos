const axios = require("axios");
export function GetAllSocialtodo() {
  return axios
    .get("http://localhost:3004/socialtodo")
    .then(function (response: any) {
      return response.data;
    });
}
