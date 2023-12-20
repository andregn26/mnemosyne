import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full relative flex-center flex-col xl:grid xl:grid-cols-12 xl:gap-16 xl:items-start xl:mt-12">
			<div className="xl:col-span-4 xl:sticky xl:top-24 mt-24">
				<h1 className="head_text text-center xl:text-left">
					Discover & Share <br className="max-md:hidden" />
					<span className="rose_red-gradient text-left">AI-Powered Prompts</span>
				</h1>
				<p className="mt-5 text-lg text-gray-200 sm:text-xl max-w-2xl text-center xl:text-left">
					Promptopia is an open-source AI prompting tool for modern world to discover, create and share
					creative prompts
				</p>
			</div>
			<div className="xl:col-span-8">
				<Feed />
			</div>
		</section>
	);
};

export default Home;
