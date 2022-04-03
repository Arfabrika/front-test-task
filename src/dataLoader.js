import axios from "axios";

export class personLoader {
  static async getAll(limit = 4, page = 1) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users",
      {
        params: {
          _limit: limit,
          _page: page
        }
      });
    return response;
  }
}

export class postLoader {
  static async getAllPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts",);
    return response;
  }
}