import React, { Component } from 'react';
import "./styles.css";
import { registerProduct } from '../../../services/userFunctions';
import { Link } from 'react-router-dom';



export default class ProductNew extends Component{
    constructor() {
        super()
        this.state = {
          description: '',
          amount: '',
          unityValue: '',
          stock: ''
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newProduct = {
            description: this.newProduct.description,
            amount: this.newProduct.amount,
            unityValue: this.newProduct.unityValue,
            stock: this.newProduct.stock
        }
    
        registerProduct(newProduct).then(res => {
          this.props.history.push(`/products`)
        })
      }
    
    
    
    render(){
        return (
            <div className="container">
                <article key="">
                  <form noValidate onSubmit={this.onSubmit}>
                    <h1>Novo Produto</h1>
                    <div className="form-group">
                      <label htmlFor="name">Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        placeholder="Digite o nome"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">CPF/CNPJ</label>
                      <input
                        type="text"
                        className="form-control"
                        name="amount"
                        placeholder="Quantidade"
                        value={this.state.amount}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Valor unitário</label>
                      <input
                        type="text"
                        className="form-control"
                        name="unityValue"
                        placeholder="Ex: R$ 100,00"
                        value={this.state.unityValue}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="stock">Estoque</label>
                      <input
                        type="text"
                        className="form-control"
                        name="stock"
                        placeholder="Quantidade de estoque"
                        value={this.state.stock}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="actions">
                        <button type="submit" className="salvar">Salvar</button>
                        
                        <Link className="cancelar" to="/products">Cancelar</Link>
                    </div>
                  </form>
                </article>
            </div>
          )
    }
}