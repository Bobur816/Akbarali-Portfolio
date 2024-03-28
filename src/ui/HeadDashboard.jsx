import styled from "styled-components";
import Status from "../ui/Status";
import LocationPoint from "../ui/LocationPoint";
import InfoParagraph from "../ui/InfoParagraph";
import Button from "../ui/Button";
import {LuDownload} from "react-icons/lu";
import CopyEmailButton from "./CopyEmailButton";

const StyledHeadText = styled.h1`
	font-size: 4.8rem;
	font-weight: 600;
	line-height: 65px;
	letter-spacing: -2px;
	margin: 3rem 0;

	& span {
		color: #7d7f83;
		/* margin-left: 10px; */
		padding: 0 10px;
		border-right: 5px solid #7d7f83;
	}
`;

const ButtonBox = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 16px;
	margin-bottom: 64px;
	/* background-color: red; */

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

function HeadDashboard() {
	return (
		<>
			<Status />
			<StyledHeadText>
				Hey, I'm Akbarali👏
				<br /> I design
				<span>website</span>
			</StyledHeadText>
			<LocationPoint />
			<InfoParagraph type="medium">
				Akbarali is an experienced UX/UI designer based in Uzbekistan known for creating intuitive and engaging user
				experiences.
			</InfoParagraph>
			<ButtonBox>
				<CopyEmailButton />
				<Button href="Khasanov Akbarali Qurbonali o`g`li.pdf" download="KhasanovAkbaraliCV.pdf">
					<LuDownload />
					CV
				</Button>
			</ButtonBox>
		</>
	);
}

export default HeadDashboard;
