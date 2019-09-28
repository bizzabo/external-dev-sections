import React, { Fragment } from "react";

import { createUseStyles } from "react-jss";

const SocialBox = ({ designation, location }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.speakerInfo}>
        <span className={classes.speakerDesignation}>{designation}</span>
        <span className={classes.speakerLocation}>{location}</span>
      </div>
    </Fragment>
  );
};

const useStyles = createUseStyles({
  speakerInfo: {
    display: "flex",
    flexDirection: "column"
  },
  speakerDesignation: {
    color: "#ffffff",
    fontWeight: 600,
    margin: 0
  },
  speakerLocation: {
    color: " #ffffff",
    margin: 0
  }
});

export default SocialBox;
