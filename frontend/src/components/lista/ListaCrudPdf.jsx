import React, { Component, useState, useEffect } from 'react'
import './ListaCrudPdf.css'
import axios from 'axios'
import Main from '../templates/Main'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import header_img from "../../assets/imgs/header.PNG"

const headerProps = {
    icon: 'listas',
    title: 'PDF',
    subtitle: 'dfbd'
}

const baseUrl = 'http://localhost:3001/listas'


export default ListaCrudPdf;

function ListaCrudPdf() {

    document.title = "Listas para Reuniões"


    useEffect(() => {
        /* 
                let values = { ...inputListas };
                console.log(values)
                var obj = JSON.stringify(values)
                console.log(obj)
        
                fetch('../../db_final.JSON', {
                    method: 'post',
                    body: obj
                })
                    .then(response => response.json())
                    .then(data => obj)
                //console.log(obj) */
    });



    //Função para renderização do conteudo
    function renderForm() {
        const url = 'http://localhost:3001/listas'

        axios(url)
            .catch(error => console.error('Error:', error))
            .then(response => {


//              let list = JSON.parse(response.data[0][1])

                console.log('reponse.data', response.data)
                console.log('reponse.data[0]', response.data[0])
                console.log('reponse.data[0]', response.data[0]["1"])
            })
            .then ( )



        return (
            <Container>
                <Row>
                    <Col xs='6'>
                        <table>
                            <thead>
                                <tr>
                                    <img src={header_img} alt="" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th id='localidade'>
                                                        LOCALIDADE
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th id='servico'>SERVICO X</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody  >
                                                                <tr>
                                                                    <td>
                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th id='reuniao'>DATA</th>
                                                                                    <th id='reuniao'>DIA</th>
                                                                                    <th id='reuniao'>HORA</th>
                                                                                    <th id='reuniao'>LOCAL</th>
                                                                                    <th id='reuniao'>ANCIAO</th>
                                                                                </tr>
                                                                            </thead>

                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>AERGAERG</td>
                                                                                    <td>GARAG</td>
                                                                                    <td>7552</td>
                                                                                    <td>REGAEGAER</td>
                                                                                    <td>ARGAREG</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AERGAERG</td>
                                                                                    <td>GARAG</td>
                                                                                    <td>7552</td>
                                                                                    <td>REGAEGAER</td>
                                                                                    <td>ARGAREG</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AERGAERG</td>
                                                                                    <td>GARAG</td>
                                                                                    <td>7552</td>
                                                                                    <td>REGAEGAER</td>
                                                                                    <td>ARGAREG</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th id='diversos'>DIVERSOS</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <p id='obs'>jjasvjasbvkjjabsjvbajsbrvkajksbvabsbvabsdcasjdvbasj vsak3bj</p>

                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th id='servico'>SERVICO EXTRA</th>
                                                                                </tr>
                                                                            </thead>

                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>
                                                                                        <table>
                                                                                            <thead>
                                                                                                <tr>
                                                                                                    <th>DATA</th>
                                                                                                    <th>DIA</th>
                                                                                                    <th>HORA</th>
                                                                                                    <th>LOCAL</th>
                                                                                                </tr>
                                                                                            </thead>

                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td>AERGAERG</td>
                                                                                                    <td>GARAG</td>
                                                                                                    <td>7552</td>
                                                                                                    <td>REGAEGAER</td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col xs='6'>
                        <table>
                            <thead>
                                <tr>
                                    <img src={header_img} alt="" />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>

                                                        LOCALIDADE
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>SERVICO X</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <table>
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>DATA</th>
                                                                                    <th>DIA</th>
                                                                                    <th>HORA</th>
                                                                                    <th>LOCAL</th>
                                                                                    <th>ANCIAO</th>
                                                                                </tr>
                                                                            </thead>

                                                                            <tbody>
                                                                                <tr>
                                                                                    <td>AERGAERG</td>
                                                                                    <td>GARAG</td>
                                                                                    <td>7552</td>
                                                                                    <td>REGAEGAER</td>
                                                                                    <td>ARGAREG</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>

                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>DIVERSOS</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        LOOP PPARA OBS E SERVICOS EXTRAS
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                    <td>
                                        <table>
                                            <thead>

                                            </thead>
                                            <tbody>

                                            </tbody>
                                        </table>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>

            </Container>

        )
    }


    return (
        <Main {...headerProps}>
            {renderForm()}
        </Main>
    )

}
