import { ApiService } from "./ApiService";

class MoviesService extends ApiService {
  async getAll() {
    try {
      const response = await this.client.get("movies");
      return response.data;
    } catch (error) {
      console.log("Something went wrong", error);
    }
    return [];
  }
  async get(id) {
    try {
      const response  = await this.client.get(`/movies/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
export default new MoviesService();
