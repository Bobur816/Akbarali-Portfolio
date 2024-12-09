import { useQuery } from "@tanstack/react-query";
import Cards from "../UI/Cards/Cards";
import HeadDashboard from "../UI/HeadDashboard";
import { getSelectedProjects } from "../services/apiProjects";

function Dashboard() {
  const { isLoading, data: selecteds } = useQuery({
    queryKey: ["SelectedProjects"],
    queryFn: getSelectedProjects,
  });
  return (
    <>
      <HeadDashboard />
      <h2 className="section__title_sm">Selected Work</h2>
      <Cards isLoading={isLoading} projects={selecteds} />
    </>
  );
}

export default Dashboard;
