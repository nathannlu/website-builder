import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import { Element, useEditor } from '@craftjs/core';
import { Container } from '../user/Container';
import { Card } from '../user/Card';
import { Image } from '../user/Image';
import { Button } from '../user/Button';
import { Text } from '../user/Text';
import { Layout } from '../user/Layout';
import { WidthFull } from '../user/Layout';

export const Toolbox = () => {
	const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column"  alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Button size="small">Click me</Button>)} variant="contained">Button</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Text text="Hello world" />)} variant="contained">Text</MaterialButton>
        </Grid>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Image src={''} />)} variant="contained">Image</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton variant="contained">Card</MaterialButton>
        </Grid>

				<Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Layout} canvas />)} variant="contained">w-1/2</MaterialButton>
        </Grid>
				<Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={WidthFull} canvas />)} variant="contained">Width FUll</MaterialButton>
        </Grid>
		
      </Grid>
    </Box>
  )
};
