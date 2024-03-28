import {CiLocationOn} from "react-icons/ci";
import styled from "styled-components";

const StyledPoint = styled.span`
	color: #ff8b52;
	font-size: 16px;
	font-weight: 400;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;

	& svg {
		width: 20px;
		height: 20px;
	}
`;

function LocationPoint() {
	return (
		<StyledPoint>
			<CiLocationOn />
			<span>Tashkent, Uzbekistan</span>
		</StyledPoint>
	);
}

export default LocationPoint;
