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
`

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
    color: rgba(0,0,0,.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
`