import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Header from '../../Layout/Header';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';
import style from './style.module.css';
import {
	AnimateSharedLayout,
	AnimatePresence,
	motion,
} from 'framer-motion';

// some fake (hard) coded
const BlogListPage = () => {
	const [posts, setPosts] = useState([
		{
			title: 'hello world',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien geroge',
			date: '2020/5/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien ddddsss',
			date: '2020/1/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien aa',
			date: '2020/7/2',
		},
		{
			title: 'hello world',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien geroge',
			date: '2020/5/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien ddddsss',
			date: '2020/1/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien aa',
			date: '2020/7/2',
		},
		{
			title: 'hello world',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien geroge',
			date: '2020/5/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien ddddsss',
			date: '2020/1/2',
		},
		{
			title: 'hello world2',
			content: 'lorem ipsum dolor sit amet',
			author: 'devien aa',
			date: '2020/7/2',
		},
	]);

	// useEffect(() => {
	// 	axios
	// 		.get('https://sleepy-falls-48407.herokuapp.com/blog-posts')
	// 		.then((res) => setPosts(res.data));
	// }, []);

	const [index, setIndex] = useState(false);

	let history = useHistory();
	return (
		<>
			<AnimateSharedLayout type='crossfade'>
				<Header heading='IEEE Latest News' />
				<div className='container'>
					<ul className={`${style['card-list']}`}>
						{posts.map((post, index) => (
							<BlogCard
								key={index}
								id={index}
								title={post.title}
								content={post.content}
								onClick={() => setIndex(index)}
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
								key={index}
								id={index}
								title={posts[index].title}
								content={posts[index].content}
								onClick={() => setIndex(false)}
							/>
							// <div
							//   className={style['single-image-container']}
							//   onClick={() => setIndex(false)}
							// >
							//   <motion.div
							//     layoutId={index}
							//     className={style['single-image']}
							//   />
							// </div>
						)}

						{/* render the overlay */}
						{index !== false && (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.6 }}
								exit={{ opacity: 0, transition: { duration: 0.15 } }}
								transition={{ duration: 0.2, delay: 0.05 }}
								style={{ pointerEvents: 'auto' }}
								key='overlay'
								className={style['overlay']}
								onClick={() => setIndex(false)}
							/>
						)}
					</AnimatePresence>
				</div>
			</AnimateSharedLayout>
		</>
	);
};

export default BlogListPage;
