import  PropTypes from 'prop-types'
import { Contacts, Contact } from './ContactList.styled';

export const ContactList = ({contacts, delContact }) => {
   console.log("Це ContactList contacts=  ", contacts);
   return (
      <Contacts>
         {contacts.map(contact => {
            return(
               <Contact key={contact.id}>
                  <span>{contact.name}: </span>
                  <span>{contact.number}</span>
                  <button type="button" onClick={()=>{delContact(contact.id);}} >Delete</button>
               </Contact>
            );
         })}        
      </Contacts>
   );
};

ContactList.propTypes = {
   contacts: PropTypes.array.isRequired,
   delContact: PropTypes.func.isRequired
};