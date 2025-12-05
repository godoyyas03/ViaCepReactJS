// todos os componentes do react.js, o seu arquivo deve ser em Jsx
import React from "react";
import LogotipoBR from '../images/logotipoBR.jpg'

const LogotipoProjeto = () =>{
        return(
    <div>
        <img src={LogotipoBR} alt="Logotipo Governo do Brasil!" title="Logotipo Governo do Brasil!"/>
    </div>
    );
}

// Exporta o componente React para o consumo das outras camadas do prjeto!

export default LogotipoProjeto;