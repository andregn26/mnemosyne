import Link from "next/link";

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
