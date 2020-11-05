import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import Main from '../templates/Main'
import { Container, Row, Col } from 'reactstrap';

const headerProps = {
    icon: 'listas',
    title: 'Listas Anteriores',
    subtitle: 'Cadastro de Listas: Incluir, Listar, Alterar e Excluir!'
}

const baseUrl = 'http://localhost:3001/listas'


export default ListaCrud;
//export default class listaCrud extends Component {
function ListaCrud() {

    const [inputListas, setInputLista] = useState(
        [{ data: '2020-10-31', localidades: [] }]
    );
    const [inputLocalidades, setInputLocalidade] = useState(
        [{ nome: 'Fortaleza', servicos: [], diversos: [] }]
    );
    const [inputServicos, setInputServico] = useState(
        [{ nome: '', reunioes: [] }]
    );
    const [inputReunioes, setInputReuniao] = useState(
        [{ data: '', dia: '', hora: '', local: '', anciao: '' }]
    );
    const [inputDiversos, setInputDiverso] = useState(
        [{ nome: '', blocos: [] }]
    );
    const [inputBlocos, setInputBloco] = useState(
        [{ observacao: '', extras: [] }]
    );
    const [inputExtras, setInputExtra] = useState(
        [{ nome: '', reunioes_extras: [] }]
    );
    const [inputReunioesExtras, setInputReuniaoExtra] = useState(
        [{ data: '', dia: '', hora: '', local: '' }]
    );

    useEffect(() => {
        /*Realizar o FETCH*/
        console.log([{ ...inputLocalidades }].length)
    })

    function setDate() {
        var n = new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        var d = n.getDate();
        var data = d + "/" + m + "/" + y
        return data;
    }

    function handleAddLocalidade(nome) {
        let values = { ...inputListas };
        values[0].localidades = [...inputLocalidades, { nome: nome, servicos: [], diversos: [] }]

        setInputLocalidade([...inputLocalidades, { nome: nome, servicos: [], diversos: [] }])
        setInputLista(values)
    }

    function handleRemoveLocalidade(index) {
        let locais = [...inputLocalidades]
        let values = { ...inputListas };
        let loc = values[0].localidades;

        loc.splice(index, 1);
        locais.splice(index, 1);
        values[0].localidades = loc

        setInputLocalidade(locais);
        setInputLista(values)
    }

    function handleAddServico(nome) {

    

    }

    function handleRemoveServico(index){

    }
    function renderForm() {
        var state_lista = { ...inputListas }
        return (
            <Container className="form">
                <Row>
                    <Col xs="6" className="form-group">
                        <p id="data_lista">Data da Reuniäo</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="8" className="form-group">
                        <label>Localidade</label>
                        <input type="text" className="form-control" id="local" />

                    </Col>
                    <Col xs="4" className="form-group">
                        <button className="btn btn-primary"
                            onClick={e => handleAddLocalidade(document.getElementById("local").value)}>
                            Adicionar
                        </button>

                    </Col>
                </Row>

                <hr />

                {inputLocalidades.map((inputLocalidade, index_l) => (
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-md-8">
                                <div className="form-group" key={index_l}>
                                    <label>{inputLocalidade.nome}</label>
                                </div>
                            </div>
                            <div className="col-4 col-sm-2">
                                <i className="fa fa-trash" onClick={() => handleRemoveLocalidade(index_l)}></i>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4 col-md-8">
                                <div className="form-group">
                                    <select classname="form-select" name="servicos" id="servicos">
                                        <option value="bat">Batismo</option>
                                        <option value="sc">Santa Ceia</option>
                                        <option value="rm">Reunião de Mocidade</option>
                                        <option value="rdjp">Reunião de Jovens e Menores com os Pais</option>
                                        <option value="er">Ensaio Regional</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    {inputServicos.map((inputServico, index_s) => (
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-4 col-md-8">
                                                    <div className="form-group" key={index_s}>
                                                        <label>{inputServico.nome}</label>
                                                    </div>
                                                </div>
                                                <div className="col-4 col-sm-2">
                                                    <i className="fa fa-trash" onClick={() => handleRemoveServico(index_l)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-primary"
                                    onClick={e => handleAddServico(document.getElementById("servicos").value)}>
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </Container >

        )
    }




    return (
        <Main {...headerProps}>
            {renderForm()}
        </Main>
    )

}
