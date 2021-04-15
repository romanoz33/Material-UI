import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { Box } from '@quarkly/widgets';
import { Checkbox } from "@material-ui/core";

const CheckBox = ({
	checked,
	color,
	disabled,
	size,
	...props
}) => {
	const [isChecked, setChecked] = useState(!checked);

	const handleChange = () => setChecked(!isChecked);

	useEffect(() => handleChange(), [checked]);
	return <Box {...props}>
		<Checkbox
			checked={isChecked}
			color={color}
			size={size}
			disabled={disabled && true}
			onChange={handleChange}
			inputProps={{
				'aria-label': `${color} ${disabled && 'disabled'} checkbox`
			}}
		/>
	</Box>;
};

const propInfo = {
	checked: {
		title: 'Checked',
		description: {
			en: 'Активировать чекбокс'
		},
		control: 'checkbox',
		weight: .5
	},
	color: {
		title: 'Color',
		description: {
			en: 'Цвет чекбокса'
		},
		control: 'select',
		variants: ['default', 'primary', 'secondary', 'inherit'],
		weight: .5
	},
	size: {
		title: 'Size',
		description: {
			en: 'Размер чекбокса'
		},
		control: 'select',
		variants: ['small', 'medium'],
		weight: .5
	},
	value: {
		title: 'Value',
		description: {
			en: 'Значение чекбокса'
		},
		control: 'input',
		weight: .5
	},
	disabled: {
		title: 'Disabled',
		description: {
			en: 'Отключить чекбокс'
		},
		control: 'checkbox',
		weight: .5
	}
};
const defaultProps = {
	checked: true,
	color: 'primary',
	size: 'medium',
	disabled: false
};
Object.assign(CheckBox, {
	propInfo,
	defaultProps
});
export default CheckBox;