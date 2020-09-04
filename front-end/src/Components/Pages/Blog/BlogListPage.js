import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	AnimateSharedLayout,
	AnimatePresence,
} from 'framer-motion';

import BlogCard from './BlogCard';
import Header from '../../Layout/Header';
import style from './style.module.css';

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
							/>
						))}
					</ul>

					<AnimatePresence>
						{/* render the single card and overlay under it */}
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

					</AnimatePresence>
				</div>
			</AnimateSharedLayout>
		</>
	);
};

export default BlogListPage;
