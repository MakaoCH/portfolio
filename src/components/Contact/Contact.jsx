import React, { useState } from 'react';
import styles from "./Contact.module.css"
import moiImage from "../../assets/moi.jpg";

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
    <div className={styles.containerForm}>
      <img src={moiImage} alt="Mon portrait" className={styles.moiImage} />
      <div className={styles.form} >
      <form onSubmit={handleSubmit} >
        <div className={styles.firstLast}>
        <label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Entrez votre prénom'}
            placeholder="Entrez votre prénom"
          />
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Entrez votre nom'}
            placeholder="Entrez votre nom"
          />
        </label>
        </div>

        <div className={styles.ctnMailCommentButton}>
        <label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Entrez votre adresse e-mail'}
            placeholder="Entrez votre adresse e-mail"
          />
        </label>
        <label>
          <textarea
            name="comments"
            value={comments}
            onChange={handleInputChange}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Entrez vos commentaires'}
            placeholder="Entrez vos commentaires"
          />
        </label>
        <button type="submit">Envoyer</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;
