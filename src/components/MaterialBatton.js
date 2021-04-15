import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
import { Button } from "@material-ui/core";
const overrides = {
	'Button': {
		kind: 'Button'
	}
};

const ModalComp = ({
	variant,
	color,
	size,
	link,
	fullWidth,
	disabled,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		<Button
			color={color}
			size={size}
			variant={variant}
			disabled={disabled && true}
			{...link !== '' && {
				href: link
			}}
			fullWidth={fullWidth}
			{...override('Button')}
		>
			 
			{override('Button').children}
		</Button>
		 
	</Box>;
};

const propInfo = {
	variant: {
		title: 'Variant',
		description: {
			en: 'Ваиант кнопки'
		},
		control: 'select',
		variants: ['contained', 'outlined', 'text'],
		weight: .5
	},
	color: {
		title: 'Color',
		description: {
			en: 'Цвет кнопки'
		},
		control: 'select',
		variants: ['default', 'primary', 'secondary', 'inherit'],
		weight: .5
	},
	size: {
		title: 'Size',
		description: {
			en: 'Размер кнопки'
		},
		control: 'select',
		variants: ['small', 'medium', 'large'],
		weight: .5
	},
	fullWidth: {
		title: 'FullWidth',
		description: {
			en: 'Растянуть на всю ширину'
		},
		control: 'checkbox',
		weight: .5
	},
	link: {
		title: 'Link',
		description: {
			en: 'Link input'
		},
		control: 'input',
		weight: 1
	},
	disabled: {
		title: 'disabled',
		description: {
			en: 'Отключить кнопку'
		},
		control: 'checkbox',
		weight: .5
	}
};
const defaultProps = {
	variant: 'contained',
	text: 'Hello World sdfsd',
	color: 'primary',
	size: 'medium',
	fullWidth: false,
	disabled: false
};
Object.assign(ModalComp, {
	propInfo,
	defaultProps,
	overrides
});
export default ModalComp;