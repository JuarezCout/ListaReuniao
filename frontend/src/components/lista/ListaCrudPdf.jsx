import React, { Component, useState, useEffect } from 'react'
import './ListaCrudPdf.css'
import csspdf from './ListaCrudPdf.css'
import axios from 'axios'
import Main from '../templates/Main'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import header_img from "../../assets/imgs/header.PNG"
import html2pdf from 'html2pdf.js'

const headerProps = {
	icon: 'listas',
	title: 'Exibição de Lista para PDF',
}

const baseUrl = 'http://localhost:3001/listas'


export default ListaCrudPdf;

function ListaCrudPdf() {

	document.title = "Listas para Reuniões"

	const [inputListas, setInputLista] = useState(
		[]
	);

	let listas = [1, 2]

	useEffect(async () => {
		console.log("Eae")
		await testAxios()

	}, []);

	function setDate() {
		var n = new Date();
		var y = n.getFullYear();
		var m = n.getMonth() + 1;
		if (m < 10) m = "0" + m
		var d = n.getDate();
		if (d < 10) d = "0" + d
		var data = d + "/" + m + "/" + y

		return data
	}

	function goBack() {
		window.localStorage.setItem("voltar", 1)
	}

	function indexaId(nomeId, id_l, id_s) {
		return nomeId + id_l.toString() + id_s.toString();
	}

	function ifEnsaio(inputListas, index_l, index_s) {
		if (inputListas[inputListas.length - 1].localidades[index_l].servicos[index_s].nome === "ENSAIO REGIONAL") {
			return "ENCARREGADO/ANCIÃO"
		} else {
			return "ANCIÃO"
		}
	}

	function ifNegrito(negrito, index) {
		if (negrito && index) {
			document.getElementById(index).style.fontWeight = "bolder"
		}
	}


	function testAxios() {
		const url = 'http://localhost:3001/listas'

		axios(url)
			.catch(error => console.error('Error:', error))
			.then(response =>
				setInputLista(response.data)
			)

	}

	function printPDF() {

		var style = "<style>";
		style = style + "td, th {    text-align: left;    font-size: 14px;    word-wrap: break-word;    text-align: center;    padding: 0;  }"
		style = style + "#localidade {    font-size: 30px;    border: 3px solid black;}"
		style = style + "#servico {    font-size: 17px;    width: 400px;    border: 1px solid black;}"
		style = style + "#diversos {    font-size: 23px;    border: 1px solid black;}"
		style = style + "#reuniao {    border: 1px solid black;}"
		style = style + "#obs {  white-space: pre-wrap;  word-wrap: break-word;  word-break: break-all;  white-space: normal;  display:block;  border: 1px solid black; font-size: 15px;}"
		style = style + "header_css { width: 400px;, margin-left: 0px;  align-content: center;  align-items: center;  align-self: center;}"
		style = style + "table {    padding: 5px;    width: 400px;    margin: 0;    border-collapse: collapse;  }"
		style = style + "#head1 {  font-weight: bolder;    font-size: 18px;    text-decoration:underline ;    text-align: center;  }"
		style = style + "#head2 {  text-align: center;    font-size: 12px;  }"
		style = style + "#head3 {  text-align: center;    font-size: 15px;    font-weight: bolder;  }"
		style = style + "#head4 {  text-align: center;    font-size: 15px;    font-weight: bolder;  }"
		style = style + "</style>";

		var divContents = document.getElementById("toPdf").outerHTML;
		console.log(divContents)
		var printWindow = window.open('', '', 'height=1024,width=1024');

		printWindow.document.write('<html><head>');
		//printWindow.document.write(fileref);
		printWindow.document.write(style)
		//printWindow.document.getElementsByTagName("head")[0].appendChild(fileref);
		printWindow.document.write('</head><body >');
		printWindow.document.write(divContents);
		printWindow.document.write('</body></html>');
		printWindow.document.close();
		printWindow.print();
		console.log(printWindow.innerWidthV)
	}

	//Função para renderização do conteudo
	function renderForm() {

		console.log("Listaass", inputListas)
		if (inputListas.length > 2) {
			return (
				<Container >
					<Row id="toPdf">
						{listas.map((lista, id) => (

							<Col xs='6' id="col_c">
								<table>
									<thead>
										<tr>
											<div id="header_css">
												<div id="head1">CONGREGAÇÃO CRISTÃ NO BRASIL</div >
												<div id="head2">Rua Pastor Samuel Munguba, 1000 - Fortaleza/CE- Fone: (85) 3223-8082</div >
												<div id="head3">{inputListas[inputListas.length - 1].nome} - {inputListas[inputListas.length - 1].data} </div >
												<div id="head4">Lista de Batismos, Santas Ceias e Diversos</div >
											</div>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												{inputListas[inputListas.length - 1] && inputListas[inputListas.length - 1].localidades.map((inputLocalidade, index_l) => (
													<table>
														<thead>
															<tr>
																<th id='localidade'>
																	{inputLocalidade.nome}
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>

																	{inputLocalidade.servicos && inputLocalidade.servicos.map((inputServico, index_s) => (
																		<table>
																			<thead>
																				<tr>
																					<th id='servico'>{inputServico.nome}</th>
																				</tr>
																			</thead>

																			<tbody >
																				<tr>
																					<td>
																						<table>
																							<thead>
																								<tr>
																									<th id='reuniao'>DATA</th>
																									<th id='reuniao'>DIA</th>
																									<th id='reuniao'>HORA</th>
																									<th id='reuniao'>LOCAL</th>
																									<th id='reuniao_anc'>{ifEnsaio(inputListas, index_l, index_s)}</th>
																								</tr>
																							</thead>

																							<tbody>

																								{inputServico.reunioes && inputServico.reunioes.map((inputReuniao, index_r) => (
																									<tr>
																										<td>{inputReuniao.data.charAt(8) + inputReuniao.data.charAt(9) + "/" + inputReuniao.data.charAt(5) + inputReuniao.data.charAt(6)}</td>
																										<td>{inputReuniao.dia}</td>
																										<td>{inputReuniao.hora}</td>
																										<td>{inputReuniao.local}</td>
																										<td>{inputReuniao.anciao}</td>
																									</tr>
																								))}
																							</tbody>
																						</table>

																					</td>
																				</tr>
																			</tbody>
																		</table>
																	))}
																	<br />
																	<table>
																		<thead>
																			<tr>
																				<th id='diversos'>DIVERSOS</th>
																			</tr>
																		</thead>

																		<tbody>
																			<tr>
																				<td>
																					{inputLocalidade.diversos[0].obs && inputLocalidade.diversos[0].obs.map((inputObs, index_o) => (
																						<container>
																							<br />
																							<div id="obs">
																								<a id={indexaId("obs", index_o, 0)}> {inputObs.text_obs} </a>
																							</div>
																							{/* <div>
																								{ifNegrito(inputObs.negrito, indexaId("obs", index_o, 0))}
																							</div> */}
																						</container>
																					))}
																					<br />

																					{inputLocalidade.diversos[0].servicos_extras && inputLocalidade.diversos[0].servicos_extras.map((inputServicoExtra, index_se) => (
																						<container>
																							<table>
																								<thead>
																									<tr>
																										<th id='servico'>{inputServicoExtra.nome}</th>
																									</tr>
																								</thead>

																								<tbody>
																									<tr>
																										<td>
																											<table>
																												<thead>
																													<tr>
																														<th id='reuniao'>DATA</th>
																														<th id='reuniao'>DIA</th>
																														<th id='reuniao'>HORA</th>
																														<th id='reuniao'>LOCAL</th>
																													</tr>
																												</thead>

																												<tbody>
																													{inputServicoExtra.reunioes_extras && inputServicoExtra.reunioes_extras.map((inputReuniaoExtra, index_re) => (
																														<tr>
																															<td id='reuniao'>{inputReuniaoExtra.data.charAt(8) + inputReuniaoExtra.data.charAt(9) + "/" + inputReuniaoExtra.data.charAt(5) + inputReuniaoExtra.data.charAt(6)}</td>
																															<td id='reuniao'>{inputReuniaoExtra.dia}</td>
																															<td id='reuniao'>{inputReuniaoExtra.hora}</td>
																															<td id='reuniao'>{inputReuniaoExtra.local}</td>
																														</tr>
																													))}
																												</tbody>
																											</table>
																										</td>
																									</tr>
																								</tbody>
																							</table>

																							<div id="obs_se">
																								{inputServicoExtra.obs && inputServicoExtra.obs.map((inputObs, index_o) => (
																									<div>
																										{inputObs.text_obs}
																									</div>
																								))}
																							</div>
																						</container>


																					))}
																					<br />
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>

												))}
											</td>

										</tr>
									</tbody>
								</table>

							</Col>

						))}
					</Row>

					<Row>
						<Col x="4">
							<a onClick={goBack()} href="javascript:history.back()" class="btn btn-warning">Voltar</a>
						</Col>
						<Col x="4">
							<button class="btn btn-success" onClick={printPDF}>Download</button>
						</Col>
						<Col x="4">
						</Col>
					</Row>

				</Container>



			)
		}





	}




	return (
		<Main {...headerProps}>
			{renderForm()}
		</Main>
	)

}
