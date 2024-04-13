import Heading from "../ui/Heading";
import InfoParagraph from "../ui/InfoParagraph";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import {IoIosArrowBack} from "react-icons/io";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel";
import InfoBox from "../ui/InfoBox";

const BackButton = styled.button`
	background-color: transparent;
	margin-bottom: 24px;
	border: none;
	color: #fff;
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 400;
	gap: 12px;
	/* text-align: left; */
	& svg {
		width: 16px;
		height: 16px;
		transition: all 0.2s;
		color: rgba(125, 127, 131, 1);
	}

	&:hover svg {
		color: #fff;
		transform: scale(1.5);
	}
`;

const ProjectContainer = styled.div`
	border-top: 1px solid #272727;
	padding-top: 48px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 32px;
	& p {
		width: 100%;
	}
`;

const TagBox = styled.div`
	display: flex;
	gap: 12px;
`;

const Tag = styled.span`
	display: inline-block;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	line-height: 24px;
	padding: 2px 12px;
	/* align-items: flex-start; */
	gap: 10px;
	border-radius: 6px;
	background: #382218;
	color: #ff8b52;
`;

function Project() {
	const {id: projectId} = useParams();
	// console.log(projectId);
	// const {data} = useQuery({
	// 	queryKey: ["Projects"],
	// 	// queryFn: (projectId) => getProjectData(projectId),
	// 	queryFn: getProjects,
	// });

	const projects = JSON.parse(localStorage.getItem("projects"));

	const project = projects.find((project) => project.id === Number(projectId));
	// console.log(project);

	const {name, description, timeline, role, imageCollection, projectLink, tags} = project;
	const navigate = useNavigate();
	// tags = JSON.parse(tags);
	const allTags = tags?.replace(/\[|\]/g, "").split(",");
	// console.log();
	// console.log(projects);

	// console.log(data);
	// const text = JSON.parse(imgg.replace(/'/g, '"'));
	// console.log(data[0]);
	// const imgUrl = text;
	// console.log();

	// if (isLoading) return <Spinner />;

	return (
		<>
			<BackButton onClick={() => navigate(-1)}>
				<IoIosArrowBack /> Back to list
			</BackButton>
			<ProjectContainer>
				<TagBox>{allTags && allTags.map((tag) => <Tag key={Math.random()}>#{tag}</Tag>)}</TagBox>
				<div>
					<Heading type="large">{name}</Heading>
					<InfoParagraph mb="0" type="small">
						{description}
					</InfoParagraph>
				</div>
				<Button href={projectLink}>Live Preview</Button>
				<Carousel images={imageCollection} />
				<InfoBox timeline={timeline} role={role} />
			</ProjectContainer>
		</>
	);
}

export default Project;
