import supabase, { supabaseUrl } from "./supabase";

export async function getProjects() {
  const { data, error } = await supabase.from("Projects").select("*");

  if (error) {
    console.error(error);
    throw new Error("Projects could not be loaded");
  }

  // console.log(data);
  localStorage.setItem("projects", JSON.stringify(data));
  return data;
}

export async function getSelectedProjects() {
  let { data, error } = await supabase.from("Projects").select().eq("isSelected", true);

  if (error) {
    console.error(error);
    throw new Error("SelectedProjects could not be loaded");
  }

  localStorage.setItem("projects", JSON.stringify(data));

  // console.log(data);
  return data;
}

export async function getProjectData(id: any) {
  // return console.log(id);

  // console.log(id);
  let { data, error } = await supabase.from("Projects").select("*").eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Project data could not be loaded");
  }
  // console.log(data);
  return data;
}

export async function createEditProject(newProject?: any, id?: any): Promise<any> {
  console.log(newProject);

  const tagsArray = Array.isArray(newProject.tags) ? newProject.tags : newProject.tags.split(",");
  console.log(newProject, tagsArray);

  const hasImgPath = newProject.image.startsWith?.(supabaseUrl);

  let imageName: any;
  if (!hasImgPath) {
    imageName = `${newProject.name.replaceAll("/", "")}/${Math.random()}-${newProject.image.name.replaceAll("/", "")}`;
  }
  // console.log(imageName);
  const imagePath = hasImgPath ? newProject.image : `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;

  // https://qlexuncemojoapbkrvse.supabase.co/storage/v1/object/public/images/user.svg
  // 1. Creare Project
  let query: any = supabase.from("Projects");

  // A)
  if (!id)
    query = query.insert([
      { ...newProject, imageCollection: [], role: "UX/UI Designer", tags: tagsArray, image: imagePath },
    ]);

  // B)
  if (id) query = query.update({ ...newProject, image: imagePath }).eq("id", id);
  // if (id)

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Project could not created");
    console.log(data);
  }

  // 2. Upload Image

  if (hasImgPath) return data;

  const { error: storageError } = await supabase.storage.from("images").upload(imageName, newProject.image);

  // 3. delete cabin IF there was  an error uploading image
  if (storageError) {
    console.log(storageError);

    await supabase.from("Projects").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error("Cabin image could not be uploaded and cabin in not created");
  }

  return data;
}

// folderName?: string
export async function deleteProject(id: string): Promise<any> {
  // console.log(id, folderName);
  const { data, error } = await supabase.from("Projects").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Project could not deleted");
  }

  return data;
  // // const { error: storageError } = await supabase.storage
  // const { data: storageData, error: storageError } = await supabase.storage
  //   .from(`images`) // Storage bucket nomi
  //   .remove([`${folderName}`]); // Katalogni o'chirish

  // console.log(storageData);

  // if (storageError) {
  //   console.error("Katalogni o'chirishda xato:", storageError.message);
  //   return;
  // }
}

export async function updateImageCarousel(newImgObj: any): Promise<any> {
  // const image = await newImage;
  const { images, image: newImage, name } = newImgObj;
  console.log(newImgObj);

  // const hasImgPath = newProject?.image?.startsWith?.(supabaseUrl);

  //__________________________________________________________

  const imageName = `${name.replaceAll("/", "")}/${Math.random()}-${newImage.name.replaceAll("/", "")}`;

  const imagePath = `${supabaseUrl}/storage/v1/object/public/images/${imageName}`;
  console.log(imageName);

  let query: any = supabase.from("Projects");

  query = query.update({ imageCollection: [...images, imagePath] }).eq("name", name);
  // if (id)

  const { data, error } = await query.select().single();
  console.log(data);

  if (error) {
    console.error(error);
    throw new Error("Project imageCarousel could not updated");
    console.log(data);
  }

  // 2. Upload Image

  const { error: storageError } = await supabase.storage.from("images").upload(imageName, newImage);

  // 3. delete cabin IF there was  an error uploading image
  if (storageError) {
    console.log(storageError);

    await supabase.from("Projects").delete().eq("id", data.id);

    console.error(storageError);
    throw new Error("Cabin image could not be uploaded and cabin in not created");
  }

  //__________________________________________________________

  // console.log(storageError);

  // return data;
}
