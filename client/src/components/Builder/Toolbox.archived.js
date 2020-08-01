import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import { Element, useEditor } from '@craftjs/core';
import { Container } from '../user/Container';
import { Card } from '../user/Card';
import { Image } from '../user/Image';
import { Button } from '../user/Button';
import { Text } from '../user/Text';
import { Layout } from '../user/Layout';
import { MLS } from '../user/MLS';
import { Biography } from '../user/Biography';
import { Footer } from '../user/Footer';
import { Features } from '../user/Features';

export const Toolbox = () => {
	const { connectors, query } = useEditor();
	const { actions: {add}, query: {createNode, node} } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
				<Box pb={2}>
          <Typography>Components</Typography>
        </Box>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Footer} canvas />)} variant="contained">Footer</MaterialButton>
        </Grid>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Features} canvas />)} variant="contained">Features</MaterialButton>
        </Grid>
				<Grid>
					<MaterialButton onClick={() => {
						add(
							createNode(React.createElement(Container, {})),'ROOT' 
						);
					}}>
						penis
					</MaterialButton>
				</Grid>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Biography} canvas />)} variant="contained">Biography</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};
