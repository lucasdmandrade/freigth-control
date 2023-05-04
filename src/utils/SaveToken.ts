const SaveToken = (token: string) => {
  localStorage.setItem("token", token);
};

export default SaveToken;
