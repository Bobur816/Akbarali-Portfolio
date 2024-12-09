function ImageCarouselAdmin({ imageCollection }: { imageCollection: [] }) {
  return (
    <div className="collection">
      <ul className="box__images">
        {imageCollection?.map((imageUrl: any, index: any) => (
          <li key={index}>
            <img src={imageUrl} alt="image" />
          </li>
        ))}
      </ul>
      <button>Edit</button>
    </div>
  );
}

export default ImageCarouselAdmin;
