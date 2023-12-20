"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	return (
		<div className="mt-16 xl:mt-4 prompt_layout">
			{data.map((post) => {
				return <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />;
			})}
		</div>
	);
};

const Feed = () => {
	//SECTION  - MANAGING STATES
	const [posts, setPosts] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [searchedResults, setSearchedResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	//SECTION API call

	//SECTION USE EFFECT
	// useEffect(() => {
	// 	const timeOut = setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 3000);
	// 	const fetchPosts = async () => {
	// 		const response = await fetch("/api/prompt");
	// 		const data = await response.json();
	// 		setPosts(data);
	// 	};
	// 	fetchPosts();

	// 	timeOut();
	// 	return () => {
	// 		clearTimeout(timeOut);
	// 	};
	// }, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			console.log("Passed 4 seconds");
		}, 4000);

		const fetchPosts = async () => {
			try {
				const response = await fetch("/api/prompt");
				const data = await response.json();
				setPosts(data);
				console.log("posts fetched -->", data);
			} catch (error) {
				console.log("error in fetching posts", error);
			}
		};

		fetchPosts();

		return () => {
			clearTimeout(timer);
		};
	}, []);

	//SECTION Vars
	const filterPrompts = (searchText) => {
		const regex = new RegExp(searchText, "i");
		return posts.filter((item) => regex.test(item.tag) || regex.test(item.prompt) || regex.test(item.creator.username));
	};

	//SECTION FUNCTIONS
	const handleSearchChange = (e) => {
		clearTimeout(searchTimeout);
		setSearchText(e.target.value);
		setSearchTimeout(
			setTimeout(() => {
				const searchResult = filterPrompts(e.target.value);
				setSearchedResults(searchResult);
			}, 500)
		);
	};
	const handleTagClick = (tagName) => {
		setSearchText(tagName);

		const searchResult = filterPrompts(tagName);
		setSearchedResults(searchResult);
	};

	return (
		<section className="feed">
			<form className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for a tag or a username"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input "
				/>
			</form>
			{isLoading ? (
				<div>Is Loading</div>
			) : (
				<>
					{searchText ? (
						<PromptCardList data={searchedResults} handleTagClick={handleTagClick} />
					) : (
						<PromptCardList data={posts} handleTagClick={handleTagClick} />
					)}
				</>
			)}
		</section>
	);
};

export default Feed;
