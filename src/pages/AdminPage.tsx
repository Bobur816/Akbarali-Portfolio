import { useQuery } from "@tanstack/react-query";
import AdminCards from "../feautures/admin/AdminCards";
import { getProjects } from "../services/apiProjects";

const AdminPage = () => {
  const { isLoading, data: projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <div className="admin">
      <div className="admin__layout">
        <h3>Projects</h3>

        <AdminCards projects={projects} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AdminPage;
