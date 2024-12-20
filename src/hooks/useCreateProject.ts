import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditProject } from "../services/apiProjects";

export function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createEditProject,

    onSuccess: () => {
      toast.success("New project succesfully created");
      queryClient.invalidateQueries({
        queryKey: ["Projects"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createProject };
}
