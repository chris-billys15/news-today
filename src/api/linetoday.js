import axios from "axios";

const API_LINE_TODAY = `https://today.line.me/id/portaljson`;

export const RequestNews = () => {
  return axios({
    url: `${API_LINE_TODAY}`,
    method: "GET",
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err.response;
    });
};
