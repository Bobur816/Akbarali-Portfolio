import { CardProps } from "../../UI/Cards/Cards";
import Spinner from "../../UI/Spinner/Spinner";
import AdminCard from "./AdminCard";

function AdminCards({ projects, isLoading }: CardProps) {
  if (isLoading) return <Spinner />;

  const oneProject = projects?.slice(0, 1);

  return (
    <ul className="admin__projects">
      {projects?.map((project) => (
        <AdminCard project={project} key={project.id} />
      ))}
    </ul>
  );
}

export default AdminCards;
