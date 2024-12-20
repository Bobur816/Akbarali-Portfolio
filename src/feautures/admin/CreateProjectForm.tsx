import { useForm } from "react-hook-form";
import FormRow from "../../UI/FormRow";
import { useCreateProject } from "../../hooks/useCreateProject";
import { useEditProject } from "../../hooks/useEditProject";

function CreateProjectForm({ projectToEdit = {}, onCloseModal }: { projectToEdit?: any; onCloseModal?: Function }) {
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  let isWorking = isCreating || isEditing;
  // let isWorking = false;
  const { id: editId, ...editValues } = projectToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
    // defaultValues: {},
  });

  const { errors } = formState;
  function onSubmit(data: any) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    console.log(data);

    if (isEditSession) {
      console.log("edit", { newProjectData: { ...data, image }, id: editId });

      editProject(
        { newProjectData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset(), onCloseModal?.();
          },
        }
      );
    } else {
      console.log("create", { ...data, image: data.image[0] });

      createProject(
        { ...data, image: data.image[0] },
        {
          onSuccess: () => {
            reset(), onCloseModal?.();
          },
        }
      );
    }
    // console.log({ ...data, image: data.image[0] });
  }

  function onError() {
    // console.log(error);
  }
  return (
    <div className="form__wrapper">
      <h2>Create project</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Project name" error={errors?.name?.message}>
          <input
            className="form__input"
            type="text"
            id="name"
            disabled={isWorking}
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Time line" error={errors?.timeline?.message}>
          <input
            className="form__input"
            type="text"
            id="timeline"
            disabled={isWorking}
            {...register("timeline", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Company name" error={errors?.companyName?.message}>
          <input
            className="form__input"
            type="text"
            id="companyName"
            disabled={isWorking}
            defaultValue=""
            {...register("companyName", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Tags" error={errors?.tags?.message}>
          <input
            className="form__input"
            type="text"
            id="tags"
            disabled={isWorking}
            placeholder="mobile, design, ..."
            defaultValue=""
            {...register("tags", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Project link" error={errors?.projectLink?.message}>
          <input
            className="form__input"
            type="text"
            id="projectLink"
            disabled={isWorking}
            defaultValue=""
            {...register("projectLink", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <textarea
            className="form__textarea"
            id="description"
            disabled={isWorking}
            defaultValue=""
            {...register("description", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Project photo">
          <input
            className="form__file-input"
            type="file"
            id="image"
            accept="image/*"
            {...register("image", {
              required: isEditSession ? false : "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Selected" error={errors?.isSelected?.message}>
          <input
            className="form__input"
            type="checkbox"
            id="isSelected"
            disabled={isWorking}
            {...register("isSelected")}
          />
        </FormRow>

        <div className="form__btns">
          {/* type is an HTML attribute! */}
          <button className="remove-btn" type="reset" onClick={() => onCloseModal?.()}>
            Cancel
          </button>
          <button className="add-btn" disabled={isWorking}>
            {isEditSession ? "Edit project" : "Add project"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProjectForm;
