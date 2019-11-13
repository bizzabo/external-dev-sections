/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
const useStyles = createUseStyles({
  gravatar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    color: "white",
    margin: "auto",
    transform: "translate(0, -10%)",
    fontSize: 70
  },
  contactContainer: {
    display: "block",
    width: "max-content",
    marginBottom: 24,

    "& .hover": {
      overflow: "hidden"
    },

    "&  .img": {
      height: "240px",
      width: "240px",
      transition: "all .3s ease-in"
    },
    "& :hover ": {
      "& .img": {
        transform: "scale(1.2)"
      }
    }
  },
  contactInfoContainer: {
    paddingTop: 8,
    color: "#000",
    "& .contact-fullname": {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    "& .contact-title": {
      fontSize: "0.8rem"
    },
    "& .contact-company": {
      fontSize: "0.8rem",
      fontWeight: "bold"
    }
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "center",
    "& i": {
      margin: 2
    }
  },

  hovereffect: {
    overflow: "hidden"
  },
  sectionContainer: {
    "& .main-app-container": {
      "& .center-items": {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        float: "none"
      }
    }
  },
  "@media ( max-width: 1140px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap"
        }
      }
    }
  },
  "@media ( max-width: 768px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap"
        }
      }
    },
    contactContainer: {
      "&  .img": {
        height: "180px",
        width: "180px",
        transition: "all .3s ease-in"
      }
    }
  },
  "@media ( max-width: 500px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap"
        }
      }
    },
    contactContainer: {
      "&  .img": {
        height: "160px",
        width: "160px",
        transition: "all .3s ease-in"
      }
    }
  }
});
export default ({ section }) => {
  const { elements: [header, people] = [] } = section;
  const { text, rootKey } = header;
  const { contacts, contactListId } = people;
  const classes = useStyles();
  console.log(section);
  return (
    <div className={classnames("atom-sectionMain", classes.sectionContainer)}>
      <div className="col-xs-12 col-sm-12 text-center">
        <div className="main-app-container  ">
          <div
            className={`col-xs-12 text-center form-group element-${rootKey}`}
          >
            <h2 className="atom-main medium custom-font">{text}</h2>
          </div>
          <div className="col-xs-12 text-center ">
            <div className=" center-items ">
              {contactListId ? (
                contacts.map(contact => (
                  <Contact
                    key={contact.id}
                    rootKey={people.rootKey}
                    contact={contact}
                  />
                ))
              ) : (
                <div className="attendees-empty">
                  <img
                    src="https://events.bizzabo.com/scripts/web-common/editor-templates/images/urban/attendees_empty.png"
                    alt="no attendees"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Contact({ contact, rootKey }) {
  const {
    id,
    thumbnailUrl,
    firstName,
    lastName,
    speakerId,
    facebookPage,
    linkedinPage,
    twitter,
    title,
    company
  } = contact;
  const classes = useStyles();
  return (
    <div
      className={classnames(
        "col-md-3 col-sm-4 col-xs-12 ",
        classes.contactContainer
      )}
    >
      <div classes={classes.hovereffect}>
        <div className={`element-${rootKey} hover`}>
          {speakerId ? (
            <a href={`/5794/agenda/speakers/${speakerId}`}>
              <ContactImage
                {...{ firstName, lastName, thumbnailUrl, rootKey }}
              />
            </a>
          ) : (
            <div className="make-relative">
              <ContactImage
                {...{ firstName, lastName, thumbnailUrl, rootKey }}
              />
            </div>
          )}
        </div>

        <ContactInfo {...{ firstName, lastName, rootKey, title, company }} />

        <ContactSocial {...{ facebookPage, linkedinPage, twitter, rootKey }} />
      </div>
    </div>
  );
}
function ContactInfo({ rootKey, firstName, lastName, title, company }) {
  const classes = useStyles();
  return (
    <div
      className={classnames(`element-${rootKey}`, classes.contactInfoContainer)}
    >
      <div className="atom-text1 contact-fullname">
        {`${firstName} ${lastName}`}
      </div>
      <div className="atom-text2  contact-title">{title}</div>
      <div className="atom-text3  contact-company">{company}</div>
    </div>
  );
}
const ContactImage = props => {
  const { firstName, lastName, thumbnailUrl } = props;
  const classes = useStyles();
  let retVal = null;

  if (thumbnailUrl) {
    retVal = (
      <img
        src={thumbnailUrl}
        className=" img-responsive center-block img"
        alt="speaker"
      />
    );
  } else {
    retVal = (
      <div>
        <img
          src="https://events.bizzabo.com/images/home/empty_placeholder.png"
          className="img-responsive  center-block img"
          alt="placeholder"
        />
        <div className={classes.gravatar}>
          {firstName.charAt(0).toUpperCase()}
          {lastName.charAt(0).toUpperCase()}
        </div>
      </div>
    );
  }

  return retVal;
};
function ContactSocial({ facebookPage, linkedinPage, twitter }) {
  const classes = useStyles();

  return (
    <div className={classes.socialLinks}>
      <a href={facebookPage} target="_blank" rel="noopener noreferrer">
        <i className="speaker-icon fa icon-facebook" />
      </a>

      <a href={linkedinPage} target="_blank" rel="noopener noreferrer">
        <i className="speaker-icon fa icon-linkedin" />
      </a>

      <a
        href={`https://twitter.com/${twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="speaker-icon fa icon-twitter" />
      </a>
    </div>
  );
}
