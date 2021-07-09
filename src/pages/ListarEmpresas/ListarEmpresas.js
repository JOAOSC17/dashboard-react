import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import './ListarEmpresas.css'
import TableBody from './TableBody/TableBody';
const ListarEmpresas = () => {
  const MoreLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-left:.7rem;
    border: none;
    text-decoration:none;
`;
const BackLink = styled(Link)`
    color:white;
    text-decoration:none;
`;
    return (
    <div>
      <main className="lista">
            <div id="title">
                <h1><BackLink to="/"><i class="fas fa-chevron-left"></i></BackLink> Empresas</h1>
            </div>
            <table>
  <tr>
    <th>Identificação <i class="fas fa-chevron-down"></i></th>
    <th>Cidade/UF</th> 
    <th>CEP</th>
    <th>Data de Abertura
    </th>
    
  </tr>
  <TableBody/>
<TableBody/>
<TableBody/>
<TableBody/>
<TableBody/>
<TableBody/>
 </table>
  <form action="" className="form">
  <label for="pag">Página</label>
  <select id="pag" name="pags">
    <option value="one">1</option>
    <option value="two">2</option>
    <option value="three">3</option>
    <option value="four">4</option>

  </select>
  <div className="arrows-pag">
  <i class="fas fa-angle-double-left"></i>
  <i class="fas fa-angle-double-right"></i>
  </div>
</form>
</main>
<footer><span><MoreLink to="/cadastro"><i class="fas fa-plus"></i></MoreLink></span></footer> 
</div>
    )
}

export default ListarEmpresas
