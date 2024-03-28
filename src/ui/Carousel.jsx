import React from "react";
import {useState} from "react";
import styled, {css} from "styled-components";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const StyledCarousel = styled.div`
	position: relative;
	width: 100%;
	height: 750px;
	@media (max-width: 1440px) {
		height: 600px;
	}
	display: flex;
	border-radius: 12px;

	@media (max-width: 768px) {
		height: 222px;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 12px;
	overflow: hidden;
`;

const MoveButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	${(props) =>
		props.pos === "left" &&
		css`
			left: 16px;

			@media (max-width: 768px) {
				left: 5px;
			}
		`}
	${(props) =>
		props.pos === "right" &&
		css`
			right: 16px;
			@media (max-width: 768px) {
				right: 5px;
			}
		`}
	background-color: #fff;
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	padding: 10px;
	@media (max-width: 768px) {
		padding: 3.5px;
	}

	border: none;
	border-radius: 50%;

	& svg {
		width: 24px;
		height: 24px;

		@media (max-width: 768px) {
			width: 16px;
			height: 16px;
		}
	}

	&:hover {
		background-color: #9e9494;
	}
`;

const DotContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 6px;
	bottom: 20px;
	left: 50%;
	transform: translate(-50%, 0);
	background-color: rgba(0, 0, 0, 0.2);
	padding: 12px 16px;
	border-radius: 200px;
`;

const Dot = styled.div`
	background-color: ${(props) => (props.active ? "green" : "rgba(217, 217, 217, 1)")};
	${(props) =>
		props.active
			? css`
					height: 10px;
					width: 10px;
			  `
			: css`
					height: 8px;
					width: 8px;
			  `}

	border-radius: 50%;
`;

function Carousel({images}) {
	images = images.replace(/'/g, '"'); //replacing all ' with "
	images = JSON.parse(images);

	const [currentIndex, setCurrentIndex] = useState(0);

	function handlePrevious() {
		setCurrentIndex((index) => index - 1);
	}

	function handleNext() {
		setCurrentIndex((index) => index + 1);
	}
	return (
		<StyledCarousel>
			<Img src={images[currentIndex]} alt={`image-${currentIndex}`} />
			{currentIndex !== 0 && (
				<MoveButton pos="left" onClick={handlePrevious}>
					<IoIosArrowBack />
				</MoveButton>
			)}
			{currentIndex !== images.length - 1 && (
				<MoveButton pos="right" onClick={handleNext}>
					<IoIosArrowForward />
				</MoveButton>
			)}
			{/* {images.map((image, index) => (
				<Img src={image} key={index} />
			))} */}

			<DotContainer>
				{images.map((dot, index) => (
					<Dot key={index} active={index === currentIndex} />
				))}
			</DotContainer>
		</StyledCarousel>
	);
}

export default Carousel;
