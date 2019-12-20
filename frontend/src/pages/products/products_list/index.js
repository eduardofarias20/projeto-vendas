import React, { Component } from 'react';
import api from "../../../services/api";
import "./styles.css";
import { Link } from 'react-router-dom';



export default class ProductList extends Component{
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({products: docs, productInfo, page });
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);

    };
    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    render(){
        const { products, page, productInfo } = this.state;
        return (
            <div className="product-list">
                <Link className="produtos" to="/products/new">Adicionar Produto</Link>
                <Link className="main_menu" to="/">Menu Principal</Link>
                <br></br>
                {products.map(product => (
                    <article key={product._id}>    
                        <strong>{product.description}</strong>
                        <p>Quantidade: {product.amount}</p>
                        <p>Valor unitário: {product.unityValue}</p>
                        <p>Em estoque: {product.stock}</p>
                    </article>
                ))}
                <div className="actions"> 
                   <button disabled={ page===1 } onClick={this.prevPage}>Anterior</button> 
                   <button disabled={ page=== productInfo.pages} onClick={this.nextPage}>Próximo</button> 
                </div>
            </div>
        ); 
    }
}