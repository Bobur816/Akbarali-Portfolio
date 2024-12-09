import { Link } from "react-router-dom";
import "./cart-item.scss";

function CardItem({ project }: any) {
  const { id, name, image, description } = project;
  return (
    <li>
      <Link to={`/projects/${id}`} className="cart-item">
        <div className="cart-item_img">
          <img src={image} alt="project-img" />
        </div>
        <h3 className="text_md font_normal">{name}</h3>
        <p className="text_sm font_light text_gray">{description}</p>
      </Link>
    </li>
  );
}

export default CardItem;
