import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <p>
        <strong>{contact.name}</strong>: {contact.number}
      </p>
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
