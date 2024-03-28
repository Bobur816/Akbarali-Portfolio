import styled from "styled-components";
import InfoParagraph from "./InfoParagraph";
import Heading from "./Heading";
import {Link} from "react-router-dom";

const StyledCardItem = styled.li`
	display: block;
	/* background-color: yellow; */
	transition: all 0.3s;

	&:hover img {
		transition: all 0.3s;
		transform: scale(1.1);
	}
`;

const ImgBox = styled.div`
	/* background-color: green; */
	height: 32rem;
	border-radius: 12px;
	overflow: hidden;
`;

const ProjectImg = styled.img`
	transition: all 0.3s;

	height: 100%;
	width: 100%;
	/* overflow: hidden; */
	object-fit: cover;
	z-index: 0;
`;

function CardItem({project}) {
	const {id, name, image, description} = project;
	return (
		<StyledCardItem>
			<Link to={`/projects/${id}`}>
				<ImgBox>
					<ProjectImg src={image} alt="project-img" />
				</ImgBox>
				<Heading type="small">{name}</Heading>
				<InfoParagraph type="small">{description}</InfoParagraph>
			</Link>
		</StyledCardItem>
	);
}

export default CardItem;
