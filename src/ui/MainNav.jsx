import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {HiEnvelope, HiMiniHome, HiMiniUserCircle, HiRectangleStack} from "react-icons/hi2";

const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4px;
	@media (max-width: 768px) {
		margin-top: 70px;
	}
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: flex;
		align-items: center;
		gap: 1.2rem;

		color: #a1a1a1;
		font-size: 14px;
		font-weight: 500;
		padding: 1rem 1.2rem;
		transition: all 0.3s;
		border-radius: 12px;
	}

	/* This works because react-router places the active class on the active NavLink */
	&:hover,
	&:active,
	&.active:link,
	&.active:visited {
		color: #fff;
		background-color: #353535;
	}

	& svg {
		width: 2rem;
		height: 2rem;
		color: var(--color-grey-400);
		transition: all 0.3s;
	}

	&:hover svg,
	&:active svg,
	&.active:link svg,
	&.active:visited svg {
		color: #fff;
	}
`;

function MainNav({isOpen, setIsOpen}) {
	return (
		<nav>
			<NavList isOpen={isOpen} onClick={() => setIsOpen(false)}>
				<li>
					<StyledNavLink to="/dashboard">
						<HiMiniHome />
						<span>Homepage</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/projects">
						<HiRectangleStack />
						<span>Projects</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/about">
						<HiMiniUserCircle />
						<span>About</span>
					</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/contact">
						<HiEnvelope />
						<span>Contact</span>
					</StyledNavLink>
				</li>
			</NavList>
		</nav>
	);
}

export default MainNav;
