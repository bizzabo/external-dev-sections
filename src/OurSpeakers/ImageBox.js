import React, { Fragment } from "react";
import T from "prop-types";

import { createUseStyles } from "react-jss";

const ImageBox = ({ imageUrl }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.imageContainer}>
        <img
          src={imageUrl}
          alt="img"
          className={classes.imageContainer.image}
        />
        <div className={classes.horizontalLine} />
      </div>
    </Fragment>
  );
};

T.propTypes = {
  imageUrl: T.string.isRequired
};

const useStyles = createUseStyles({
  imageContainer: {
    position: "relative",
    image: {
      width: "100 %"
    }
  },

  horizontalLine: {
    position: "absolute",
    height: "4px",
    width: "40%",
    backgroundColor: "#DA5E67",
    top: "90%",
    left: "-10px"
  }
});

export default ImageBox;
