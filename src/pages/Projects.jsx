import Heading from "../ui/Heading";
import Cards from "../ui/Cards";
import InfoParagraph from "../ui/InfoParagraph";

function Projects() {
	// const {isLoading, data} = useQuery({
	// 	queryKey: ["Projects"],
	// 	queryFn: getProjects,
	// });

	// console.log(data);
	// const text = JSON.parse(imgg.replace(/'/g, '"'));
	// console.log(data[0]);
	// const imgUrl = text;
	// console.log();

	// if (isLoading) return <Spinner />;

	return (
		<>
			<Heading type="large">Projects</Heading>
			<InfoParagraph mb="64" type="small">
				Showcase of innovative design solutions
			</InfoParagraph>
			<Cards />
		</>
	);
}

export default Projects;
