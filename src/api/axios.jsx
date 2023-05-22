import axios from "axios";

const appApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default appApi;
