import React, { useState } from 'react';
import styles from "./Contact.module.css"

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoie les données du formulaire à Formspree
    fetch('https://formspree.io/f/mzbqnwgk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        comments
      })
    })
      .then(response => {
        if (response.ok) {
          // Réinitialiser les champs du formulaire après l'envoi réussi
          setFirstName('');
          setLastName('');
          setEmail('');
          setComments('');
          alert('Votre message a été envoyé avec succès.');
        } else {
          alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
        }
      })
      .catch(error => {
        console.error('Erreur lors de l\'envoi du formulaire :', error);
        alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer plus tard.');
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'comments') {
      setComments(value);
    }
  };

  return (
    <div id="contact" className={styles.contactForm}>
      <h1 className={styles.title}>.Contact</h1>
      <form onSubmit={handleSubmit} className={styles.inputFields}>
        <div className={styles.field}>
          <label htmlFor="firstName" className={styles.label}>
            Prénom
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleInputChange}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Entrez votre prénom')}
            placeholder="Entrez votre prénom"
            className={styles.firstName}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName" className={styles.label}>
            Nom:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Entrez votre nom')}
            placeholder="Entrez votre nom"
            className={styles.lastName}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Entrez votre adresse e-mail')}
            placeholder="Entrez votre adresse e-mail"
            className={styles.email}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="comments" className={styles.label}>
            Commentaires:
          </label>
          <textarea
            name="comments"
            id="comments"
            value={comments}
            onChange={handleInputChange}
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'Entrez vos commentaires')}
            placeholder="Entrez vos commentaires"
            className={styles.comments}
          />
        </div>
        <button type="submit" className={styles.button}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

