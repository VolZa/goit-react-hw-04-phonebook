import { useState, useEffect } from "react";
import { FormPhB } from "components/form/FormPhB";
import { Title } from "components/title/Title";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/contact-list/ContactList';
import { Filter } from 'components/filter/Filter';

import { Layout } from 'components/layout/Layout';
import  initialContacts  from '../contacts.json';

//Патерн ініціалізації з локального сховища (туткод синхронний)
const getInitContakts = () => {  
  const savedPhoneBook = localStorage.getItem('contacts')
  if (savedPhoneBook !==null) {
    return JSON.parse(savedPhoneBook);
  } else {
    return initialContacts;
  }
}


export const App = () => {
  const [contacts, setContacts] = useState(getInitContakts);
  const [filter, setFilter] = useState('');

  //якщо змінюється список контактів то перезаписуємо ого в локальне сховище
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
}, [contacts]);

  //обробник подій всих input (за input:name заповнює відповідне значення state, name в input і в state мають бути однакові) 
  const onChangeInputD = value => {
     setFilter(value)
  }

  const addOneContact = (contact) => {
    const names = contacts.map(cont => cont.name);
    if (names.some(n => n.toLocaleLowerCase() === contact.name.toLocaleLowerCase())) {
      alert(`${contact.name} is already in contacts`)
    } else {
      setContacts( [...contacts, contact] ) 
    }
  }
  
  const delContact = (id) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  }

  const filterContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
 
  return (
    <Layout>
      <GlobalStyle />
      <Title title="Phonebook" />
      <FormPhB addContact={addOneContact}/>
      <Title title="Contacts" />
      <Filter 
        filter={filter}
        onChangeInput={onChangeInputD}/>
      <ContactList 
        contacts={filterContacts}
        delContact={delContact}
  />
        
    </Layout>
  );  
};

