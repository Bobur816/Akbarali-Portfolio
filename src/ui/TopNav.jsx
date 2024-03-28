// import {useState} from "react";
import {styled} from "styled-components";
import MainNav from "./MainNav";

const StyledTopNav = styled.div`
	background-color: red;
	padding: 0;
	height: 50px;
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

const Button = styled.button`
	padding: 5px;
`;

const Img = styled.img`
	width: 40px;
`;

function TopNav() {
	return (
		<StyledTopNav>
			<Img src="https://qlexuncemojoapbkrvse.supabase.co/storage/v1/object/public/images/user.svg" alt="user-img" />
			<Button>Open</Button>
		</StyledTopNav>
	);
}

export default TopNav;
