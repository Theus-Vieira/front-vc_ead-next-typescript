import axios from "axios";
import "dotenv/config";

export const api = axios.create({
  baseURL: "https://parseapi.back4app.com",
  timeout: 6000,
  headers: {
    "X-Parse-Application-Id": process.env.APP_ID,
    "X-Parse-REST-API-Key": process.env.API_KEY,
    "X-Parse-Revocable-Session": 1,
  },
});
