import React, { Component } from 'react';
import api from "../../../services/api";
import "./styles.css";
import { Link } from 'react-router-dom';



export default class ClientList extends Component{
    state = {
        clients: [],
        clientInfo: {},
        page: 1,
    }
    
    componentDidMount(){
        this.loadClients();
    }

    loadClients = async (page = 1) => {
        const response = await api.get(`/clients?page=${page}`);

        const { docs, ...clientInfo } = response.data;

        this.setState({clients: docs, clientInfo, page });
    }

    nextPage = () => {
        const { page, clientInfo } = this.state;

        if (page === clientInfo.pages) return;

        const pageNumber = page + 1;

        this.loadClients(pageNumber);

    };
    prevPage = () => {
        const { page } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadClients(pageNumber);
    };

    render(){
        const { clients, page, clientInfo } = this.state;
        return (
            <div className="client-list">
                <Link className="clientes" to="/clients/new">Adicionar Cliente</Link>
                <Link className="main_menu" to="/">Menu Principal</Link>
                <br></br>
                {clients.map(client => (
                    <article key={client._id}>    
                        <strong>{client.name}</strong>
                        <p>Documento: {client.document}</p>
                        <p>Telefone: {client.phone}</p>
                    </article>
                ))}
                <div className="actions"> 
                   <button disabled={ page===1 } onClick={this.prevPage}>Anterior</button> 
                   <button disabled={ page=== clientInfo.pages} onClick={this.nextPage}>Próximo</button> 
                </div>
            </div>
        ); 
    }
}