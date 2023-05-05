import { Formik } from 'formik';
// import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  FormLabel,
  Form,
  Field,
  ErrorMessage,
  Button,
  Title,
} from './ContactForm.styled';

const ContactScheme = Yup.object().shape({
  name: Yup.string()
    .matches(
      /(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('Required!'),
  number: Yup.string()
    .matches(
      /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <div>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactScheme}
        onSubmit={(values, actions) => {
          onAdd(values, values.name);
          actions.resetForm();
        }}
      >
        <Form action="">
          <FormLabel htmlFor="">
            Name
            <Field name="name" placeholder="Jane Smith" />
            <ErrorMessage name="name" component="span" />
          </FormLabel>
          <FormLabel htmlFor="">
            Number
            <Field name="number" placeholder="111-11-11" />
            <ErrorMessage name="number" component="span" />
          </FormLabel>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};
