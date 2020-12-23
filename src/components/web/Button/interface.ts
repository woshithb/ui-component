import * as React from 'react';
import { SerializedStyles } from '@emotion/serialize';
import { ButtonShape, ButtonSize, ButtonType } from '@components/share/enum';

export interface IBaseButtonProps {
  css?: SerializedStyles,
  value?: string,
  type?: string,
  autofocus?: boolean,
  disabled?: boolean
}

export interface IButtonProps {
  block?: boolean,
  danger?: boolean,
  disabled?: boolean,
  ghost?: boolean,
  href?: string,
  htmlType?: string,
  icon?: React.ReactNode,
  loading?: boolean | IDelay,
  shape?: IButtonShape,
  size?: IButtonSize,
  type?: IButtonType,
  onClick? (event: React.MouseEvent<HTMLElement>): void
}

export interface IButtonState {
  block?: boolean,
  danger?: boolean,
  disabled?: boolean,
  ghost?: boolean,
  href?: string,
  htmlType?: string,
  icon?: React.ReactNode,
  loading?: boolean | IDelay,
  shape?: IButtonShape,
  size?: IButtonSize,
  type?: IButtonType,
  onClick? (event: React.MouseEvent<HTMLElement>): void
}

interface IDelay {
  delay: number
}

type IButtonShape = ButtonShape.Circle | ButtonShape.Round | ButtonShape.Default

type IButtonSize = ButtonSize.Small | ButtonSize.Middle | ButtonSize.Large

type IButtonType = ButtonType.Primary | ButtonType.Ghost | ButtonType.Dashed | ButtonType.Link | ButtonType.Text | ButtonType.Default