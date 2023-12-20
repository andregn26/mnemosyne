import Feed from "@components/Feed";

const Home = () => {
	return (
		<section className="w-full relative flex-center flex-col xl:grid xl:grid-cols-12 xl:gap-16 xl:items-start xl:mt-12">
			<div className="xl:col-span-4 xl:sticky xl:top-24 mt-24">
				<h1 className="head_text text-center xl:text-left">
					<span className="rose_red-gradient text-left">Mnemosyne </span>
					<br className="max-md:hidden" />
					Prompt Vault
				</h1>
				<p className="mt-5 text-lg text-gray-200 sm:text-xl max-w-2xl text-center xl:text-left">
					Your digital memory vault inspired by the Greek goddess of memory. Save and cherish prompts for
					later use.
				</p>
			</div>
			<div className="xl:col-span-8">
				<Feed />
			</div>
		</section>
	);
};

export default Home;
