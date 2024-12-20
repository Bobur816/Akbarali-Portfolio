import { HiMiniSquaresPlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import ImageCarouselAdmin from "./ImageCarouselAdmin";
import Modal from "../../UI/Modal";
import CreateProjectForm from "./CreateProjectForm";
import ConfirmDelete from "../../UI/ConfirmDelete/ConfirmDelete";
import { useDeleteProject } from "../../hooks/useDeleteProject";
import UpdateImageCollection from "./UpdateImageCollection";

function AdminCard({ project }: any) {
  const { isDeleting, deleteProject } = useDeleteProject();

  const { id, name, image, description, imageCollection, tags } = project;

  function handleDelete() {
    deleteProject({ id, name });
  }

  return (
    <li className="admin__project-card">
      <div className="box">
        <div className="box__img">
          <img src={image} alt="card-image" />
        </div>
        <div className="box__info">
          {imageCollection?.length ? (
            <ImageCarouselAdmin imageCollection={imageCollection} name={name} />
          ) : (
            <Modal>
              <Modal.Open opens="upgrade-image-collection">
                <button className="gray-btn add-image-btn">
                  <HiMiniSquaresPlus />
                </button>
              </Modal.Open>
              <Modal.Window name="upgrade-image-collection">
                <UpdateImageCollection images={imageCollection} name={name} />
              </Modal.Window>
            </Modal>
          )}
          <div className="box__items">
            <div className="box__item">
              <h3>Name:</h3>
              <p>{name}</p>
            </div>
            <div className="box__item">
              <h3>Types:</h3>
              <ul>
                {tags?.map((tag: string) => (
                  <span className="tag-item" key={tag}>
                    {tag}
                  </span>
                ))}
              </ul>
            </div>
            <div className="box__item">
              <h3>Description:</h3>
              <p>{description ? description : "_"}</p>
            </div>
          </div>
        </div>
        <div className="box__actions">
          <Modal>
            <Modal.Open opens="project-form-edit">
              <button className="edit-btn">
                <HiOutlinePencil />
              </button>
            </Modal.Open>
            <Modal.Open opens="delete-project">
              <button className="delete-btn">
                <HiOutlineTrash />
              </button>
            </Modal.Open>
            <Modal.Window name="project-form-edit">
              <CreateProjectForm projectToEdit={project} />
            </Modal.Window>
            <Modal.Window name="delete-project">
              <ConfirmDelete resourceName="projects" disabled={isDeleting} onConfirm={handleDelete} />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default AdminCard;
