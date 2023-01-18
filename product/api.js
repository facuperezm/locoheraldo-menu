import axios from "axios";
import Papa from "papaparse";

module.exports = {
  list: async () => {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1Lsxf9ZxMr3gDSQrXyL4fKvhwvOZD0uxn3gJLwFc7OGjpbPuNdgZ6iD2g0Hs8EI0x60jpb81ib4dB/pub?output=csv`,
        {
          responseType: "",
        }
      )
      .then((response) => {
        return new Promise((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => {
              return resolve(results.data);
            },
            error: (error) => {
              return reject(error.message);
            },
          });
        });
      });
  },
};
