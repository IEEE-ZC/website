import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { AnimatePresence } from 'framer-motion';

// components
import Preloader from '../../Layout/Preloader';
import Header from '../../Layout/Header';
import { MAGAZINE } from '../../../EndPoints';

const MagazinePage = () => {
	const { id } = useParams();
	const [magazine, setMagazine] = useState({});
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'IEEE| Magazine';

		axios.get(`${MAGAZINE}/${id}`).then((res) => {
			setMagazine(res.data);
			setImage(res.data.cover.url);
			setLoading(false);
		});
	}, [id]);

	return (
		<>
			<AnimatePresence>{loading && <Preloader />}</AnimatePresence>
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
												<div className='row mt-3'>
													<MarkdownPreview
														source={magazine.content}
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
															src={magazine.url}
															allowFullScreen
														></iframe>
													</div>
												</div>
												<div className='row mt-3'>
													<a
														href={magazine.downlaod_url}
														className='w-100'
														download
													>
														<button
															className='btn btn-info waves-block w-100 p-4 font-weight-bold'
															style={{ fontSize: 18 }}
														>
															Download Magazine
														</button>
													</a>
												</div>
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
