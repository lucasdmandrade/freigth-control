import api from "../../../axios";

export const DoLogin = async () => {
  let data;

  await api
    .post("/login", {
      username: "admin@email.com",
      password: "1234",
    })
    .then((response) => {
      data = response;
    })
    .catch((error) => {
      data = error;
      console.log("error", error);
    });

  return data;
};
