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

	const [inputListas, setInputLista] = useState(
		[{ data: setDate(), localidades: [] }]
	);

	useEffect(() => {

		testAxios()

	}, []);

	function setDate() {
		var n = new Date();
		var y = n.getFullYear();
		var m = n.getMonth() + 1;
		var d = n.getDate();
		var data = d + "/" + m + "/" + y

		return data
	}

	

	async function axiosTest() {
		const url = 'http://localhost:3001/listas'
		const response = await axios.get(url)

		console.log(response.data[23])
		
		return response.then(dados => dados.data[23])
	}

	function testAxios() {
		const url = 'http://localhost:3001/listas'

		axios(url)
			.catch(error => console.error('Error:', error))
			.then(response => 
				response.data[response.data.length - 1]
			) 
			.then(response => 
				console.log("response", response)
				//setInputLista(response)
			) 

	}

	//Função para renderização do conteudo
	function renderForm() {

		console.log("Eae")

		return (
		<Container>
				{/* {/*  */}
				<Row>
					<Col>
						<p>EAEEE</p>
					</Col>
				</Row>
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
										{inputListas && inputListas.localidades.map((inputLocalidade, index_l) => (
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

																	<tbody  >
																		<tr>
																			<td>
																				{inputServico.reunioes && inputServico.reunioes.map((inputReuniao, index_r) => (
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
																								<td>{inputReuniao.data}</td>
																								<td>{inputReuniao.dia}</td>
																								<td>{inputReuniao.hora}</td>
																								<td>{inputReuniao.local}</td>
																								<td>{inputReuniao.anciao}</td>
																							</tr>
																						</tbody>
																					</table>
																				))}
																			</td>
																		</tr>
																	</tbody>
																</table>
															))}
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
																				<p id='obs'>{inputObs.text_Obs}</p>
																			))}

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
																								{inputServicoExtra.reunioes_extras && inputServicoExtra.reunioes_extras.map((inputReuniaoExtra, index_re) => (
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
																												<td>{inputReuniaoExtra.data}</td>
																												<td>{inputReuniaoExtra.dia}</td>
																												<td>{inputReuniaoExtra.hora}</td>
																												<td>{inputReuniaoExtra.local}</td>
																											</tr>
																										</tbody>
																									</table>
																								))}
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			))}
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
										{inputListas && inputListas.localidades.map((inputLocalidade, index_l) => (
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

																	<tbody  >
																		<tr>
																			<td>
																				{inputServico.reunioes && inputServico.reunioes.map((inputReuniao, index_r) => (
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
																								<td>{inputReuniao.data}</td>
																								<td>{inputReuniao.dia}</td>
																								<td>{inputReuniao.hora}</td>
																								<td>{inputReuniao.local}</td>
																								<td>{inputReuniao.anciao}</td>
																							</tr>
																						</tbody>
																					</table>
																				))}
																			</td>
																		</tr>
																	</tbody>
																</table>
															))}
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
																				<p id='obs'>{inputObs.text_Obs}</p>
																			))}

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
																								{inputServicoExtra.reunioes_extras && inputServicoExtra.reunioes_extras.map((inputReuniaoExtra, index_re) => (
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
																												<td>{inputReuniaoExtra.data}</td>
																												<td>{inputReuniaoExtra.dia}</td>
																												<td>{inputReuniaoExtra.hora}</td>
																												<td>{inputReuniaoExtra.local}</td>
																											</tr>
																										</tbody>
																									</table>
																								))}
																							</td>
																						</tr>
																					</tbody>
																				</table>
																			))}
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
