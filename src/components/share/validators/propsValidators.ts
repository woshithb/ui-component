import * as React from 'react';

type IPropsTypeValidators = Record<string, (value: any) => boolean>;

type IPropsDefaultValueMapping = Record<string, any>;

interface IPropsValidatorsArgs {
	propsTypeValidators: IPropsTypeValidators;
	propsDefaultvalueMapping: IPropsDefaultValueMapping;
	propsKeys: string[];
}

const wrappedAreEqual = (propsKeys: string[]): (preProps, nextProps) => boolean => {
  return (preProps, nextProps) => {
    propsKeys.forEach(key => {
      if (preProps[key] !== nextProps[key]) {
        return false
      }
    })
    return true
  }
}

export const propsValidators = ({
	propsTypeValidators,
	propsDefaultvalueMapping,
	propsKeys,
}: IPropsValidatorsArgs) => {
	const validatorsComponent = (props) => {
		const afterProcessProps = {};
		propsKeys.forEach((key) => {
			if (!propsTypeValidators[key]) {
				console.warn(`${key}属性为无效的`);
			} else if (!propsTypeValidators[key](props[key])) {
				console.warn(`${key}属性的值类型错误，将使用默认值进行替换`);
				afterProcessProps[key] = propsDefaultvalueMapping[key];
      } else {
        afterProcessProps[key] = props[key]
      }
		});
		return React.createElement(props.children, {
			...afterProcessProps,
		});
  };
  return React.memo(validatorsComponent, wrappedAreEqual(propsKeys))
};
