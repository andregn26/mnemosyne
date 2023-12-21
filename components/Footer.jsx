import { Github, IconHeart, Instagram, Linkedin, Website } from "./Icons";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 left-0 w-full flex  flex-col gap-2 md:flex-row px-8 py-4 max-w-[1536px]">
			<aside className=" w-full flex justify-center items-center md:justify-start">
				<p>
					Made with{" "}
					<span>
						<IconHeart />
					</span>{" "}
					by AG
				</p>
			</aside>
			<nav className="flex justify-center gap-4">
				<a href="https://www.linkedin.com/in/andrengregorio/" target="_blank" rel="noreferrer">
					<Linkedin />
				</a>
				<a href="https://www.andregregorio.pt/" target="_blank" rel="noreferrer">
					<Website />
				</a>
				<a href="https://github.com/andregn26" target="_blank" rel="noreferrer">
					<Github />
				</a>
				<a href="https://www.instagram.com/andregn33/" target="_blank" rel="noreferrer">
					<Instagram />
				</a>
			</nav>
		</footer>
	);
};

export default Footer;
