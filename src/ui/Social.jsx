import styled from "styled-components";
import {FaGithub, FaLinkedin, FaXTwitter} from "react-icons/fa6";

const SocialBox = styled.div`
	margin-top: 40px;
	color: #a1a1a1;
	gap: 1rem;
`;

const StyledList = styled.ul`
	display: flex;
	flex-direction: column;
	/* padding: 1.2rem; */
	gap: 4px;
`;

const P = styled.p`
	color: #7c7f82;
	padding: 1.2rem;

	font-size: 10px;
	font-weight: 500;
	line-height: 16px; /* 160% */
	letter-spacing: 0.6px;
	text-transform: uppercase;
`;

const StyledLink = styled.a`
	display: inline-block;
	width: 100%;
	padding: 1rem 1.2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 12px;
	border-radius: 12px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px; /* 142.857% */

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover {
		color: #fff;
		background-color: #353535;
	}

	&:hover svg {
		color: #fff;
	}
`;

function Social() {
	return (
		<SocialBox>
			<P>FOLLOW</P>
			<StyledList>
				<li>
					<StyledLink href="https://twitter.com/XasanovAkbarali" target="blank">
						<FaXTwitter />
						<span>Twitter</span>
					</StyledLink>
				</li>
				<li>
					<StyledLink href="https://www.linkedin.com/in/akbaralikhasanov/" target="blank">
						<FaLinkedin />
						<span>Linkedin</span>
					</StyledLink>
				</li>
				<li>
					<StyledLink href="https://github.com/AkbaraliKhasanov" target="blank">
						<FaGithub />
						<span>GitHub</span>
					</StyledLink>
				</li>
			</StyledList>
		</SocialBox>
	);
}

export default Social;
