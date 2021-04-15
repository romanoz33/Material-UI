import React, { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text } from '@quarkly/widgets';
import { Button, ButtonGroup } from "@material-ui/core"; // import ButtonGroup from '@material-ui/core/ButtonGroup';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));
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
	const classes = useStyles();
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		<div className={classes.root}>
			      
			<ButtonGroup color="primary">
				        
				<Button>
					One
				</Button>
				        
				<Button>
					Two
				</Button>
				        
				<Button>
					Three
				</Button>
				      
			</ButtonGroup>
			      
			<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
				        
				<Button>
					One
				</Button>
				        
				<Button>
					Two
				</Button>
				        
				<Button>
					Three
				</Button>
				      
			</ButtonGroup>
			      
			<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
				        
				<Button>
					One
				</Button>
				        
				<Button>
					Two
				</Button>
				        
				<Button>
					Three
				</Button>
				      
			</ButtonGroup>
			    
		</div>
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