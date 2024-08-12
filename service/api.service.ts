import { API_BASE_URL } from "@/config/server.api.config";
import axios from "axios";

export abstract class APIService {
    protected baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    post(url: string, data = {}, config = {}): Promise<any> {
        try {

            return axios({
                method: "post",
                url: this.baseURL + url,
                data,

                ...config,
            })

        }
        catch (error) {

            return Promise.reject(error);
        }

    }

}