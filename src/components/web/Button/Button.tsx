import * as React from 'react';
import { 
  IButtonProps,
  ButtonPropsValidator,
  BaseButton
} from '@components/web';

export const Button = (props: IButtonProps) => {
  return (
    <ButtonPropsValidator {...props}>
      <BaseButton/>
    </ButtonPropsValidator>
  )
}