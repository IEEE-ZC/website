import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	AnimateSharedLayout,
	AnimatePresence,
} from 'framer-motion';

import BlogCard from './BlogCard';
import Header from '../../Layout/Header';
import style from './style.module.css';

// some fake (hard) coded
// {
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
const BlogListPage = () => {
	const [posts, setPosts] = useState([]);
	const [index, setIndex] = useState(false);

	useEffect(() => {
		axios
			.get('https://sleepy-falls-48407.herokuapp.com/blog-posts')
			.then((res) => {
				setPosts(res.data);
			});
	}, []);

	return (
		<>
			<AnimateSharedLayout type='crossfade'>
				<Header heading='IEEE Latest News' />
				<div className='container'>
					<ul className={`${style['card-list']}`}>
						{posts.map((post, index) => (
							<BlogCard
								key={post.title}
								id={post.title}
								title={post.title}
								content={post.content}
								onClick={() => setIndex(index)}
								image={post.cover[0].url}
								date={post.updated_by.updatedAt}
								// author={post.author}
								// date={post.date}
								// onClick={() =>
								// 	history.push(`/blog/${post._id}`)
								// }
							/>
						))}
					</ul>

					<AnimatePresence>
						{/* render the single card */}
						{index !== false && (
							<BlogCard
								full
								key={posts[index].id}
								id={posts[index].id}
								title={posts[index].title}
								content={posts[index].content}
								image={posts[index].cover[0].url}
								date={posts[index].updated_by.updatedAt}
								onDrag={() => setIndex(false)}
								overlayClick={() => setIndex(false)}
							/>
						)}

						{/* render the overlay
						{index !== false && (
							// <motion.div
							// 	initial={{ opacity: 0 }}
							// 	animate={{ opacity: 0.6 }}
							// 	exit={{ opacity: 0, transition: { duration: 0.15 } }}
							// 	transition={{ duration: 0.2, delay: 0.05 }}
							// 	key='overlay'
							// 	className={style['overlay']}
							// />
						)} */}
					</AnimatePresence>
				</div>
			</AnimateSharedLayout>
		</>
	);
};

export default BlogListPage;
