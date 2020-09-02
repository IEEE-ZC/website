import React from 'react';
import BlogCard from './BlogCard';
import Header from '../../Layout/Header';

const BlogListPage = () => {
  return (
    <>
			<Header
				heading='IEEE Latest News'
			/>
			<main>
				<div className='container-fluid mt-5'>
					<div className='row'>
						<div className='col-xl-12 col-lg-12 col-md-12'>
							<section>
								<div className='row'>
									<BlogCard
										title='hello world'
										content=' lorem ipsum '
										author='devien george'
										date={new Date()}
									/>
									<BlogCard
										title='hello world'
										content='lorem15 Praesentium quia quidem ullam eligendi illo. Ullam provident delectus occaecati nam doloremque temporibus. Beatae minus nesciunt totam ab eos. Et ex voluptate distinctio aliquid nulla enim quo. Voluptatem delectus facere odit beatae. Officia explicabo non veniam officia omnis cum est omnis.'
										author='devien george'
										date={new Date()}
									/>
									<BlogCard
										title='hello world'
										content=' lorem ipsum '
										author='devien george'
										date={new Date()}
									/>
									<BlogCard
										title='hello world'
										content=' lorem ipsum '
										author='devien george'
										date={new Date()}
									/>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</>
  );
}

export default BlogListPage;