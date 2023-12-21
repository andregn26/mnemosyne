"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { LockIcon } from "./Icons";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
	//SECTION VARS
	const { data: session } = useSession();
	const pathName = usePathname();
	const router = useRouter();

	//SECTION  - MANAGING STATES
	const [copied, setCopied] = useState("");

	//SECTION FUNCTIONS
	const handleCopy = () => {
		setCopied(post.prompt);
		navigator.clipboard.writeText(post.prompt);
		setTimeout(() => setCopied(""), 3000);
	};

	return (
		<div className="prompt_card relative">
			<div className="flex justify-between items-start gap-5">
				<div className="flex-1 flex justify-start items-center gap-3">
					<Image
						priority={true}
						src={post.creator.image}
						alt="user_image"
						width={40}
						height={40}
						className="rounded-full object-contain"
					/>
					<div className="flex flex-col">
						<h3 className=" font-semibold text-gray-50">{post.creator.username}</h3>
						<p className=" text-sm text-gray-400">{post.creator.email}</p>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					{post.isPrivate && (
						<div className="">
							<LockIcon fillColor="hsl(240, 100%, 91%)" />
						</div>
					)}

					<div className="copy_btn" onClick={handleCopy}>
						<Image
							src={copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
							alt="copy_icon"
							width={12}
							height={12}
						/>
					</div>
				</div>
			</div>
			<p className="my-4  text-sm text-gray-200">{post.prompt}</p>
			<p
				className=" text-sm text-persian-rose-400 font-semibold cursor-pointer"
				onClick={() => handleTagClick && handleTagClick(post.tag)}>
				#{post.tag}
			</p>
			{session?.user.id === post.creator._id && pathName === "/profile" && (
				<div className="mt-5 flex-center gap-4 border-t border-violent-violet-950 pt-3">
					<p className=" text-sm cursor-pointer font-semibold" onClick={handleEdit}>
						Edit
					</p>
					<p className=" text-sm font-semibold text-radical-red-500 cursor-pointer" onClick={handleDelete}>
						Delete
					</p>
				</div>
			)}
		</div>
	);
};

export default PromptCard;
