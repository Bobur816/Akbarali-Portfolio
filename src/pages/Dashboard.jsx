import HeadDashboard from "../ui/HeadDashboard";
import Heading from "../ui/Heading";
import SelectedCards from "../ui/SelectedCards";

function Dashboard() {
	return (
		<>
			<HeadDashboard />
			<Heading type="middle">Selected Work</Heading>
			<SelectedCards />
		</>
	);
}

export default Dashboard;
