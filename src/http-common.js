import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:30001/api/guest",
  headers: {
    "Content-type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
});