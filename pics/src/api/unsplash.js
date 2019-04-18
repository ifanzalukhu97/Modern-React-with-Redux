import axios from "axios";

const accessKey =
  "1f9f727d42524e88e3637b4d753c86411f5df0faf5d312d321fc49209074e708";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${accessKey}`
  }
});
