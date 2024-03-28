import styled from "styled-components";
import Avatar from "./Avatar";
import MainNav from "./MainNav";
import Social from "./Social";

const StyledSidebar = styled.aside`
	padding: 0 2rem;
	overflow-y: scroll;
	transition: all 0.3s;
	background-color: #141414;
	/* background-color: red; */
	width: 100%;

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		/* top: 0; */
		z-index: 10;
		height: ${({isopen}) => (isopen ? "470px" : "0")};
	}
`;

function Sidebar({isopen, setIsOpen}) {
	return (
		<StyledSidebar isopen={isopen}>
			<Avatar />
			<MainNav setIsOpen={setIsOpen} />
			<Social />
		</StyledSidebar>
	);
}

export default Sidebar;
