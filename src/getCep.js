export const getDados = (cep) => fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
  .then((data) => data.json())
  .then((data) => data);
