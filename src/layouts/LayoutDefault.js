import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ControlPS5 from '../assets/images/control-ps5.png';
const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <FloatingWhatsApp 
        phoneNumber="+573005130337"
        accountName="Yume Juegos"
        textReplyTime="Por favor envíenos un mensaje y nos pondremos en contacto con usted lo antes posible."
        chatMessage='Hola, ¿En qué podemos ayudarle?'
        statusMessage='Normalmente respondemos en unos minutos.'
        placeholder='Escriba su mensaje...'
        avatar={ControlPS5}
        allowEsc
        allowClickAway
        notification
        notificationSound />
    <Footer />
  </>
);

export default LayoutDefault;  