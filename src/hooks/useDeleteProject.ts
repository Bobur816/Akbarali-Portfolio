import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../services/apiProjects";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    // mutationFn: deleteProjectApi,
    mutationFn: ({ id, name }: any) => deleteProjectApi(id, name),
    // mutationFn: ({ newProjectData, id }: any) => createEditProject(newProjectData, id),

    onSuccess: () => {
      toast.success("Project succesfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["Projects"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteProject };
}
