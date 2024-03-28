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
		transform: scale(1.07);
	}
`;

const ImgBox = styled.div`
	/* background-color: green; */
	height: 50rem;
	border-radius: 12px;
	overflow: hidden;

	@media (max-width: 1440px) {
		height: 32rem;
	}
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
