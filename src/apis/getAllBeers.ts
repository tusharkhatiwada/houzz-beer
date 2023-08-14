import client from "../utils/fetchWrapper";

const getAllBeers = (page = 1) => client(`beers?per_page=${10 * page}`);

export default { getAllBeers };
