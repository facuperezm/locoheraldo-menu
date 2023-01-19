import axios from "axios";
import Papa from "papaparse";

module.exports = {
  list: async () => {
    return axios
      .get(process.env.NEXT_PUBLIC_DB_SHEETS, {
        responseType: "",
      })
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
