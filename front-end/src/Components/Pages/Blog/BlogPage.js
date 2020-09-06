/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { AnimatePresence } from 'framer-motion';

// components
import Header from '../../Layout/Header';
import Preloader from '../../Layout/Preloader';

const BlogPage = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});
	const [image, setImage] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'IEEE| BLog';

		axios
			.get(
				`https://sleepy-falls-48407.herokuapp.com/blog-posts/${id}`
			)
			.then((res) => {
				setPost(res.data);
				setImage(res.data.cover[0].url);
				setLoading(false);
			});
	}, []);

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
											<strong>{post.title}</strong>
										</h1>

										<div className='row'>
											<div className='col-md-12 col-xl-12 d-flex justify-content-center'>
												<p className='font-small dark-grey-text mb-1'>
													<strong>Author:</strong> {post.author}
												</p>

												<p className='font-small grey-text mb-0 ml-3'>
													<Moment fromNow from={post.date} />
												</p>
											</div>
										</div>

										<div className='row pt-5'>
											<div className='col-md-12 col-xl-12'>
												<form>
													<div className='row mt-3'>
														{/* <ReactMarkdown source={post.content} /> */}
														{/* <MDReactComponent text="Some **bold** and *italic* texts" />    */}
														<MarkdownPreview
															source={post.content}
															disallowedTypes={[
																'image',
																'code',
																'list',
															]}
														/>
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
