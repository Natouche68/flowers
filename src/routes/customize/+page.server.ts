import type { Actions, PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PageServerLoad = ({ url }) => {
	let petalsColor = url.searchParams.get("petalsColor") || "f80059";
	let leafColor = url.searchParams.get("leafColor") || "00ff85";
	let backgroundColor = url.searchParams.get("backgroundColor") || "001535";
	let message = url.searchParams.get("message") || "";

	return {
		petalsColor: "#" + petalsColor,
		leafColor: "#" + leafColor,
		backgroundColor: "#" + backgroundColor,
		message,
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const petalsColor = String(data.get("petals-color")).replace("#", "");
		const leafColor = String(data.get("leaf-color")).replace("#", "");
		const backgroundColor = String(data.get("background-color")).replace(
			"#",
			""
		);
		const message = data.get("message");

		redirect(
			303,
			`/?petalsColor=${petalsColor}&leafColor=${leafColor}&backgroundColor=${backgroundColor}${
				message ? `&message=${message}` : ""
			}`
		);
	},
} satisfies Actions;
