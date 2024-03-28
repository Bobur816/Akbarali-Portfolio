import Cards from "../ui/Cards";
import HeadDashboard from "../ui/HeadDashboard";
import Heading from "../ui/Heading";

function Dashboard() {
	return (
		<>
			<HeadDashboard />
			<Heading type="middle">Selected Work</Heading>
			<Cards type="selected" />
		</>
	);
}

export default Dashboard;
