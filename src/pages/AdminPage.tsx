import { useQuery } from "@tanstack/react-query";
import AdminCards from "../feautures/admin/AdminCards";
import { getProjects } from "../services/apiProjects";
import Modal from "../UI/Modal";
import { HiMiniPlusCircle } from "react-icons/hi2";
import CreateProjectForm from "../feautures/admin/CreateProjectForm";

const AdminPage = () => {
  const { isLoading, data: projects } = useQuery({
    queryKey: ["Projects"],
    queryFn: getProjects,
  });
  return (
    <div className="admin">
      <div className="admin__layout">
        <div className="admin__layout_top">
          <h3>Projects</h3>
          <Modal>
            <Modal.Open opens="project-form-add">
              <button className="add-btn">
                <HiMiniPlusCircle />
                New Project
              </button>
            </Modal.Open>

            <Modal.Window name="project-form-add">
              <CreateProjectForm />
            </Modal.Window>
          </Modal>
        </div>

        <AdminCards projects={projects} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AdminPage;
