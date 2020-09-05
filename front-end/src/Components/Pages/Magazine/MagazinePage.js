/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Header from '../../Layout/Header';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import MarkdownPreview from '@uiw/react-markdown-preview';

import axios from 'axios';

const MagazinePage = () => {
	const { id } = useParams();
	const [magazine, setMagazine] = useState({});
	const [image, setImage] = useState();

	useEffect(() => {
		axios
			.get(`https://sleepy-falls-48407.herokuapp.com/magazines/${id}`)
			.then((res) => {
				setMagazine(res.data);
				setImage(res.data.cover.url);
				console.log(res.data.createdAt);
			});
	}, []);

	return (
		<>
			<Header image={image} darken />
			<main>
				<div className='container-fluid mb-5'>
					<div className='row' style={{ marginTop: '-100px' }}>
						<div className='col-md-12'>
							<div className='card hoverable pb-5 mx-md-3'>
								<div className='card-body'>
									<div className='container'>
										<h1 className='text-center h1 pt-4 mb-3'>
											<strong className='text-capitalize'>
												{magazine.title}
											</strong>
										</h1>

										<div className='row'>
											<div className='col-md-12 col-xl-12 d-flex justify-content-center'>
												<p className='font-small grey-text mb-0 ml-3'>
													<Moment
														date={magazine.createdAt}
														toNow
														format='D MMM Y'
													/>
												</p>
											</div>
										</div>

										<div className='row pt-5'>
											<div className='col-md-12 col-xl-12'>
												<form>
													<div className='row mt-3'>
														<MarkdownPreview
															source='## hello world
															#### hello world
															#### hello world
															#### hello world
															#### hello world
															#### hello world
															#### hello world
															#### hello world
															'
															disallowedTypes={[
																'image',
																'code',
																'list',
															]}
														/>
													</div>

													<div className='row mt-3'>
														<div className='embed-responsive embed-responsive-16by9 mb-4'>
															<iframe
																className='embed-responsive-item'
																title='htmlflip5'
																src='https://online.fliphtml5.com/nnxzj/rsiq/#p=1 '
																allowFullScreen
															></iframe>
														</div>
													</div>
													<div className='row mt-3'>
														<button className='btn btn-info waves-block'>
															Download Magazine
														</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default MagazinePage;
