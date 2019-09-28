import React from "react";
import T from "prop-types";
import map from "lodash/map";

import { createUseStyles } from "react-jss";

import Speaker from "./Speaker";

const SpeakerBox = ({ speakerList }) => {
  const classes = useStyles();
  return (
    <div className={classes.gallery}>
      {map(speakerList, speaker => (
        <Speaker key={speaker.name} speaker={speaker} />
      ))}
    </div>
  );
};

T.propTypes = {
  speaker: T.object.isRequired
};

const useStyles = createUseStyles({
  gallery: {
    backgroundColor: "#7156DD",
    padding: "120px 10%",
    margin: "0 10%",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-around",
    justifyContent: "center"
  },
  "@media (min-width: 800px)": {
    backgroundColor: "#7156DD",
    padding: "120px 0",
    margin: 0
  }
});

T.propTypes = {
  speakerList: T.arrayOf(Object)
};

T.defaultProps = {
  speakerList: []
};

export default SpeakerBox;
