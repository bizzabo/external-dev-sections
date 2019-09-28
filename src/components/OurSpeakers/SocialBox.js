import React from "react";
import T from "prop-types";

import { createUseStyles } from "react-jss";

const SocialBox = ({ linkedinUrl, twitterUrl }) => {
  const classes = useStyles();

  return (
    <div className={classes.socialIcons}>
      <a className={classes.socialLink} href={linkedinUrl}>
        <i className="fa fa-linkedin"></i>
      </a>
      <a className={classes.socialLink} href={twitterUrl}>
        <i className="fa fa-twitter"></i>
      </a>
    </div>
  );
};

T.propTypes = {
  linkedinUrl: T.string.isRequired,
  twitterUrl: T.string.isRequired
};

const useStyles = createUseStyles({
  socialIcons: {
    color: "#ffffff",
    display: "flex",
    width: "60px",
    justifyContent: "space-between",
    fontSize: "24px"
  },
  socialLink: {
    color: "#ffffff"
  }
});

export default SocialBox;
