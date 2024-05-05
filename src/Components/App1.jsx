import React from 'react';
import '../App.css';

const contactInfo = {
  phone: '(305) 555-4446',
  address: 'BKLYN',
  email: 'contact@yourdomain.com',
  socialMedia: 'f Be'
};

const headerText = `WE CREATE THE WEB
Creative solutions & results that grow brands.`;

const descriptionText = `It's all about turning
great ideas into websites.
We have created an awesome theme that will help designers, developers,
and companies create websites for their startups quickly and easily.`;

const App1 = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">{headerText}</h1>
      <p>{descriptionText}</p>
      <ContactInfo contact={contactInfo} />
    </header>
    <div className="scrollable-content">
    <div>this is div 1</div>
    <div>this is div 2</div>
    </div>
  </div>
);

const ContactInfo = ({ contact }) => (
  <div className="Contact-info">
    <p>
      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
      <span>{contact.address}</span>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <span>{contact.socialMedia}</span>
    </p>
  </div>
);

export default App1;