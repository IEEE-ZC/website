import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

// components
import BlogCard from './BlogCard';
import Header from '../../Layout/Header';
import Preloader from '../../Layout/Preloader';

// style
import style from './style.module.css';

// API endpoint
import { BLOG } from '../../../EndPoints';

const BlogListPage = () => {
	const [posts, setPosts] = useState([]);
	const [index, setIndex] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = 'IEEE| BLog';

		axios
			.get(
				`${BLOG}?_sort=createdAt`
			)
			.then((res) => {
				setPosts(res.data.reverse());
				setLoading(false);
			});
	}, []);

	return (
		<>
			<AnimatePresence>{loading && <Preloader />}</AnimatePresence>
			<AnimateSharedLayout type='crossfade'>
				<Header heading='IEEE Latest News' />
				<div className='container my-3'>
					<ul className={`${style['card-list']}`}>
						{posts &&
							posts.map((post, index) => (
								<BlogCard
									key={index}
									id={index}
									title={post.title}
									content={post.content}
									onClick={() => setIndex(index)}
									image={post.cover[0].url}
									date={post.updated_by.updatedAt}
									author={post.author}
								/>
							))}
					</ul>
					<AnimatePresence>
						{/* render the single card and overlay under it */}
						{index !== false && (
							<BlogCard
								full
								key={index}
								id={index}
								page={posts[index]._id}
								title={posts[index].title}
								content={posts[index].content}
								image={posts[index].cover[0].url}
								date={posts[index].updated_by.updatedAt}
								author={posts[index].author}
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
