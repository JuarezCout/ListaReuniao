import React, { Component, useState, useEffect } from 'react'
import './ListaCrudPdf.css'
import csspdf from '../printPdf.css'
import axios from 'axios'
import Main from '../templates/Main'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import header_img from "../../assets/imgs/header.PNG"

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


	function testAxios() {
		const url = 'http://localhost:3001/listas'

		axios(url)
			.catch(error => console.error('Error:', error))
			.then(response =>
				setInputLista(response.data)
			)

	}

	function printPDF() {

		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", csspdf);
		console.log(fileref)

		var divContents = document.getElementById("toPdf").innerHTML;
		var printWindow = window.open('', '', 'height=400,width=800');
		printWindow.document.write('<html><head>');
		printWindow.document.write(fileref);
		printWindow.document.getElementsByTagName("head")[0].appendChild(fileref);
		printWindow.document.write('</head><body >');
		printWindow.document.write(divContents);
		printWindow.document.write('</body></html>');
		printWindow.document.close();
		printWindow.print();
		console.log(printWindow)
	}

	//Função para renderização do conteudo
	function renderForm() {

		console.log("Listaass", inputListas)
		if (inputListas.length > 2) {
			return (
				<Container id="toPdf">
					<Row>
						{listas.map((lista, id) => (

							<Col xs='6'>
								<table>
									<thead>
										<tr>
											<div>
												<div id="head1">CONGREGAÇÃO CRISTÃ NO BRASIL</div >
												<div id="head2">Rua Pastor Samuel Munguba, 1000 - Fortaleza/CE- Fone: (85) 3223-8082</div >
												<div id="head3">Reunião Geral do Ministério Regional - {inputListas[inputListas.length - 1].data} </div >
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
																									<th id='reuniao'>ANCIAO</th>
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
																							<a id="obs"> {inputObs.text_obs} </a>
																						</container>
																					))}
																					<br />

																					{inputLocalidade.diversos[0].servicos_extras && inputLocalidade.diversos[0].servicos_extras.map((inputServicoExtra, index_se) => (
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
																														<td>{inputReuniaoExtra.data.charAt(8) + inputReuniaoExtra.data.charAt(9) + "/" + inputReuniaoExtra.data.charAt(5) + inputReuniaoExtra.data.charAt(6)}</td>
																														<td>{inputReuniaoExtra.dia}</td>
																														<td>{inputReuniaoExtra.hora}</td>
																														<td>{inputReuniaoExtra.local}</td>
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
						<Col>
							<button class="btn-btn-success" onClick={printPDF}>Download</button>
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
