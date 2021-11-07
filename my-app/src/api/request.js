import axios from "axios";
import { witLigger } from "./logger";

const BASE_URL = "https://api.github.com";

class Request {
  constructor(token) {
    this.token = token;
    this.request = witLigger(
      axios.create({
        baseURL: BASE_URL,
      })
    );
  }

  setToken = (token) => {
    this.token = token;
  };

  removeToken = () => {
    this.token = null;
  };

  requestWitToken = () => {
    return {
      headers: {
        "x-token": this.token,
      },
    };
  };

  get = (url, witAuth) => {
    let config = {};

    if (witAuth) {
      config = { ...config, ...this.requestWitToken() };
    }

    return this.request.get(url, config);
  };

  post = (url, params, witAuth) => {
    let config = {};

    if (witAuth) {
      config = { ...config, ...this.requestWitToken() };
    }

    return this.request.post(url, params, config);
  };
}

export const request = new Request("token");
