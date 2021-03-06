import axios from "axios";

const api = axios.create({
  baseURL: "https://pertobilingueadm.com.br/server/testes",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
