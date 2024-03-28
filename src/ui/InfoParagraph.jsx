import styled, {css} from "styled-components";

const styleParagraph = css`
	color: #a3a3a3;
	font-style: normal;
	font-weight: 400;
	width: 75%;
	line-height: 24px; /* 150% */
	margin-bottom: ${({mb}) => `${mb}px`};

	@media (max-width: 768px) {
		width: 100%;
	}
`;
const ParagraphMedium = styled.p`
	margin: 30px 0;
	${styleParagraph}
	font-size: 16px;
`;

const ParagraphSmall = styled.p`
	${styleParagraph}
	font-size: 14px;
`;

function InfoParagraph({mb = "", type, children}) {
	if (type === "medium") return <ParagraphMedium mb={mb}>{children}</ParagraphMedium>;
	if (type === "small") return <ParagraphSmall mb={mb}>{children}</ParagraphSmall>;
}

export default InfoParagraph;
