import axios from "axios";
import { GIT_ACCESS_TOKEN } from "../utility/costants";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

instance.defaults.headers.common["Authorization"] = GIT_ACCESS_TOKEN;

export default instance;
