import styled from "styled-components";

const StyledAvatar = styled.div`
	text-align: center;
	margin: 40px 0;

	@media (max-width: 768px) {
		display: none;
	}
`;

const Img = styled.img`
	width: 4.8rem;
`;

const AvatarInfo = styled.div`
	margin-top: 12px;
`;

const StyledName = styled.h3`
	font-size: 16px;
	margin-bottom: 8px;
	font-weight: 500;
	line-height: normal;
`;

const StyledJob = styled.p`
	color: #a3a3a3;
	font-size: 14px;
	font-weight: 400;
`;

function Avatar() {
	return (
		<StyledAvatar>
			<Img src="https://qlexuncemojoapbkrvse.supabase.co/storage/v1/object/public/images/user.svg" alt="user-img" />
			{/* <img src="user.svg" alt="user-img" /> */}
			<AvatarInfo>
				<StyledName>Akbarali Xasanov</StyledName>
				<StyledJob>UX/UI Designer</StyledJob>
			</AvatarInfo>
		</StyledAvatar>
	);
}

export default Avatar;
