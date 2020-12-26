import * as React from 'react';

type IPropsTypeValidators = Record<string, (value: any) => boolean>;

type IPropsDefaultValueMapping = Record<string, any>;

interface IPropsValidatorsArgs {
	propsTypeValidators: IPropsTypeValidators;
	propsDefaultvalueMapping: IPropsDefaultValueMapping;
	propsKeys: string[];
}

export const propsValidators = ({
	propsTypeValidators,
	propsDefaultvalueMapping,
	propsKeys,
}: IPropsValidatorsArgs) => {
	return (props) => {
		const afterProcessProps = {};
		propsKeys.forEach((key) => {
			if (!propsTypeValidators[key]) {
				console.warn(`${key}属性为无效的`);
			} else if (!propsTypeValidators[key](props[key])) {
				console.warn(`${key}属性的值类型错误，将使用默认值进行替换`);
				afterProcessProps[key] = propsDefaultvalueMapping[key];
			}
		});
		return React.createElement(props.children, {
			...propsDefaultvalueMapping,
			...afterProcessProps,
		});
	};
};
