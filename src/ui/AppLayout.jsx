import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import styled from "styled-components";
import {useState} from "react";
import {HiBars3} from "react-icons/hi2";

const StyledAppLayout = styled.div`
	background-color: rgba(20, 20, 20, 1);
	padding: 16px;
	display: grid;
	transition: all 0.3s;
	grid-template-columns: 26rem 1fr;
	@media (max-width: 768px) {
		display: block;
	}
	height: 100vh;
`;

const MobileTop = styled.div`
	position: fixed;
	display: none;
	background-color: rgba(20, 20, 20, 1);
	justify-content: space-between;
	align-items: center;
	padding: 16px;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 999;

	@media (max-width: 768px) {
		display: flex;
	}
`;

const ToggleButton = styled.button`
	background-color: transparent;
	border: none;

	& svg {
		height: 24px;
		width: 24px;
		color: #a3a3a3;
	}
`;

const Img = styled.img`
	width: 48px;
`;

function AppLayout() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<StyledAppLayout>
			<MobileTop>
				<Img src="user.svg" alt="user-img" />
				<ToggleButton onClick={() => setIsOpen((open) => !open)}>
					<HiBars3 />
				</ToggleButton>
			</MobileTop>
			<Sidebar isopen={isOpen} />
			<Main>
				<Outlet />
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
