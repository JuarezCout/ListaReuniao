import React, { Component, useState, useEffect } from 'react'
import './ListaCrud.css'
import axios from 'axios'
import Main from '../templates/Main'
import Localidade from '../localidade/Localidade'
import Servicos from '../localidade/servico/Servico'
import Reunioes from '../localidade/servico/reunioes/Reunioes'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const headerProps = {
    icon: 'listas',
    title: 'Listas Anteriores',
    subtitle: 'Cadastro de Listas: Incluir, Listar, Alterar e Excluir!'
}



export default ListaCrud;
//export default class listaCrud extends Component {
function ListaCrud() {

    document.title = "Listas para Reuniões"

    //Adicionar um get da base de listas e atribuir um id novo para a lista nova, corrigindo o useEffect para PUT ou POST

    const [inputListas, setInputLista] = useState(
        [{ id: 1, data: setDate(), localidades: [] }]
    );

    const baseUrl = 'http://localhost:3001/listas'




    useEffect(() => {

        let values = { ...inputListas };
        console.log(values)
        var obj = JSON.stringify(values[0])
        console.log(obj)

        /* fetch('http://localhost:3001/listas/1', {
            method: 'post',
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', JSON.stringify(response))) */

        //const method = user.id ? 'put' : 'post'

        const method = values[0].id ? 'put' : 'post'
        const url = values[0].id ? `${baseUrl}/${values[0].id}` : baseUrl

        axios[method](url, obj)
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response.data))
    });

    //Funções para uso de dados aleatorios
    /* function previewImage() {
        pdffile=document.getElementById("uploadPDF").files[0];
        pdffile_url=URL.createObjectURL(pdffile);
        $('#viewer').attr('src',pdffile_url);
    } */

    function setDate() {
        var n = new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        var d = n.getDate();
        var data = d + "/" + m + "/" + y

        return data
    }


    function indexaId(nomeId, id_l, id_s) {
        return nomeId + id_l.toString() + id_s.toString();
    }

    //Funções para botões do campo Localidade
    function handleAddLocalidade(nome) {
        let values = { ...inputListas };
        values[0].localidades.push({ nome: nome, servicos: [], diversos: [{ servicos_extras: [], obs: [] }] })
        setInputLista(values)
        document.getElementById("local").value = ''
    }

    function handleRemoveLocalidade(index_l) {
        let values = { ...inputListas };
        values[0].localidades.splice(index_l, 1);
        setInputLista(values)
    }

    function handleEditLocalidade(index_l) {

    }

    //Funções para botões do campo Serviço
    function handleAddServico(nome, index_l) {
        let values = { ...inputListas };
        values[0].localidades[index_l].servicos.push({ nome: nome, reunioes: [] })
        setInputLista(values)
    }

    function handleRemoveServico(index_l, index_s) {
        let values = { ...inputListas }
        values[0].localidades[index_l].servicos.splice(index_s, 1)
        setInputLista(values)
    }

    function handleEditServico(index_l, index_s) {

    }

    //Funções para botões do campo Diversos
    function handleAddObservacao(text_obs, index_l) {
        let values = { ...inputListas };
        values[0].localidades[index_l].diversos[0].obs.push({ text_obs: text_obs })
        setInputLista(values)
        document.getElementById(indexaId("text_obs", index_l, 0)).value = ''
    }

    function handleAddServicoExtra(nome, index_l) {
        let values = { ...inputListas };
        values[0].localidades[index_l].diversos[0].servicos_extras.push({ nome: nome, reunioes_extras: [] })
        setInputLista(values)
        document.getElementById("nome_reuniao").value = ''
    }

    function handleAddReuniaoExtra(data, dia, hora, local, index_l, index_se) {
        let values = { ...inputListas };
        values[0].localidades[index_l].diversos[0].servicos_extras[index_se].reunioes_extras.push({ data: data, dia: dia, hora: hora, local: local })
        setInputLista(values)
        document.getElementById(indexaId("data_reuniao_e", index_l, index_se)).value = ''
        document.getElementById(indexaId("dia_reuniao_e", index_l, index_se)).value = ''
        document.getElementById(indexaId("hora_reuniao_e", index_l, index_se)).value = ''
        document.getElementById(indexaId("local_reuniao_e", index_l, index_se)).value = ''
    }

    function handleRemoveObservacao(index_l, index_o) {
        let values = { ...inputListas }
        values[0].localidades[index_l].diversos[0].obs.splice(index_o, 1)
        setInputLista(values)
    }

    function handleRemoveServicoExtra(index_l, index_se) {
        let values = { ...inputListas }
        values[0].localidades[index_l].diversos[0].servicos_extras.splice(index_se, 1)
        setInputLista(values)

    }

    function handleRemoveReuniaoExtra(index_l, index_se, index_re) {
        let values = { ...inputListas }
        values[0].localidades[index_l].diversos[0].servicos_extras[index_se].reunioes_extras.splice(index_re, 1)
        setInputLista(values)
    }

    function handleEditDiverso(index_l, index_s) {

    }


    //Funções para botões do campo Reunião 
    function handleAddReuniao(data, dia, hora, local, anciao, index_l, index_s) {
        let values = { ...inputListas };
        values[0].localidades[index_l].servicos[index_s].reunioes.push({
            data: data,
            dia: dia,
            hora: hora,
            local: local,
            anciao: anciao
        })
        setInputLista(values)
        document.getElementById(indexaId("data_reuniao", index_l, index_s)).value = ''
        document.getElementById(indexaId("dia_reuniao", index_l, index_s)).value = ''
        document.getElementById(indexaId("hora_reuniao", index_l, index_s)).value = ''
        document.getElementById(indexaId("local_reuniao", index_l, index_s)).value = ''
        document.getElementById(indexaId("anciao_reuniao", index_l, index_s)).value = ''
    }

    function handleRemoveReuniao(index_l, index_s, index_r) {
        let values = { ...inputListas }
        values[0].localidades[index_l].servicos[index_s].reunioes.splice(index_r, 1)
        setInputLista(values)
    }

    function handleEditReuniao(index_l, index_s, index_r) {

    }


    //Função para renderização do conteudo
    function renderForm() {
        var date = setDate()


        return (
            <Container className="form">


                <Row>
                    <Col xs="6" className="form-group">
                        <h1>Reunião do dia: {date}</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs="8" className="form-group">
                        <label htmlFor="local">Localidade</label>
                        <input type="text" className="form-control" id="local" />
                    </Col>
                    <Col xs="4" className="form-group">
                        <button className="btn btn-primary"
                            onClick={e => handleAddLocalidade(document.getElementById("local").value)}>
                            Adicionar
                        </button>
                    </Col>
                </Row>

                {inputListas[0].localidades && inputListas[0].localidades.map((inputLocalidade, index_l) => (

                    <div className="container">
                        {/*     <Localidade data={[inputLocalidade, index_l] } setInputLista={setInputLista}>
                        {inputLocalidade.servicos && inputLocalidade.servicos.map((inputServico, index_s) => (
                            <Servicos data={[inputServico, index_l, index_s]} setInputLista={setInputLista}>
                                {inputServico.reunioes && inputServico.reunioes.map((inputReuniao, index_r) => (
                                    <Reunioes data= {[inputReuniao, index_l, index_s, index_r]} setInputLista={setInputLista}>
                                    </Reunioes>
                                ))}
                            </Servicos>
                        ))}
                    </Localidade> */}



                        <hr />

                        <div className="row">
                            <div className="col-8">
                                <div className="form-group" key={index_l}>
                                    <h2>{inputLocalidade.nome}</h2>
                                </div>
                            </div>
                            <div className="col-4 col-sm-2">
                                <i className="fa fa-trash" onClick={() => handleRemoveLocalidade(index_l)}></i>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <div className="form-group">
                                    <select className="form-select" name="servicos" id="servicos">
                                        <option value="Batismo">Batismo</option>
                                        <option value="Santa Ceia">Santa Ceia</option>
                                        <option value="Reunião de Mocidade">Reunião de Mocidade</option>
                                        <option value="Reunião de Jovens e Menores com os Pais">Reunião de Jovens e Menores com os Pais</option>
                                        <option value="Ensaio Regional">Ensaio Regional</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-4">
                                <i className="fa fa-plus" onClick={() => handleAddServico(document.getElementById("servicos").value, index_l)}></i>
                            </div>
                        </div>


                        {inputLocalidade.servicos && inputLocalidade.servicos.map((inputServico, index_s) => (
                            <div className="container">

                                <hr />

                                <div className="row" key={index_s}>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <h3>{inputServico.nome}</h3>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-2">
                                        <i className="fa fa-trash" onClick={() => handleRemoveServico(index_l, index_s)}></i>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-1">
                                        <p>Data</p>
                                    </div>
                                    <div className="col-1">
                                        <p>Dia</p>
                                    </div>
                                    <div className="col-2">
                                        <p>Hora</p>
                                    </div>
                                    <div className="col-4">
                                        <p>Localidade</p>
                                    </div>
                                    <div className="col-3">
                                        <p>Ancião</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-1">
                                        <input type="text" className="form-control" id={indexaId("data_reuniao", index_l, index_s)} />
                                    </div>
                                    <div className="col-1">
                                        <input type="text" className="form-control" id={indexaId("dia_reuniao", index_l, index_s)} />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id={indexaId("hora_reuniao", index_l, index_s)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" id={indexaId("local_reuniao", index_l, index_s)} />
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id={indexaId("anciao_reuniao", index_l, index_s)} />
                                    </div>
                                    <div className="col-1">
                                        <i className="fa fa-plus" onClick={() => handleAddReuniao(document.getElementById(indexaId("data_reuniao", index_l, index_s)).value,
                                            document.getElementById(indexaId("dia_reuniao", index_l, index_s)).value,
                                            document.getElementById(indexaId("hora_reuniao", index_l, index_s)).value,
                                            document.getElementById(indexaId("local_reuniao", index_l, index_s)).value,
                                            document.getElementById(indexaId("anciao_reuniao", index_l, index_s)).value,
                                            index_l, index_s)}></i>
                                    </div>
                                </div>

                                {inputServico.reunioes && inputServico.reunioes.map((inputReuniao, index_r) => (
                                    <div className="container">
                                        <hr />
                                        <div className="row" key={index_r}>
                                            <div className="col-1">
                                                <label>{inputReuniao.data}</label>
                                            </div>
                                            <div className="col-1">
                                                <label>{inputReuniao.dia}</label>
                                            </div>
                                            <div className="col-2">
                                                <label>{inputReuniao.hora}</label>
                                            </div>
                                            <div className="col-4">
                                                <label>{inputReuniao.local}</label>
                                            </div>
                                            <div className="col-3">
                                                <label>{inputReuniao.anciao}</label>
                                            </div>

                                            <div className="col-1">
                                                <i className="fa fa-pencil" onClick={() => handleEditReuniao(index_l, index_s, index_r)}></i>
                                                <i className="fa fa-trash" onClick={() => handleRemoveReuniao(index_l, index_s, index_r)}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <hr />

                        <div className="row">
                            <div className="col-8">
                                <div className="form-group">
                                    <h3>Diversos</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <div className="form-group">
                                    <h4>Reuniões Extras</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <input type="text" className="form-control" id="nome_reuniao" />
                            </div>
                            <div className="col-4">
                                <i className="fa fa-plus" onClick={() => handleAddServicoExtra(document.getElementById("nome_reuniao").value, index_l)}></i>
                            </div>
                        </div>
                        {inputLocalidade.diversos[0].servicos_extras && inputLocalidade.diversos[0].servicos_extras.map((inputServicoExtra, index_se) => (

                            <div className="container">

                                <hr />

                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group" key={index_se}>
                                            <h3>{inputServicoExtra.nome}</h3>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-2">
                                        <i className="fa fa-trash" onClick={() => handleRemoveServicoExtra(index_l, index_se)}></i>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-1">
                                        <p>Data</p>
                                    </div>
                                    <div className="col-1">
                                        <p>Dia</p>
                                    </div>
                                    <div className="col-2">
                                        <p>Hora</p>
                                    </div>
                                    <div className="col-4">
                                        <p>Localidade</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-1">
                                        <input type="text" className="form-control" id={indexaId("data_reuniao_e", index_l, index_se)} />
                                    </div>
                                    <div className="col-1">
                                        <input type="text" className="form-control" id={indexaId("dia_reuniao_e", index_l, index_se)} />
                                    </div>
                                    <div className="col-2">
                                        <input type="text" className="form-control" id={indexaId("hora_reuniao_e", index_l, index_se)} />
                                    </div>
                                    <div className="col-4">
                                        <input type="text" className="form-control" id={indexaId("local_reuniao_e", index_l, index_se)} />
                                    </div>
                                    <div className="col-1">
                                        <i className="fa fa-plus" onClick={() => handleAddReuniaoExtra(
                                            document.getElementById(indexaId("data_reuniao_e", index_l, index_se)).value,
                                            document.getElementById(indexaId("dia_reuniao_e", index_l, index_se)).value,
                                            document.getElementById(indexaId("hora_reuniao_e", index_l, index_se)).value,
                                            document.getElementById(indexaId("local_reuniao_e", index_l, index_se)).value,
                                            index_l, index_se)}></i>
                                    </div>
                                </div>

                                <hr />

                                {inputServicoExtra.reunioes_extras && inputServicoExtra.reunioes_extras.map((inputReuniaoExtra, index_re) => (
                                    <div className="container">
                                        <div className="row" key={index_re}>
                                            <div className="col-1">
                                                <label>{inputReuniaoExtra.data}</label>
                                            </div>
                                            <div className="col-1">
                                                <label>{inputReuniaoExtra.dia}</label>
                                            </div>
                                            <div className="col-2">
                                                <label>{inputReuniaoExtra.hora}</label>
                                            </div>
                                            <div className="col-4">
                                                <label>{inputReuniaoExtra.local}</label>
                                            </div>

                                            <div className="col-1">
                                                <i className="fa fa-pencil" onClick={() => handleEditReuniao(index_l, index_se, index_re)}></i>
                                                <i className="fa fa-trash" onClick={() => handleRemoveReuniao(index_l, index_se, index_re)}></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}

                        <hr />

                        <div className="row">
                            <div className="col-8">
                                <div className="form-group">
                                    <h4>Observações</h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-8">
                                <input type="text" className="form-control" id={indexaId("text_obs", index_l, 0)} />
                            </div>
                            <div className="col-4">
                                <i className="fa fa-plus" onClick={() => handleAddObservacao(document.getElementById(indexaId("text_obs", index_l, 0)).value, index_l)}></i>
                            </div>
                        </div>


                        {inputLocalidade.diversos[0].obs && inputLocalidade.diversos[0].obs.map((inputObservacao, index_o) => (
                            <div className="container">
                                <br />
                                <div className="row">
                                    <div className="col-12">
                                        {inputObservacao.text_obs}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <br />
                <br />
                <br />
                <br />
                <br />


                <Row>
                    <div className="col-md-4 text-center">
                        <Link to="/listas/pdf">
                            <a class="btn btn-danger">Gerar PDF</a>
                        </Link>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="/" class="btn btn-warning">Voltar</a>
                    </div>
                    <div className="col-md-4 text-center">
                        <a href="/lista-pdf" class="btn btn-success">Salvar Lista</a>
                    </div>
                </Row>

            </Container >
        )
    }


    return (
        <Main {...headerProps}>
            {renderForm()}
        </Main>
    )

}
