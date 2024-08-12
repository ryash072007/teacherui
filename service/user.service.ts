import { API_BASE_URL } from "@/config/server.api.config";
import { APIService } from "./api.service";

export class UserService extends APIService {
  constructor() {
    super(API_BASE_URL);
  }

  async addUser(data: any): Promise<any> {

    return this.post("user/add/", data)
      .then((response) => response?.data)
      .catch((error) => {
        throw error?.response?.data;
      });
  }

}
