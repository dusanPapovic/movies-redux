import HttpService from "./HttpService";

class MovieService extends HttpService {
  getAll = async (title = "") => {
let endpoint = "/movies";
    if (title) {
      endpoint += `?title=${title}`;
    }

    const { data } = await this.client.get(endpoint);
    return data;
  };

  get = async (id) => {
    const { data } = await this.client.get(`movies/${id}`);
    return data;
  };

  add = async (newMovie) => {
    const { data } = await this.client.post("movies", newMovie);
    return data;
  };

  edit = async (id, movie) => {
    const { data } = await this.client.put(`movies/${id}`, movie);
    return data;
  };

  delete = async (id) => {
    const { data } = await this.client.delete(`movies/${id}`);
    return data;
  };
}

const movieService = new MovieService();
export default movieService;