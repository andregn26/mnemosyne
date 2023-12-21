"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
// import useSWR from "swr";

const PromptCardList = ({ data, handleTagClick, isLoading }) => {
	return (
		<div className="mt-16 xl:mt-4 prompt_layout w-full">
			{data.map((post) => {
				console.log(data);
				return (
					<>
						{isLoading ? (
							<div
								role="status"
								className=" !h-48 w-full rounded-lg animate-pulse bg-blush-pink-950/50">
								<span className="sr-only">Loading...</span>
							</div>
						) : (
							<PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
						)}
					</>
				);
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

	//SECTION USE EFFECT

	// const fetcher = (...args) => fetch(...args).then((res) => res.json());
	// const { data, error } = useSWR("/api/prompt", fetcher);
	// useEffect(() => {
	// 	if (data) {
	// 		setPosts(data);
	// 	}
	// }, [data]);
	// if (error) return <div>Failed to load</div>;

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			console.log("Passed 4 seconds");
		}, 2000);

		fetch("/api/prompt")
			.then((res) => res.json())
			.then((data) => {
				setPosts(data);
			});

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

			{searchText ? (
				<PromptCardList data={searchedResults} handleTagClick={handleTagClick} isLoading={isLoading} />
			) : (
				<PromptCardList data={posts} handleTagClick={handleTagClick} isLoading={isLoading} />
			)}
		</section>
	);
};

export default Feed;
