import { css, keyframes } from '@emotion/react';

const btn_focus_and_blur = keyframes`
	0% {
		box-shadow: 0px 0px 0px 0px #69c0ff;
	}
	50% {
		box-shadow: 0px 0px 6px 0px #69c0ff;
	}
	100% {
		box-shadow: 0px 0px 0px 0px #69c0ff;
	}
`;

export const button_primary = css`
	border: 1px solid #d9d9d9;
	border-color: #1890ff;
	background-color: #1890ff;
	color: #ffffff;
	&:hover {
		background-color: #40a9ff;
	}
	&:focus {
		animation-name: ${btn_focus_and_blur};
		animation-duration: 1s;
		border-color: #40a9ff;
		background-color: #40a9ff;
	}
	&.active {
		background-color: #1890ff;
	}
	&.disabled {
		color: rgba(0, 0, 0, 0.25);
		background: #f5f5f5;
		border-color: #d9d9d9;
		cursor: not-allowed;
	}
`;

export const button_default = css`
	border: 1px solid #d9d9d9;
	background-image: none;
	background-color: #ffffff;
	color: rgba(0, 0, 0, 0.85);
	&:hover {
		color: #40a9ff;
		border-color: #40a9ff;
	}
	&:focus {
		animation-name: ${btn_focus_and_blur};
		animation-duration: 1s;
		border-color: #40a9ff;
		color: #40a9ff;
	}
	&.active {
		background-color: #1890ff;
	}
	&.disabled {
		color: rgba(0, 0, 0, 0.25);
		background: #f5f5f5;
		border-color: #d9d9d9;
		cursor: not-allowed;
	}
`;

export const button_dashed = css`
	border: 1px dashed #d9d9d9;
	background-image: none;
	background-color: #ffffff;
	color: rgba(0, 0, 0, 0.85);
	&:hover {
		color: #40a9ff;
		border-color: #40a9ff;
	}
	&:focus {
		animation-name: ${btn_focus_and_blur};
		animation-duration: 1s;
		border-color: #40a9ff;
		color: #40a9ff;
	}
	&.active {
		background-color: #1890ff;
	}
	&.disabled {
		color: rgba(0, 0, 0, 0.25);
		background: #f5f5f5;
		border-color: #d9d9d9;
		cursor: not-allowed;
	}
`;

export const button_text = css`
	border: none;
	background-image: none;
	background-color: #ffffff;
	color: rgba(0, 0, 0, 0.85);
	&:hover {
		background-color: #f5f5f5;
	}
	&.active {
		background-color: #f5f5f5;
	}
	&.disabled {
		color: #f5f5f5;
		background: #ffffff;
		cursor: not-allowed;
	}
`;

export const button_link = css`
	border: none;
	background-image: none;
	background-color: #ffffff;
	color: #1890ff;
	&:hover {
		color: #40a9ff
	}
	&.active {
		color: #40a9ff;
	}
	&.disabled {
		color: #f5f5f5;
		background: #ffffff;
		cursor: not-allowed;
	}
`;
