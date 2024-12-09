import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import ImageCarouselAdmin from "./ImageCarouselAdmin";
import Modal from "../../UI/Modal";
import CreateProjectForm from "./CreateProjectForm";

function AdminCard({ project }: any) {
  const { id, name, image, description, imageCollection, tags } = project;

  return (
    <li className="admin__project-card">
      <div className="box">
        <div className="box__img">
          <img src={image} alt="card-image" />
        </div>
        <div className="box__info">
          <ImageCarouselAdmin imageCollection={imageCollection} />
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
            <Modal.Open opens="project-form">
              <button className="edit-btn">
                <HiOutlinePencil />
              </button>
            </Modal.Open>
            <Modal.Open opens="cabin-form">
              <button className="delete-btn">
                <HiOutlineTrash />
              </button>
            </Modal.Open>
            <Modal.Window name="project-form">
              <CreateProjectForm />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </li>
  );
}

export default AdminCard;
