import React from "react";
import styled from "styled-components";

const StyledTableExperiance = styled.div`
	& > p {
		color: #a3a3a3;
		opacity: 0.58;
	}

	& > div {
		margin-bottom: 48px;
	}
`;

const Entry = styled.p`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	font-size: 16px;
	line-height: 28px;
	font-weight: 500;
	/* background-color: red; */
	margin-top: 16px;
	color: #a3a3a3;

	& > ins {
		flex-grow: 1;
		border-bottom: 1px dashed #d4d4d4;
		margin: 15px;
	}

	&:hover {
		color: #17c871;
	}
	&:hover ins {
		/* border-color: #17c871; */
		border-bottom: 1px dashed #17c871;
	}

	& span {
		color: #a1a1a1;
		margin-left: 2.4rem;
		opacity: 0.58;
	}
`;
function TableExperiance() {
	return (
		<StyledTableExperiance>
			{" "}
			<p>Work</p>
			<div>
				<Entry>
					<a href="https://www.linkedin.com/company/it-investments-center/?originalSubdomain=uz">IT Invesments Center</a>
					<ins></ins>
					UX/UI Designer
					<span>Feb, 2024-Present</span>
				</Entry>
				<Entry>
					<a href="https://udevs.io/">Udevs</a>
					<ins></ins>
					UX/UI Designer
					<span>July, 2023 - Jan, 2024</span>
				</Entry>
				<Entry>
					<a href="https://uacademy.uz/">Uacademy</a>
					<ins></ins>
					UX/UI Designer Mentor
					<span>Nov, 2023 - Feb, 2024</span>
				</Entry>
				<Entry>
					<a href="https://kwork.ru/user/akbaralikhasanov">Tow Truck</a>
					<ins></ins>
					Product Designer
					<span>May, 2023-</span>
				</Entry>
				<Entry>
					<a href="https://kwork.ru/user/akbaralikhasanov">Kwork</a>
					<ins></ins>
					Designer & Android developer
					<span>May, 2020-</span>
				</Entry>
			</div>
			<p>Education</p>
			<div>
				<Entry>
					<a href="https://tuit.uz/">TUIT</a>
					<ins></ins>
					Television tecnology
					<span>Aug, 2019 - June, 2023</span>
				</Entry>
				<Entry>
					<a href="https://online.pdp.uz/">PDP Academy</a>
					<ins></ins>
					Android Developer
					<span>Oct, 2019 - July,2020</span>
				</Entry>
				<Entry>
					<a href="https://online-oscar.uz/">Oscar School</a>
					<ins></ins>
					UX/UI Designer
					<span>---------</span>
				</Entry>
			</div>
		</StyledTableExperiance>
	);
}

export default TableExperiance;
