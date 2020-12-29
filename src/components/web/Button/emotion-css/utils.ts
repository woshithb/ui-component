import { Keyframes } from '@emotion/serialize';
import { IButtonType } from '@components/web';
import { keyframes } from '@emotion/react';

const AnimationFocusAndBlurColors = {
  primary: '#69c0ff',
  dashed: '#69c0ff',
  default: '#69c0ff',
  danger: '#ff7875',
}

export const generateFocusAndBlurKeyframe = (type: IButtonType | 'danger'): Keyframes => {
  const color = AnimationFocusAndBlurColors[type]
	return keyframes`
    0% {
      box-shadow: 0px 0px 0px 0px ${color};
    }
    50% {
      box-shadow: 0px 0px 6px 0px ${color};
    }
    100% {
      box-shadow: 0px 0px 0px 0px ${color};
    }
  `;
}
