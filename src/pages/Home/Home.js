import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <main>
            <h1>Início</h1>
            <div className="cards">
            <div className="card">
     <img
     src={`${process.env.PUBLIC_URL}/assets/listar_empresas.svg`} alt=""/>
                <h4>Listar Empresas</h4>
            </div>
            <div className="card">
     <img
     src={`${process.env.PUBLIC_URL}/assets/cadastrar_empresas.svg`} alt=""/>
                <h4>Cadastar Empresas</h4>
            </div>
            </div>
        </main>
    )
}

export default Home
