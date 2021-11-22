import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/home.css'
import { getDados } from '../getCep';
import Localcep from '../componentes/Localcep';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      cep: [],
      valorInput: '',
      buscaArr: [],
    }
  }

  onChangeValue = ({target: {value}}) => {
    value = value.replace(/\D/g,"");
    value = value.replace(/^(\d{5})(\d)/,'$1-$2');
    this.setState({valorInput: value});
  };

  gerarDados = async() => {
    const {valorInput, buscaArr} = this.state;
    getDados(valorInput)
      .then((data) => this.setState({buscaArr: buscaArr.concat(data)}))
      .catch((error) => console.log(error));
  };

  render(){
    const { valorInput, buscaArr } = this.state;
    return(
      <div className='container'>
        <div className='local-form bg-dark text-white text-center'>
          <h1 className='display-4 pl-4'>Consultar CEP</h1>
          <p className='lead pl-4'>DIGITE UM CEP VALIDO</p>
          <form id='cepForm'>
            <div className='input-group text-center'>
              <div className='local-input text-center'>
                <input 
                  id='Cep'
                  type="text"
                  maxLength='9'
                  className='form-control cep' 
                  aria-label='Consulta Cep'
                  placeholder='Encontrar cep'
                  name='pegarValor'
                  value={ valorInput }
                  onChange={ this.onChangeValue }
                />
                <button 
                  type='button'
                  disabled={valorInput.length !== 9}
                  onClick={ this.gerarDados }  
                  className='btn btn-lg btn-primary'
                >BUSCAR</button>
              </div>
            </div>
          </form>
        </div>

        <div className='tbl-header'>
          <table cellPadding='0' cellSpacing='0' border='0'>
            <thead>
              <tr>
                <th>CEP</th>
                <th>ENDEREÇO</th>
                <th>BAIRRO</th>
                <th>CIDADE</th>
                <th>ESTADO</th>
              </tr>
            </thead>
          </table>

          <div className='tbl-content'>
            <table cellSpacing='0' cellPadding='0' border='0'>
              <tbody>
                  {buscaArr.filter((a) => a.cep !== undefined ).map((a) => <Localcep cep={ a } />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
