import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="sideTopBar">
        <header>
        <img className="logo"
     src={`${process.env.PUBLIC_URL}/assets/logo.svg`} 
     alt="logo"/>
        </header>
        <div className="sideBar">
            <img className="simbolSide"
          src={`${process.env.PUBLIC_URL}/assets/home.svg`} alt=""/>
     <img className="simbolSide"
     src={`${process.env.PUBLIC_URL}/assets/listar_empresas.svg`} alt=""/>
     <img className="simbolSide"
     src={`${process.env.PUBLIC_URL}/assets/cadastrar_empresas.svg`} alt="" />
        </div>
        </div>
    )
}

export default Header

