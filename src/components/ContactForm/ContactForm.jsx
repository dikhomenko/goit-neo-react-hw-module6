import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(5, 'Number must be at least 5 digits')
    .max(15, 'Number cannot exceed 15 digits')
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const duplicateContact = contacts.find(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    );

    if (duplicateContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: Date.now().toString(), name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number">Number</label>
        <Field type="text" id="number" name="number" className={styles.input} />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
