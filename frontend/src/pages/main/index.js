import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

export default class Main extends Component{
    render(){
        return(
            <div className="links">
                <Link className="produtos" to="/products">Produtos</Link>
                <Link className="clientes" to="/clients">Clientes</Link>
            </div>
        );
    };
}