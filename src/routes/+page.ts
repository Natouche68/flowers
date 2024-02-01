import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url }) => {
	let petalsColor = url.searchParams.get("petalsColor") || "f80059";
	let leafColor = url.searchParams.get("leafColor") || "00ff85";
	let backgroundColor = url.searchParams.get("backgroundColor") || "001535";
	let message = url.searchParams.get("message");

	return {
		petalsColor: "#" + petalsColor,
		leafColor: "#" + leafColor,
		backgroundColor: "#" + backgroundColor,
		message,
	};
};
