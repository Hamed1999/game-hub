import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { 
    key: "0f8818b925e743c681db62c6bc65db95" 
  },
});