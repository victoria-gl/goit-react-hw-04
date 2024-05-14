import axios from "axios";

const searchCardByQuery = async (query, page) => {
  const baseURL = "https://api.unsplash.com/search/photos?";
  const params = new URLSearchParams({
    client_id: "tybojeHcS0RUfGelttdF7EDCr-H7emBqGfzc5PozCwI",
    page,
    query,
    per_page: 20,
  });

  const getQuery = await axios.get(`${baseURL}&${params}`);
  console.log(getQuery.data);
  return getQuery;
};

export default searchCardByQuery;
