import SectionStructure from 'Components/home/HomeSections/SectionStructure/SectionStructure';
import './contactPage.css';
import React from 'react';
import ContactForm from 'Components/Forms/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <main className='contact-main-page'>
      <SectionStructure
      className= 'contact'
      sectionTitle='Contacta con Nosotros'
      >
       <ContactForm/>
      </SectionStructure>
      
    </main>
   
  )
}

export default ContactPage;