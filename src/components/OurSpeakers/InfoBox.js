import React from "react";
import T from "prop-types";

import { createUseStyles } from "react-jss";

const SocialBox = ({ designation, location }) => {
  const classes = useStyles();

  return (
    <div className={classes.speakerInfo}>
      <span className={classes.speakerDesignation}>{designation}</span>
      <span className={classes.speakerLocation}>{location}</span>
    </div>
  );
};

T.propTypes = {
  designation: T.string.isRequired,
  location: T.string.isRequired
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
