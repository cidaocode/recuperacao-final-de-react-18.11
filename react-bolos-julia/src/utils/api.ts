// chamado o pacote axios
import axios from "axios";

// configurando a baseUrl do axios
const api = axios.create({
    baseURL: "http://localhost:3000/"
});

export default api;