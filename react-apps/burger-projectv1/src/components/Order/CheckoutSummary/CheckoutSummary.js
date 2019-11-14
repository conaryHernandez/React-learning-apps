import React, {Component} from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {

	return (
		<div className={classes.CheckoutSummary}>
			<h1>Please Enjoy!</h1>
			<div style={
				{
					width: '100%',
					margin: 'auto'
			 	}
			 }>
				<Burger ingredients={props.ingredients} />
				<Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
				<Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
			</div>
		</div>
	);
}

export default CheckoutSummary;