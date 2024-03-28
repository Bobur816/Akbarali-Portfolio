import {useQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {getProjects} from "../services/apiProjects";
import Spinner from "./Spinner";
import CardItem from "./CardItem";

const StyledCards = styled.ul`
	/* background-color: red; */
	margin-top: 24px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2.4rem;
	padding-bottom: 48px;

	@media (max-width: 1023px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
function Cards({type = ""}) {
	const {isLoading, data: projects} = useQuery({
		queryKey: ["Projects"],
		queryFn: getProjects,
	});

	const dataLocal = JSON.parse(localStorage.getItem("projects"));

	const finalData = projects || dataLocal;

	// console.log(dataLocal);
	const sorted = finalData.filter((project) => project.isSelected);

	const sortedProjects = type === "selected" ? sorted : finalData;

	// console.log(projects);
	// const projects = data.at(0);
	// const text = JSON.parse(imgg.replace(/'/g, '"'));
	// console.log(data[0]);
	// const imgUrl = text;
	// console.log();

	if (isLoading) return <Spinner />;
	return (
		<StyledCards>
			{sortedProjects.map((project) => (
				<CardItem project={project} key={project.id} />
			))}
		</StyledCards>
	);
}

export default Cards;
