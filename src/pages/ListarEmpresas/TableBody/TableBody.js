import React, {useState, useRef} from 'react'
import '../ListarEmpresas.css'
const TableBody = () => {
    
const dropdownRef = useRef(null);
const [isActive, setIsActive] = useState(false);
    return (
    <tr>
      <td id="name"><span id="icon"><i class="fas fa-user"></i></span><div id="line">Facebook Inc.<br/><span>31.425.024/0001-16</span></div></td>
       <td>Curitiba/PR</td>
      <td>80.320-320</td>
      <td>08/2020</td>
      <td onClick={() => setIsActive(!isActive)}>
      <ul>
      <li><i ref={dropdownRef} class="fas fa-ellipsis-v"></i></li>
     </ul>
      </td>
      <ul  className={`dropdown ${isActive ? 'active' : 'inactive'}`} >
      <li className="dropdown-items">Editar</li>
      <li className="dropdown-items">Inativar</li>
      </ul>

  </tr>
    )
}

export default TableBody
