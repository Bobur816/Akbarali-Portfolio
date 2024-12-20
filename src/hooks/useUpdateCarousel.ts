import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateImageCarousel } from "../services/apiProjects";

export function useUpdateCarousel() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutate: updateCarousel } = useMutation({
    mutationFn: updateImageCarousel,
    // mutationFn: ({ images, image, name }: any) => updateImageCarousel(images, image, name),
    // mutationFn: ({ newProjectData, id }: any) => createEditProject(newProjectData, id),

    onSuccess: () => {
      toast.success("imageCarousel succesfully updated");
      queryClient.invalidateQueries({
        queryKey: ["Projects"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, updateCarousel };
}
