import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import styled from 'styled-components';
const Home = () => {
    return (
        <div className="home">
            <h1>Início</h1>
            <div className="cards">
            <div className="card">
            <Link to="/lista"><img
     src={`${process.env.PUBLIC_URL}/assets/listar_empresas.svg`} alt=""/></Link>
                <h4>Listar Empresas</h4>
            </div>
            <div className="card">
            <Link to="/cadastro"><img
     src={`${process.env.PUBLIC_URL}/assets/cadastrar_empresas.svg`} alt=""/></Link>
                <h4>Cadastar Empresas</h4>
            </div>
            </div>
        </div>
    )
}

export default Home
