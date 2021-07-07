import React from 'react'
import './ListarEmpresas.css'
const ListarEmpresas = () => {
    return (
    <div>
      <main>
            <div id="title">
                <h1><i class="fas fa-chevron-left"></i> Empresas</h1>
            </div>
            <table>
  <tr>
    <th>Identificação <i class="fas fa-chevron-down"></i></th>
    <th>Cidade/UF</th> 
    <th>CEP</th>
    <th>Data de Abertura</th>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
  <tr>
  <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
    <td>Curitiba/PR</td>
    <td>80.320-320</td>
    <td>08/2020</td>
    <td><i class="fas fa-ellipsis-v"></i></td>
  </tr>
</table>
  <form action="">
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
<footer><span><i class="fas fa-plus"></i></span></footer> 
</div>
    )
}

export default ListarEmpresas
