import supabase from "./supabase";

export async function getProjects() {
	const {data, error} = await supabase.from("Projects").select("*");

	if (error) {
		console.error(error);
		throw new Error("Projects could not be loaded");
	}

	// console.log(data);

	return data;
}

export async function getProjectData(id) {
	console.log(id);
	const {data, error} = await supabase.from("Projects").select(id);

	if (error) {
		console.error(error);
		throw new Error("Project could not be loaded");
	}

	// console.log(data);
	return data;
}
