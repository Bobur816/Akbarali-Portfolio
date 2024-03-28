import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styled from "styled-components";
import {useState} from "react";
import {BiCopy} from "react-icons/bi";

const Button = styled.button`
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

function CopyEmailButton() {
	const [copied, setCopied] = useState(false);
	return (
		<CopyToClipboard text="akbaralixasanov2000@gmail.com" onCopy={() => setCopied(true)}>
			<Button>
				<BiCopy />
				{copied ? "Copied" : "Copy email"}
			</Button>
		</CopyToClipboard>
	);
}

export default CopyEmailButton;
