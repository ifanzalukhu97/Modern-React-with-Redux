import axios from "axios";

const KEY = "AIzaSyBV2bt39raEcprQmCDhdPMGWee8rFdyoKA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
