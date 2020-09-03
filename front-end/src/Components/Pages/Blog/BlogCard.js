import React from 'react';
// import Moment from 'react-moment';
import style from './style.module.css';
import { motion } from 'framer-motion';
import { LoremIpsum } from 'react-lorem-ipsum';

const BlogCard = ({
	image = 'https://chamber-inspired.chamberdashboard.com/wp-content/uploads/2019/01/Business-Directory-plugin-for-WordPress-photoby-ivan-torres.jpg',
	title,
	id,
	full,
	content,
	date,
	author,
	onClick,
}) => {
	if (!full) {
		console.log(full);
		return (
			<li
				className={style['card']}
				onClick={onClick}
			>
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
								className={style['card-image']}
								src={image}
								alt=''
							/>
						</motion.div>
						<motion.div
							className={style['title-container']}
							layoutId={`title-container-${id}`}
						>
							<h2 className={style['whiteh2']}>{title}</h2>
						</motion.div>
					</motion.div>
				</div>
			</li>
		);
	}
	if (full) {
		console.log(style.open);
		return (
			<div
				className={`${style['card-content-container']} ${style.open}`}
				onClick={onClick}
			>
				<motion.div
					className={style['card-content']}
					layoutId={`card-container-${id}`}
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
						<h2 className={style['whiteh2']}>{title}</h2>
					</motion.div>
					<motion.div
						className={style['content-container']}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<LoremIpsum
							p={3}
							avgWordsPerSentence={6}
							avgSentencesPerParagraph={4}
						/>
					</motion.div>
				</motion.div>
			</div>
		);
	}
};

export default BlogCard;
