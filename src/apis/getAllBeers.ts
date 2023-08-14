import client from "../utils/fetchWrapper";

const getAllBeers = (page = 1) => client(`beers?page=${page}&per_page=10`);

export default { getAllBeers };
