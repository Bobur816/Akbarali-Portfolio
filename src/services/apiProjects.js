import supabase from "./supabase";

export async function getProjects() {
	const {data, error} = await supabase.from("Projects").select("*");

	if (error) {
		console.error(error);
		throw new Error("Projects could not be loaded");
	}

	// console.log(data);
	localStorage.setItem("projects", JSON.stringify(data));

	return data;
}

export async function getSelectedProjects() {
	let {data, error} = await supabase.from("Projects").select().eq("isSelected", true);

	if (error) {
		console.error(error);
		throw new Error("SelectedProjects could not be loaded");
	}

	// console.log(data);
	return data;
}
