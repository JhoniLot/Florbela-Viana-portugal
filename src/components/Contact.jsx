import React from 'react';
import { MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1rem'}}>Pronta para transformar o seu dia?</h2>
            <p className="contact-desc">
              Sem burocracias nem filas de espera. O seu agendamento é feito 
              de forma rápida e direta pelo nosso WhatsApp. Fale com a nossa equipa agora mesmo!
            </p>
            
            <a href="https://wa.me/351969065846" target="_blank" rel="noreferrer" className="btn btn-whatsapp whatsapp-lg">
              <MessageCircle size={24} style={{marginRight: '0.5rem'}} />
              Falar no WhatsApp
            </a>
            
            <div className="contact-details">
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <MapPin size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>Rua Miguel Torga 136, Loja 7<br/>Creixomil, 4835-086 Guimarães, Portugal</span>
              </div>
              <div className="detail-item" style={{ alignItems: 'flex-start' }}>
                <Clock size={20} className="detail-icon" style={{ marginTop: '0.2rem', minWidth: '20px' }} />
                <span>
                  <b>Segunda a Sábado:</b> 09:00 – 20:00<br/>
                  <b>Domingo:</b> Fechado
                </span>
              </div>
            </div>
          </div>
          
          <div className="contact-image-wrapper">
             <div className="contact-image-placeholder">
                <h3 className="contact-image-title">A sua beleza em boas mãos</h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
