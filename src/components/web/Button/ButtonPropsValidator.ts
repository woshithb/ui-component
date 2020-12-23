import * as React from 'react';
import { IButtonProps } from '@components/web';
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
	shape: ButtonShape.Default,
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

export const ButtonPropsValidator = props => {
	propsKeys.forEach(key => {
		if (!propsTypeValidators[key]) {
      console.warn(`${key}属性为无效的`)
    } else if (!propsTypeValidators[key](props[key])) {
			console.warn(`${key}属性的值类型错误，将使用默认值进行替换`)
			props[key] = propsDefaultvalueMapping[key]
    }
	})
  return React.cloneElement(props.children, {
		
	})
}
