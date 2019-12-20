import React, { Component } from 'react';
import "./styles.css";
import { registerClient } from '../../../services/userFunctions';
import { Link } from 'react-router-dom';


export default class ClientNew extends Component{
    
    constructor() {
        super()
        this.state = {
          name: '',
          document: '',
          phone: ''
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newClient = {
          name: this.state.name,
          document: this.state.document,
          phone: this.state.phone
        }
    
        registerClient(newClient).then(res => {
          this.props.history.push(`/clients`)
        })
      }
    
    
    
    render(){
        return (
            <div className="container">
                <article key="">
                  <form noValidate onSubmit={this.onSubmit}>
                    <h1 >Novo Cliente</h1>
                    <div className="form-group">
                      <label htmlFor="name">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Digite o nome"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">CPF/CNPJ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="document"
                        placeholder="Digite um CPF/CNPJ"
                        value={this.state.document}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="(xx) x xxxx-xxxx"
                        value={this.state.phone}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="actions">
                        <button type="submit" className="salvar">Salvar</button>

                        <Link className="cancelar" to="/clients">Cancelar</Link>
                    </div>
                  </form>
                </article>
            </div>
          )
    }
}