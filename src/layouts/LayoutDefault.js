import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>
    <FloatingWhatsApp 
        phoneNumber="+573177837117"
        accountName="Foo"
        allowEsc
        allowClickAway
        notification
        notificationSound />
    <Footer />
  </>
);

export default LayoutDefault;  