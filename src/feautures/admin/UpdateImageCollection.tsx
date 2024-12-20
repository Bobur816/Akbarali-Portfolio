import { useForm } from "react-hook-form";
import { useUpdateCarousel } from "../../hooks/useUpdateCarousel";
// import FormRow from "../../UI/FormRow";
// import ImageCarousel from "../../UI/ImageCarousel";
// import ImageCarouselAdmin from "./ImageCarouselAdmin";

function UpdateImageCollection({ images, name }: { images: []; name: string }) {
  const { isUpdating, updateCarousel } = useUpdateCarousel();

  const { register, handleSubmit, reset } = useForm({});

  function uploadImg(data: any) {
    const image = data.newImage[0];

    updateCarousel(
      { images, image, name },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  function onError() {
    // console.log(error);
  }
  return (
    <div className="update-img">
      {images.length ? (
        <ul className="update-img-show">
          {images?.map((image) => (
            <li key={image}>
              <img src={image} alt="image" />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No images yet</h3>
      )}

      <form onSubmit={handleSubmit(uploadImg, onError)}>
        <input className="form__file-input" type="file" id="newImage" {...register("newImage")} disabled={isUpdating} />
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default UpdateImageCollection;
