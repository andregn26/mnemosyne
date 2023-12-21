import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// export const dynamic = "force-dynamic";
export const GET = async () => {
	try {
		await connectToDB();

		const prompts = await Prompt.find({ isPrivate: { $eq: false } }).populate("creator");

		const response = new Response(JSON.stringify(prompts), { status: 200 });

		return response;
	} catch (error) {
		return new Response("failed to fetch all prompts", { status: 500 });
	}
};
