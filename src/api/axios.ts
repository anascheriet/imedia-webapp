import axios from "axios";
import { toast } from "react-toastify";

const appApi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

appApi.interceptors.response.use(undefined, (error) => {
  if (error.message === 'Network Error' && !error.response) {
    toast.error('Network error - Make sure your API is running!')
  }

  if (error.message === 'Network Error') {
    toast.error('Network error - Make sure your Internet is working!')
  }

  const { status } = error.response;
  if (error.response.status === 404) {
    toast.error("not found")
  }

  if (status === 500) {
    toast.error('Server error - check the terminal for more info');
  }
})

export default appApi;
