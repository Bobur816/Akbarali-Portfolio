import Modal from "../../UI/Modal";
import UpdateImageCollection from "./UpdateImageCollection";

function ImageCarouselAdmin({ imageCollection, name }: { imageCollection: []; name: string }) {
  return (
    <div className="collection">
      <ul className="box__images">
        {imageCollection?.map((imageUrl: any, index: any) => (
          <li key={index}>
            <img src={imageUrl} alt="image" />
          </li>
        ))}
      </ul>
      <Modal>
        <Modal.Open opens="upgrade-image-collection">
          <button>Edit</button>
        </Modal.Open>
        <Modal.Window name="upgrade-image-collection">
          <UpdateImageCollection images={imageCollection} name={name} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ImageCarouselAdmin;
