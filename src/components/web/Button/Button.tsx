import * as React from 'react';
import { 
  IBaseButtonProps,
  ButtonPropsValidator,
  BaseButton
} from '@components/web';

export const Button = (props: IBaseButtonProps) => {
  return (
    <ButtonPropsValidator {...props}>
      <BaseButton/>
    </ButtonPropsValidator>
  )
}