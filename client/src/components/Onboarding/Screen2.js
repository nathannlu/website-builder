import React, {useState, useEffect} from 'react';
import {Container, Fade, CssBaseline, Grid, Box, TextField, Typography, Button, Card, CardHeader, CardContent, CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Check, CheckCircleOutline, Star} from '@material-ui/icons';

const tiers = [
	{
		title: 'Free',
		price: '0',
		description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
	},
	{
		title: 'Pro',
		price: '15',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
	},
]

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
	card: {
		transition: 'all .2s'
	},
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const Content = props => {
	const theme = {
		spacing: 8
	}
	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<Container maxWidth="xs" component="main">
				<div style={{marginTop: '150px', textAlign: 'center'}}>
					<Box my={3}>
						<CheckCircleOutline style={{fontSize: '3rem'}} color="primary" />
					</Box>

					<Box my={3}>
						<Typography gutterBottom component="h4" variant="body2">
							STEP 2 OF 3
						</Typography>
						<Typography gutterBottom style={{fontWeight: 'bold'}} component="h1" variant="h5">
							Choose your plan.
						</Typography>
						<ul>
							<Typography component="li" style={{display: 'flex'}} gutterBottom variant="subtitle1" align="left">
								<Check style={{paddingRight: '.5rem'}} color="primary" /> Cancel within 7 days for a full refund.
							</Typography>
							<Typography component="li" style={{display: 'flex'}} gutterBottom variant="subtitle1" align="left">
								<Check style={{paddingRight: '.5rem'}} color="primary" /> Unlimited graphic design for one low price.
							</Typography>
							<Typography component="li" style={{display: 'flex'}} gutterBottom variant="subtitle1" align="left">
								<Check style={{paddingRight: '.5rem'}} color="primary" /> Unlimited revisions.
							</Typography>

						</ul>
					</Box>

					<Button fullWidth onClick={() => props.setStage(1)} variant="contained" color="primary">
						See the plans
					</Button>
				</div>
			</Container>
		</Fade>
	)
};

const Form = props => {
	const classes = useStyles();	
	const [selected, setSelected] = useState(tiers[0]['title']);

	const theme = {
		spacing: 8	
	}

	return (
		<Fade in={true} direction="left" mountOnEnter unmountOnExit>
			<div style={{marginTop: '64px', textAlign: 'left'}}>
				<Container maxWidth="md" component="main">
					<Box mb={3}>
						<Typography gutterBottom component="h4" variant="body2">
							STEP 2 OF 3
						</Typography>
						<Typography gutterBottom component="h1" style={{fontWeight: 'bold'}} variant="h5">
							Choose the plan that's right for you.
						</Typography>
						<Typography gutterBottom component="p" variant="body1">
							Downgrade or upgrade at any time.
						</Typography>

						<Box mt={3}>
							<Grid container spacing={5} alignItems="flex-end">
								{tiers.map((tier) => (
									// Enterprise card is full width at sm breakpoint
									<Grid onClick={() => setSelected(tier.title)} item key={tier.title} xs={12} sm={6}>
										<Card 
											className={selected === tier.title ? (classes.card + ' MuiPaper-elevation5') : (classes.card)}
											style={selected === tier.title ? {opacity: 1} : {opacity: .5}} 
										>
											<CardHeader
												title={tier.title}
												subheader={tier.subheader}
												titleTypographyProps={{ align: 'center' }}
												subheaderTypographyProps={{ align: 'center' }}
												style={selected === tier.title ? {backgroundColor: '#3f51b5', color: 'white'} : {}} 
												className={classes.cardHeader}
											/>
											<CardContent>
												<div className={classes.cardPricing}> 
													<Typography component="h2" variant="h3" color="textPrimary">
														${tier.price}
													</Typography>
													<Typography variant="h6" color="textSecondary">
														/mo
													</Typography>
												</div>
												<ul>
													{tier.description.map((line) => (
														<Typography component="li" variant="subtitle1" align="center" key={line}>
															{line}
														</Typography>
													))}
												</ul>
											</CardContent>
											<CardActions>
												<Button fullWidth variant={tier.buttonVariant} color="primary">
													{tier.buttonText}
												</Button>
											</CardActions>
										</Card>
									</Grid>
								))}
							</Grid>
						</Box>

					</Box>				
				</Container>
				<Container maxWidth="xs">
					<Button fullWidth onClick={() => props.onPlanSelectionComplete()} variant="contained" color="primary">
						Continue
					</Button>
				</Container>
			</div>
		</Fade>
	)
};

export default function(props) {
	const [stage, setStage] = useState(0);

	const onPlanSelectionComplete = () => {
		props.setStage(2);
	};

	return {
			0: <Content setStage={setStage} />,
			1: <Form onPlanSelectionComplete={onPlanSelectionComplete} />
		}[stage]
};
