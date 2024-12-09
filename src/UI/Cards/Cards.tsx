import Spinner from "../Spinner/Spinner";

import "./cards.scss";
import CardItem from "../CardItem/CardItem";

export type CardProps = {
  isLoading: boolean;
  projects: any[] | undefined | null;
};

function Cards({ isLoading, projects }: CardProps) {
  if (isLoading) return <Spinner />;
  return (
    <ul className="cards">
      {projects?.map((project) => (
        <CardItem project={project} key={project.id} />
      ))}
    </ul>
  );
}

export default Cards;
