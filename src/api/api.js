// Importação do axios para o funcionamento da api e busca de CEPs.
import axios from "axios";

//refencia de URL para a API
// https://viacep.com.br/ws/01001000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

//Exportar essa API para o uso da aplicação.
export default api;
