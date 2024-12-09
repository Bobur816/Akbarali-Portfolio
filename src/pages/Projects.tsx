import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../services/apiProjects";
import Cards from "../UI/Cards/Cards";

function Projects() {
  const { isLoading, data: projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <div className="projects">
      <h2 className="section__title">Projects</h2>
      <p className="text_gray">Showcase of innovative design solutions</p>
      <Cards isLoading={isLoading} projects={projects} />
    </div>
  );
}

export default Projects;
