import styled from "styled-components";

const HeadingLarge = styled.h2`
	font-size: 40px;
	font-weight: 600;
	line-height: 56px; /* 140% */
	letter-spacing: -2px;
`;

const HeadingMiddle = styled.h2`
	font-size: 26px;
	font-weight: 600;
`;
const HeadingSmall = styled.h2`
	font-size: 16px;
	font-weight: 500;
	margin-top: 14px;
	margin-bottom: 10px;
`;

function Heading({type, children}) {
	if (type === "large") return <HeadingLarge>{children}</HeadingLarge>;
	if (type === "middle") return <HeadingMiddle>{children}</HeadingMiddle>;
	if (type === "small") return <HeadingSmall>{children}</HeadingSmall>;
}

export default Heading;
