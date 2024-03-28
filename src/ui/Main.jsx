import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const StyledMain = styled.main`
	/* background-color: rgba(26, 26, 26, 1); */
	background-color: red;
	overflow-y: scroll;
	border-radius: 12px;
	padding: 120px;

	@media (max-width: 1023px) {
		padding: 50px;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	@media (max-width: 768px) {
		margin-top: 75px;
		padding: 20px;
	}
`;

function Main({children}) {
	return (
		<StyledMain>
			{children}
			<Footer />
		</StyledMain>
	);
}

export default Main;
