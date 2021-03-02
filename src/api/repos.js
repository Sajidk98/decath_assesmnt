import API from "./config";

export const fetchRepoByRepo = (value) => {
  return API.get("/search/repositories?page=1&per_page=10&q=" + value)
    .then((response) => {
      return response.data.items;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
