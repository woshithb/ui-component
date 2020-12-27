import { css } from '@emotion/react';

export const button_clearDefault = css`
  outline: none;
`;

export const button_btn = css`
  letter-spacing: normal;
  word-spacing: normal;
  display: inline-block;
  border-radius: 2px;
  padding: 4px 15px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
`
export const button_primary = css`
  height: 32px;
  border: 1px solid #d9d9d9;
  border-color: #1890ff;
  background-color: #1890ff;
  color: #ffffff;
  &:hover {
    background-color: #40a9ff;
  }
`