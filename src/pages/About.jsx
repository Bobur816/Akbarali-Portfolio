import styled from "styled-components";
import Heading from "../ui/Heading";
import TableExperiance from "../ui/TableExperiance";

const StyledAbout = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: flex-start;
	gap: 30px;
	@media (max-width: 1023px) {
		flex-direction: column-reverse;
	}

	& img {
		width: 25%;

		@media (max-width: 1023px) {
			width: 60%;
		}

		@media (max-width: 768px) {
			width: 100%;
		}
	}
`;

const InfoJob = styled.h3`
	color: #a3a3a3;
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
	width: 75%;
	/* background-color: red; */

	@media (max-width: 1023px) {
		width: 100%;
	}
`;

const Paragraph = styled.p`
	color: #a3a3a3;
	font-family: Inter;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 177.778% */

	& a {
		text-decoration: none;
		color: #17c871;
	}
`;

function About() {
	return (
		<StyledAbout>
			<Info>
				<div>
					<Heading type="large">Akbarali Khasanov</Heading>
					<InfoJob>UX/UI Designer</InfoJob>
				</div>
				<Paragraph>
					Hey, I'm Akbarali. I'm a designer and software tinkerer. I am currently working as a UX/UI designer at{" "}
					<a href="https://itic.uz/" target="blank">
						IT Investments Center
					</a>
					Academy and{" "}
					<a href="https://uacademy.uz/" target="blank">
						Uacademy
					</a>
					. And I have been freelancing at{" "}
					<a href="https://kwork.ru/user/akbaralikhasanov" target="blank">
						Kwork
					</a>{" "}
					for 4 years. During this time, I achieved great success.
				</Paragraph>
				<Paragraph>
					Before, I spent two years designing{" "}
					<a href="https://github.com/AkbaraliKhasanov" target="blank">
						native mobile apps at GitHub.
					</a>
				</Paragraph>
				<TableExperiance />
			</Info>
			<img src="user.svg" alt="user-img" />
		</StyledAbout>
	);
}

export default About;
