import React, {useState, useEffect} from 'react';
import {Stepper, Step, StepButton } from '@material-ui/core';

const VerticalStepper = ({steps, activeStep, setActiveStep}) => {
	const handleStep = step => {
		setActiveStep(step)
	}
	
	return (
		<Stepper nonLinear style={{backgroundColor: 'transparent'}} activeStep={activeStep} orientation="vertical">
			{steps.map((label, index) => (
				<Step key={label}>
					<StepButton onClick={() => handleStep(index)}>{label}</StepButton>
				</Step>
			))}
		</Stepper>
	)
};

export default VerticalStepper;
