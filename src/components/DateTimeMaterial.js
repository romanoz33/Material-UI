import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { Box } from '@quarkly/widgets';
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));
const inputLabelProps = {
	shrink: true
};

const DateTime = ({
	variant,
	label,
	helperText,
	type,
	color,
	autofocus,
	fullWidth,
	disabled,
	...props
}) => {
	const classes = useStyles();
	return <Box {...props}>
		<TextField
			variant={variant}
			label={label}
			type={type}
			color={color}
			autofocus={autofocus}
			fullWidth={fullWidth}
			disabled={disabled}
			helperText={helperText}
			className={classes.textField}
			InputLabelProps={inputLabelProps}
		/>
	</Box>;
};

const propInfo = {
	variant: {
		title: 'Variant',
		description: {
			en: 'Вариант'
		},
		control: 'select',
		variants: ['filled', 'outlined', 'standard'],
		weight: .5
	},
	label: {
		title: 'Label',
		description: {
			en: 'Подпись'
		},
		control: 'input',
		weight: .5
	},
	helperText: {
		title: 'Helper text',
		description: {
			en: 'Подсказка'
		},
		control: 'input',
		weight: .5
	},
	type: {
		title: 'Type',
		description: {
			en: 'Тип'
		},
		control: 'select',
		variants: ['date', 'time'],
		weight: .5
	},
	color: {
		title: 'Color',
		description: {
			en: 'Цвет кнопки'
		},
		control: 'select',
		variants: ['primary', 'secondary'],
		weight: .5
	},
	autofocus: {
		title: 'Autofocus',
		description: {
			en: 'Автофокус'
		},
		control: 'checkbox',
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
	variant: 'standard',
	label: 'Birthday',
	helperText: 'Выберите дату или время',
	type: 'date',
	color: 'primary',
	fullWidth: false,
	disabled: false,
	autofocus: false
};
Object.assign(DateTime, {
	propInfo,
	defaultProps
});
export default DateTime;