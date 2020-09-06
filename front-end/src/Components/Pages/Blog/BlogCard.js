import React from 'react';
import Moment from 'react-moment';
import { motion } from 'framer-motion';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'react-use';
import markdownToTxt from 'markdown-to-txt';

// style
import style from './style.module.css';

const BlogCard = ({
	image = 'https://chamber-inspired.chamberdashboard.com/wp-content/uploads/2019/01/Business-Directory-plugin-for-WordPress-photoby-ivan-torres.jpg',
	title,
	id,
	full,
	content,
	date,
	page,
	author,
	onClick,
	onDrag,
	overlayClick,
}) => {
	const { width } = useWindowSize();
	let history = useHistory();
	const contentText = markdownToTxt(content, { pedantic: true });

	if (!full) {
		return (
			<li className={style['card']} onClick={onClick}>
				<div className={style['card-content-container']}>
					<motion.div
						className={style['card-content']}
						layoutId={`card-container-${id}`}
					>
						<motion.div
							className={style['card-image-container']}
							layoutId={`image-container-${id}`}
						>
							<motion.img
								whileHover={{
									scale: 1.22,
									rotate: 5,
									filter: 'brightness(0.7)',
								}}
								transition={{ type: 'spring', stiffness: 150 }}
								className={style['card-image']}
								src={image}
								alt=''
							/>
						</motion.div>
						<motion.div
							className={style['title-container']}
							layoutId={`title-container-${id}`}
						>
							<motion.h2
								layoutId={`text-${id}`}
								className={style['whiteh2']}
							>
								{title}
							</motion.h2>
							<Moment
								date={date}
								toNow
								className={style['whiteh2']}
							/>
						</motion.div>
					</motion.div>
				</div>
			</li>
		);
	}
	if (full) {
		return (
			<div
				className={`${style['card-content-container']} ${style.open}`}
			>
				<motion.div
					className={style['card-content']}
					layoutId={`card-container-${id}`}
					drag={width < 1000 ? 'x' : null}
					layout={width < 1000 ? true : null}
					onDragStart={width < 1000 ? onDrag : null}
				>
					<motion.div
						className={style['card-image-container']}
						layoutId={`image-container-${id}`}
					>
						<img className={style['card-image']} src={image} alt='' />
					</motion.div>
					<motion.div
						className={style['title-container']}
						layoutId={`title-container-${id}`}
					>
						<motion.h2
							layoutId={`text-${id}`}
							className={style['whiteh2']}
						>
							{title}
						</motion.h2>
						<Moment date={date} toNow className={style['whiteh2']} />
					</motion.div>
					<motion.div
						className={`${style['content-container']} p-1 m-3`}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
					>
						<MarkdownPreview
							source={contentText.slice(0, 400) + '...'}
							style={{ overflow: 'hidden' }}
							unwrapDisallowed={true}
							disallowedTypes={[
								'image',
								'code',
								'link',
								'inlineCode',
								'list',
							]}
						/>
					</motion.div>
					<motion.div
						className={`${style['button']} py-2`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.1, stiffness: 15 }}
						onClick={() =>
							history.push({ pathname: `/blog/${page}` })
						}
					>
						Go to blog
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.6 }}
					exit={{ opacity: 0, transition: { duration: 0.15 } }}
					transition={{ duration: 0.2, delay: 0.05 }}
					key='overlay'
					className={style['overlay']}
					onClick={overlayClick}
				/>
			</div>
		);
	}
};

export default BlogCard;
