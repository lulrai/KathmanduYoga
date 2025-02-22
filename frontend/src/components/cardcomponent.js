import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    margin: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
}));

export default function CardComponent({ title, content }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <Button size="small">Learn More</Button>
    </Card>
  );
}
