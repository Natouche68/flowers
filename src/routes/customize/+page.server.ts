import type { Actions } from "./$types";
import { redirect } from "@sveltejs/kit";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const petalsColor = String(data.get("petals-color")).replace("#", "");
		const leafColor = String(data.get("leaf-color")).replace("#", "");
		const backgroundColor = String(data.get("background-color")).replace(
			"#",
			""
		);

		redirect(
			303,
			`/?petalsColor=${petalsColor}&leafColor=${leafColor}&backgroundColor=${backgroundColor}`
		);
	},
} satisfies Actions;
