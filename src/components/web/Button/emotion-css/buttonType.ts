import { css } from '@emotion/react';

export const button_primary = css`
	border: 1px solid #d9d9d9;
	border-color: #1890ff;
	background-color: #1890ff;
	color: #ffffff;
	&:hover {
		background-color: #40a9ff;
	}
	&:focus {
		animation-name: ;
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