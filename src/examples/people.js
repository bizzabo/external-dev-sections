import React from 'react';

const ContactInfo = (props) => {
    const { contact, element } = props;
  
    return <div className={`element-${element.rootKey} contact-info-container`}>
      <div className="atom-text1 custom-font contact-fullname">
        <strong>{`${contact.firstName} ${contact.lastName}`}</strong>
      </div>
      <div className="atom-text2 custom-font trim-for-parent-width contact-title">{contact.title}</div>
      <div className="atom-text3 custom-font trim-for-parent-width contact-company">{contact.company}</div>
    </div>
  };
  
  const ContactImg = (props) => {
    const { contact } = props;
    let retVal = null;
  
    if(contact.thumbnailUrl){
      retVal = <img
        src={contact.thumbnailUrl}
        className="img-circle center-block"
        alt="speaker"
      />;
    } else {
      retVal = <>
        <img
          src="https://events.bizzabo.com/images/home/empty_placeholder.png"
          className="img-responsive img-circle center-block"
          alt="placeholder"
        />
        <div className="user-credentials">
          {contact.firstName.charAt(0).toUpperCase()}<strong>{contact.lastName.charAt(0).toUpperCase()}</strong>
        </div>
      </>;
    }
  
    return retVal;
  };
  
  const ContactSocial = (props) => {
    const { contact } = props;
  
    return <div>
      <a href={contact.facebookPage} target="_blank">
        <i className="speaker-icon fa icon-facebook"/>
      </a>
  
      <a href={contact.linkedinPage} target="_blank">
        <i className="speaker-icon fa icon-linkedin"/>
      </a>
  
      <a href={`https://twitter.com/${contact.twitter}`} target="_blank">
        <i className="speaker-icon fa icon-twitter"/>
      </a>
    </div>
  };
  
  const ContactElement = (props) => {
    const { contact, element } = props;
  
    return <div className="col-md-3 col-sm-6 col-xs-12 entity-photo-holder">
      <div className={`element-${element.rootKey}`}>
        {contact.speakerId
          ?
          <a href={`/5794/agenda/speakers/${contact.speakerId}`}><ContactImg contact={contact} /></a>
          :
          <div className="make-relative"><ContactImg contact={contact} /></div>
        }
      </div>
      <ContactInfo contact={contact} element={element}/>
      <ContactSocial contact={contact} element={element}/>
    </div>
  };
  
  export default ({section}) => {
    const [ header, people ] = section.elements;
    const { contacts = [] } = people;
  
    return <div className="atom-sectionMain rowHolder">
            <div className="col-xs-12 text-center attendees-faces contacts-element">
              <div
                className="main-app-container custom-space-top custom-space-bottom">
                <div className={`col-xs-12 text-center form-group element-${header.rootKey}`}>
                  <h2 className="atom-main medium custom-font">{header.text}</h2>
                </div>
                <div className="col-xs-12 text-center attendees-faces-holder">
                  <div className="row js-contacts-element">
                    {people.contactListId
                      ?
                      contacts.map(contact => <ContactElement key={contact.id} element={people} contact={contact} />)
                      :
                      <div className="attendees-empty">
                        <img src="https://events.bizzabo.com/scripts/web-common/editor-templates/images/urban/attendees_empty.png"
                             alt="no attendees"/>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>;
  };