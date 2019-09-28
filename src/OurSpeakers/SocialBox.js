import React, { Fragment } from "react";

import { createUseStyles } from "react-jss";

const SocialBox = ({ linkedinUrl, twitterUrl }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.socialIcons}>
        <a className={classes.socialLink} href={linkedinUrl}>
          <i className="fa fa-linkedin"></i>
        </a>
        <a className={classes.socialLink} href={twitterUrl}>
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </Fragment>
  );
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
