import Link from "next/link";
import { LockIcon } from "./Icons";

const InputBox = () => {
	return (
		<div class="inline-flex items-center">
			<div className="relative flex items-center rounded-full cursor-pointer">
				<input
					checked={post.isPrivate}
					id="isPrivate-checkbox"
					type="checkbox"
					onChange={(e) =>
						setPost((prevPost) => ({
							...prevPost,
							isPrivate: e.target.type === "checkbox" ? e.target.checked : e.target.value,
						}))
					}
					class="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-gray-900 checked:border-gray-900 checked:before:bg-gray-900"
				/>
				<span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
					<LockIcon />
				</span>
			</div>

			<label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="isPrivate-checkbox">
				Private prompt
			</label>
		</div>
	);
};

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
	return (
		<section className="w-full max-w-full flex flex-col items-center xl:grid xl:grid-cols-12 xl:gap-24">
			<div className="xl:col-span-4">
				<h1 className="head_text text-center xl:text-left">
					<span className="">{type} Post</span>
				</h1>
				<p className="desc text-center xl:text-left max-w-md">
					{type} and share the prompts you think you will be reutilize
				</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className="mt-10 w-full max-w-[768px] flex flex-col gap-7 xl:col-span-8 glassmorphism">
				<label>
					<span className=" font-semibold text-base text-gray-300">Your AI Prompt</span>
					<textarea
						value={post.prompt}
						onChange={(e) => setPost({ ...post, prompt: e.target.value })}
						placeholder="Write your prompt here..."
						required
						className="form_textarea"
					/>
				</label>
				<label>
					<span className="font-semibold text-base text-gray-300">
						Tag
						<span className="font-normal"> #example</span>
					</span>
					<input
						value={post.tag}
						onChange={(e) => setPost({ ...post, tag: e.target.value })}
						placeholder="#tag"
						required
						className="form_input"
					/>
				</label>
				<div className="flex items-center">
					<div class="inline-flex items-center">
						<div className="relative flex items-center rounded-full cursor-pointer">
							<input
								checked={post.isPrivate}
								id="isPrivate-checkbox"
								type="checkbox"
								onChange={(e) =>
									setPost((prevPost) => ({
										...prevPost,
										isPrivate:
											e.target.type === "checkbox"
												? e.target.checked
												: e.target.value,
									}))
								}
								class="peer relative appearance-none w-5 h-5 border rounded-md border-violent-violet-950/40 bg-violent-violet-950/40 cursor-pointer transition-all before:content[''] before:block before:bg-violent-violet-950 before:w-10 before:h-10 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-violent-violet-950/40 checked:border-violent-violet-950/40 checked:before:bg-violent-violet-950/40"
							/>
							<span class="absolute text-gray-300 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
								<LockIcon />
							</span>
						</div>

						<label
							class="relative flex items-center p-3 rounded-full cursor-pointer text-gray-300 ml-2"
							htmlFor="isPrivate-checkbox">
							Private prompt
						</label>
					</div>
				</div>

				<div className="flex-end mx-3 mb-5 gap-4">
					<Link href="/" className="text-gray-200 text-sm">
						Cancel
					</Link>
					<button type="submit" disabled={submitting} className=" text-sm my_btn ">
						{submitting ? `Saving...` : "Save"}
					</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
