import React from 'react';
import Header from '../../Layout/Header';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown';

const BlogPage = () => {
	const input = `# website
  # A website for IEEE student branch in Zewail City
  `;
	const { id } = useParams();
	return (
		<>
			<Header image='https://mdbootstrap.com/img/Photos/Others/city7.jpg' />
			<main>
				<div className='container-fluid mb-5'>
					<div className='row' style={{ marginTop: '-100px' }}>
						<div className='col-md-12'>
							<div className='card hoverable pb-5 mx-md-3'>
								<div className='card-body'>
									<div className='container'>
										<h1 className='text-center h1 pt-4 mb-3'>
											<strong>Title of the news {id}</strong>
										</h1>

										<div className='row'>
											<div className='col-md-12 col-xl-12 d-flex justify-content-center'>
												<p className='font-small dark-grey-text mb-1'>
													<strong>Author:</strong> Jimmy Brown
												</p>

												<p className='font-small grey-text mb-0 ml-3'>
													<Moment fromNow from='2020/5/5' />
												</p>
											</div>
										</div>

										<div className='row pt-5'>
											<div className='col-md-12 col-xl-12'>
												<form>
													<div className='row mt-3'>
														<ReactMarkdown source={input} />
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

export default BlogPage;
