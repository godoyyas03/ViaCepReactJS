//importação IMPORTANTE da base de dados dos estados (biblioteca).
import { useState } from 'react';

//importando a api desenvolvida.
import api from './api/api';

//importando a biblioteca de icones react.
import { FiSearch } from 'react-icons/fi';

//importando o logotipo do governo federal.
import LogotipoBR from './images/logotipoBR.jpg';

//importando o arquivo css para formatação.
import './css/App.css';

function App() {

  //inserção da biblioteca estados.
  const [input, setInput] = useState('');

  //cria um objeto vazio, porem pronto para receber os dados JSON da API para renderizar na tela.
  const [cep, setcep] = useState({});

 //função do tipo assíncrono, para realizar o monitoramento de performance e execução do consumo dos dados pela API.


 async function handleSearch() {
    //realiza a pesquisa via API.
    if(input === ''){
      alert("Digite um CEP!");
      return false;
    }
    try{
      //essa variável constante, realiza uma requisição na API, de como pegar o valor digitado no input e realizar a consulta
      const retorno = await api.get(`${input}/json`);

      //set - entrada de Dados
      //get - saída de dados

      setcep(retorno.data);
      setInput("");
    }catch{
      //
      alert("CEP não encontrado!");
      setInput("");
    }
  }

  return (
    <div className="boxPage">
      <header className="topTitle">
        <h1>Pesquise seu CEP!</h1>
        <h4>Aqui você pode encontrar qualquer localização do Brasil basta realizar uma pesquisa de CEP.</h4>
      </header>
      <main className="container">
        <h3>Pesquise seu CEP:</h3>
        <section className="boxForm">
        <input type="number" placeholder="Digite seu CEP aqui..." value={input} onChange={(event) => setInput(event.target.value)}/>
        <button className="bntPesquisar"><FiSearch size={20} color="#ffffff" onClick={handleSearch}/></button>
        </section>
        </main>
{/* voltar */}
        {/* só vai executar a section, quando houver resultado, se ão nada vai aparecer */}
        {Object.keys(cep).length > 0 && (
          <section className="bodyResult">
            <h2>CEP: {cep.cep}</h2>

            <span>Endereço: {cep.logradouro}</span>

            <span>Bairro: {cep.bairro}</span>

            <span>Cidade: {cep.localidade} - {cep.uf}</span>
          </section>
        )}  
      <footer className="end">
        <img src={LogotipoBR} alt="Logotipo BR!" title="Logotipo BR!" className="logotipoBR"></img>
      </footer>
    </div>
  );
}

export default App;
