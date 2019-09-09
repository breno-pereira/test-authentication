import Axios from "axios";

const instance = Axios.create({
  baseURL: process.env.REACT_APP_API
});

export default instance;