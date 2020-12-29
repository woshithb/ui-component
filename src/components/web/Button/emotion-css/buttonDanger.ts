import { css } from '@emotion/react';

export const button_danger_primary = `
  border: 1px solid #d9d9d9;
  border-color: #ff4d4f;
  background-color: #ffffff;
  color: #ff4d4f;
  &:hover {
    color: #ff7875
    border-color: #ff7875
  }
  &:focus {
    animation-name: ;
    animation-duration: 1s;
    border-color: #ff7875;
  }
  &.active {
    color: #f5222d;
    border-color: #f5222d;
  }
  &.disabled {
    color: rgba(0, 0, 0, 0.25);
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
`;
