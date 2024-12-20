import styled from "styled-components";
import { LuDot } from "react-icons/lu";

const StyledFooter = styled.footer`
  /* background-color: red; */
  padding-top: 48px;
  border-top: 1px solid #272727;
`;

const FooterText = styled.p`
  display: flex;
  align-items: center;
  /* gap: 10px; */
  flex-wrap: wrap;
  color: #767676;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  /* & svg {
		margin-right: 10px;
	} */
`;

const StyledLink = styled.a`
  color: #fff;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterText>© 2024 All rights reserved</FooterText>
    </StyledFooter>
  );
}

export default Footer;
