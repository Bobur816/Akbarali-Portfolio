import {TbPointFilled} from "react-icons/tb";
import styled from "styled-components";

const StyledStatus = styled.span`
	border-radius: 200px;
	padding: 4px 12px;
	font-size: 14px;
	background: rgba(23, 200, 113, 0.1);
	color: #17c871;
	width: 170px;
	display: flex;
	justify-content: flex-start;
	gap: 8px;
	align-items: center;
	margin-right: auto;
`;

function Status() {
	return (
		<StyledStatus>
			<TbPointFilled />
			<span>Available for work</span>
		</StyledStatus>
	);
}

export default Status;
