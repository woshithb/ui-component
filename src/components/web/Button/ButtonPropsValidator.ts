import * as React from 'react';
import { propsValidators } from '@components/share'
import { ButtonType, ButtonShape, ButtonSize } from '@components/share';

const propsTypeValidators = {
  block: value => typeof value === 'boolean',
	danger: value => typeof value === 'boolean',
	disabled: value => typeof value === 'boolean',
	ghost: value => typeof value === 'boolean',
	href: value => typeof value === 'string',
	htmlType: value => typeof value === 'string' || typeof value === 'function',
	icon: value => React.isValidElement(value),
	loading: value => typeof value === 'boolean',
	shape: value => ButtonShape[value],
	size: value => ButtonSize[value],
	type: value => ButtonType[value],
	onClick: value => typeof value === 'function'
}

const propsDefaultvalueMapping = {
	block: false,
	danger: false,
	disabled: false,
	ghost: false,
	href: '',
	htmlType: 'button',
	icon: null,
	loading: false,
	shape: ButtonShape.Round,
	size: ButtonSize.Middle,
	type: ButtonType.Default,
};

const propsKeys = [
	'block',
	'danger',
	'disabled',
	'ghost',
	'href',
	'htmlType',
	'icon',
	'loading',
	'shape',
	'size',
	'type',
	'onClick'
]

export const ButtonPropsValidator = propsValidators({
	propsTypeValidators,
	propsDefaultvalueMapping,
	propsKeys
})
