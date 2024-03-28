import styled from "styled-components";
import Heading from "../ui/Heading";
import InfoParagraph from "../ui/InfoParagraph";
import Button from "../ui/Button";
import MessageBox from "../ui/MessageBox";
import CopyEmailButton from "../ui/CopyEmailButton";

const ContactLayout = styled.div`
	/* background-color: red; */
	border-top: 1px solid #272727;
`;

const ContactBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 64px;
	margin: 48px 0;

	@media (max-width: 1023px) {
		flex-wrap: wrap;
	}
`;
const Box = styled.div`
	width: 50%;

	@media (max-width: 1023px) {
		width: 100%;
	}

	& p:first-child {
		color: #fff;
		font-family: Inter;
		font-size: 16px;
		font-weight: 400;
	}

	& p:last-child {
		color: #a3a3a3;
		opacity: 0.58;
		font-size: 14px;
		font-weight: 400;
		line-height: 24px; /* 171.429% */
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

function Contact() {
	return (
		<>
			<Heading type="large">Contact</Heading>
			<InfoParagraph mb="48" type="small">
				Get in touch for design inquiries
			</InfoParagraph>
			<ContactLayout>
				<ContactBox>
					<Box>
						<p>akbaralixasanov2000@gmail.com</p>
						<p>email</p>
					</Box>
					<Box>
						<p>+998 91 695 16 33</p>
						<p>Phone</p>
					</Box>
				</ContactBox>

				<ButtonBox>
					<CopyEmailButton />
				</ButtonBox>

				<Heading type="middle">Send a message</Heading>
				<MessageBox />
			</ContactLayout>
		</>
	);
}

export default Contact;
