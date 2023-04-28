import api from "../../../axios";

export const fetchAllCities = async () => {
  let data;

  await api
    .get("/city")
    .then((response) => {
      console.log("response", response);
      data = response;
    })
    .catch((error) => {
      data = error;
      console.log("error", error);
    });

  return data;
};
