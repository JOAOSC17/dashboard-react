import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import styled from 'styled-components';
const Header = (props) => {
    const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    width: 80%;
`;
    return (
        <div className="sideTopBar">
        <header>
        <img className="logo"
     src={`${process.env.PUBLIC_URL}/assets/logo.svg`} 
     alt="logo"/>
        </header>
        <div className="sideBar">
          <StyledLink to="/" >
          <img className="simbolSide"
          src={`${process.env.PUBLIC_URL}/assets/home.svg`} alt=""/>
          </StyledLink>
     <StyledLink to="/lista">
         <img className="simbolSide"
     src={`${process.env.PUBLIC_URL}/assets/listar_empresas.svg`} alt=""/></StyledLink>
    <StyledLink to="/cadastro">
    <img className="simbolSide"
     src={`${process.env.PUBLIC_URL}/assets/cadastrar_empresas.svg`} alt="" />
    </StyledLink>
        </div>
        </div>
    )
}

export default Header

