import React from 'react'
import './CadastrarEmpresas.css'
const CadastrarEmpresas = () => {
    return (
        <div className="cadastro">
            <div id="title">
                <h1><span><i class="fas fa-chevron-left"></i> Empresas/</span>Cadastrar Empresa</h1>
            <button type="submit">Salvar</button>
            </div>
            <section className="docsSection">
                <div id="photo">
                <label for="photoUser"><i class="fas fa-user-circle"></i></label><input id="photoUser" type="file" name="photo"/></div>
                <div className="docs">
                <label for="typeOfDocs">Tipo de Documento</label>
                <select style={{width: "150px"}} id="typeOfDocs" name="typeOfDocs">
                <option value="cpf">CPF</option>
                <option value="cnpj">CNPJ</option>
</select>
      <input type="text" name="doc" style={{width: "200px"}} placeholder="Documento" />
      <input type="text" name="nome/rs" style={{width: "300px"}} placeholder="Nome Completo/Razão Social" />
      <input type="email" name="email" placeholder="E-mail" />

                </div>
</section>
            <section className="endereSection">
                <h2>Endereço</h2>
                <div className="endere">
                <input type="text" name="cep" style={{width: "300px"}} placeholder="CEP" />
                <input type="text" name="end" style={{width: "500px"}} placeholder="Endereço" />
                <input type="text" style={{width: "150px"}} name="num" placeholder="Número" />
                <input type="text" style={{width: "150px"}} name="comple" placeholder="Complemento" />
                <input type="text" style={{width: "150px"}} name="bairro" placeholder="Bairro" />
                <select id="uf" style={{width: "150px"}} name="uf">
                <option value="vazio">UF</option>
                <option value="acre">AC</option>
                <option value="alagoas">AL</option>
                <option value="amapa">AP</option>
                <option value="amazonas">AM</option>
                <option value="bahia">BA</option>
                <option value="ceara">CE</option>
                <option value="distritoFederal">DF</option>
                <option value="espiritoSanto">ES</option>
                <option value="goias">GO</option>
                <option value="maranhao">MA</option>
                <option value="matoGrosso">MT</option>
                <option value="matoGrossoS">MS</option>
                <option value="minasGerais">MG</option>
                <option value="para">PA</option>
                <option value="paraiba">PB</option>
                <option value="parana">PR</option>
                <option value="pernambuco">PE</option>
                <option value="piaui">PI</option>
                <option value="rioJaneiro">RJ</option>
                <option value="rioGrandeNorte">RN</option>
                <option value="rioGrandeSul">RS</option>
                <option value="rondonia">RO</option>
                <option value="roraima">RR</option>
                <option value="santaCatarina">SC</option>
                <option value="saoPaulo">SP</option>
                <option value="sergipe">SE</option>
                <option value="tocantis">TO</option>
</select>
                <input type="text" name="cidade" placeholder="Cidade" />
                </div>
            </section>
        </div>
    )
}

export default CadastrarEmpresas
