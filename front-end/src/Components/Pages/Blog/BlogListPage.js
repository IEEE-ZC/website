import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Header from '../../Layout/Header';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// some fake (hard) coded
// const posts = [
// 	{
// 		title: 'hello world',
// 		content: 'lorem ipsum dolor sit amet',
// 		author: 'devien geroge',
// 		date: '2020/5/2',
// 	},
// 	{
// 		title: 'hello world2',
// 		content: 'lorem ipsum dolor sit amet',
// 		author: 'devien ddddsss',
// 		date: '2020/1/2',
// 	},
// 	{
// 		title: 'hello world2',
// 		content: 'lorem ipsum dolor sit amet',
// 		author: 'devien aa',
// 		date: '2020/7/2',
// 	},
// ];

const BlogListPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:1337/blog-posts')
			.then((res) => setPosts(res.data));
	}, []);

	let history = useHistory();
	return (
		<>
			<Header heading='IEEE Latest News' />
			<main>
				<div className='container-fluid mt-5'>
					<div className='row'>
						<div className='col-xl-12 col-lg-12 col-md-12'>
							<section>
								<div className='row'>
									{posts.map((post) => (
										<BlogCard
											key={post._id}
											title={post.title}
											content={post.content}
											author={post.author}
											date={post.date}
											onClick={() =>
												history.push(`/blog/${post._id}`)
											}
										/>
									))}
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default BlogListPage;
