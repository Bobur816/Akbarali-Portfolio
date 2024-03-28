import React from "react";
import {NavLink} from "react-router-dom";
import styled, {css} from "styled-components";

const style = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	color: #fff;
	background-color: transparent;
	border-radius: 12px;
	border: 1px solid #363636;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.2px;
	padding: 8px 16px;
	height: 42px;
	transition: all 0.3s;

	@media (max-width: 768px) {
		width: 100%;
	}

	&:hover {
		background-color: #3a3a3a;
	}
	&:hover svg {
		color: #fff;
	}

	& svg {
		width: 20px;
		height: 20px;
		color: #363636;
	}
`;

const StyledNavLink = styled(NavLink)`
	${style}
`;

const StyledLink = styled.a`
	${style}
`;

const StyledButton = styled.button`
	${style}
`;

function Button({to = "", href = "", onclick, download, children}) {
	if (href)
		return (
			<StyledLink href={href} target="blank" download={download}>
				{children}
			</StyledLink>
		);
	if (to) return <StyledNavLink to={to}>{children}</StyledNavLink>;
	return <StyledButton onClick={onclick}>{children}</StyledButton>;
}

export default Button;
