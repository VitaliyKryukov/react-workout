import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';


import './contact.css';

const Contact = () => {
  return (
    <>
      <Header tittle="Get In Touch" image={HeaderImage} >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia fuga a doloribus, quis provident sint.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@gmail.com" target="_blank" rel="noreferrer" ><MdEmail /></a>
            <a href="hhtps://m.me/" target="_blank" rel="noreferrer" ><BsMessenger /></a>
            <a href="hhtps://wa.me/+79360020192" target="_blank" rel="noreferrer" ><IoLogoWhatsapp/> </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;