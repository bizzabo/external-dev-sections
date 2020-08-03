/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
const useStyles = createUseStyles({
  sectionContainer: {
    "& .main-app-container": {
      "& .center-items": {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "space-around",
        float: "none"
      },
      "& .social-links": {
        display: "flex",
        justifyContent: "center",
        "& i": {
          marginBottom: 1,
          marginLeft: 2,
          marginRight: 2
        }
      },
      "& .contact-info-container": {
        paddingTop: 8,
        color: "#000",
        "& .contact-fullname": {
          fontSize: "0.90rem",
          fontWeight: "bold"
        },
        "& .contact-title": {
          fontSize: "0.75rem"
        },
        "& .contact-company": {
          fontSize: "0.75rem",
          fontWeight: "bold"
        }
      }
    },
    "& .contact-container": {
      display: "block",
      width: "max-content",
      marginBottom: 24,

      "& .hover": {
        overflow: "hidden"
      },

      "& .img": {
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
    "& .gravatar": {
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
    }
  },

  "@media ( max-width: 1140px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap",
          justifyContent: "center"
        }
      }
    }
  },
  "@media ( min-width: 1141px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap",
          justifyContent: "center"
        }
      }
    }
  },
  "@media ( max-width: 768px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap",
          justifyContent: "center"
        },
        "& .contact-container": {
          "&  .img": {
            height: "180px",
            width: "180px"
          }
        }
      }
    }
  },
  "@media ( max-width: 500px )": {
    sectionContainer: {
      "& .main-app-container": {
        "& .center-items": {
          flexWrap: "wrap"
        },
        "& .contact-container": {
          "&  .img": {
            height: "160px",
            width: "160px"
          }
        }
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
    <div
      className={classnames(
        "atom-sectionMain rowHolder",
        classes.sectionContainer
      )}
    >
      <div className="col-xs-12 col-sm-12 text-center">
        <div className="main-app-container  custom-space-top custom-space-bottom">
          <div
            className={`col-xs-12 text-center form-group element-${rootKey}`}
          >
            <h2 className="atom-main medium custom-font">{text}</h2>
          </div>
          <div className="col-xs-12 text-center ">
            <div className=" row  center-items ">
              {contacts && contacts.length>0 ? (
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
  return (
    <div className="col-md-3 col-sm-4 col-xs-12 contact-container">
      <div>
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
  const name = `${firstName !== undefined ? firstName : ""} ${
    lastName !== undefined ? lastName : ""
  }`;
  return (
    <div className={`element-${rootKey} contact-info-container`}>
      <div className="atom-text1 contact-fullname">{name}</div>
      <div className="atom-text2  contact-title">{title}</div>
      <div className="atom-text3  contact-company">{company}</div>
    </div>
  );
}
const ContactImage = props => {
  const { firstName, lastName, thumbnailUrl } = props;
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
        <div className="gravatar">
          {firstName && firstName.charAt(0).toUpperCase()}
          {lastName && lastName.charAt(0).toUpperCase()}
        </div>
      </div>
    );
  }

  return retVal;
};
function ContactSocial({ facebookPage, linkedinPage, twitter }) {
  return (
    <div className="social-links">
      {facebookPage && (
        <a href={facebookPage} target="_blank" rel="noopener noreferrer">
          <i className="speaker-icon fa icon-facebook" />
        </a>
      )}
      {linkedinPage && (
        <a href={linkedinPage} target="_blank" rel="noopener noreferrer">
          <i className="speaker-icon fa icon-linkedin" />
        </a>
      )}
      {twitter && (
        <a
          href={`https://twitter.com/${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="speaker-icon fa icon-twitter" />
        </a>
      )}
    </div>
  );
}
