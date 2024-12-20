import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditProject } from "../services/apiProjects";

export function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: ({ newProjectData, id }: any) => createEditProject(newProjectData, id),

    onSuccess: () => {
      toast.success("cabin succesfully edited");
      queryClient.invalidateQueries({
        queryKey: ["Projects"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isEditing, editProject };
}
