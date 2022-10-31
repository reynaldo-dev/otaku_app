import axios from "axios";

export const httpClient = axios.create({
    baseURL: "https://kitsu.io/api/edge",
});