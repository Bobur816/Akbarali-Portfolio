import React from "react";
import styled, {css} from "styled-components";
import {HiCalendar} from "react-icons/hi2";
import {FaUserCheck} from "react-icons/fa6";

const StyledInfoBox = styled.div`
	/* background-color: red; */
	display: flex;
	margin-bottom: 48px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
	gap: 4px;
	width: 100%;
`;

const Box = styled.div`
	${(props) =>
		props.pos === "left"
			? css`
					border-top-left-radius: 12px;
					border-bottom-left-radius: 12px;
			  `
			: css`
					border-top-right-radius: 12px;
					border-bottom-right-radius: 12px;
			  `}

	background-color: #282828;
	height: 180px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	& svg {
		width: 30px;
		height: 30px;
		color: rgba(255, 139, 82, 1);
	}

	width: 50%;
	@media (max-width: 768px) {
		border-radius: 12px;
		width: 100%;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

const BoxTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.2px;
`;

const BoxType = styled.p`
	color: #767676;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: -0.2px;
`;

function InfoBox({timeline, role}) {
	return (
		<StyledInfoBox>
			<Box pos="left">
				<HiCalendar />
				<Info>
					<BoxTitle>{timeline}</BoxTitle>
					<BoxType>Timeline</BoxType>
				</Info>
			</Box>
			<Box pos="right">
				<FaUserCheck />
				<Info>
					<BoxTitle>{role}</BoxTitle>
					<BoxType>Role</BoxType>
				</Info>
			</Box>
		</StyledInfoBox>
	);
}

export default InfoBox;
