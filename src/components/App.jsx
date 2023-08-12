import ContactForm from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';
import { Block } from './App.styled';
import { GlobalStyles } from '../utils/GlobalStyles';

export const App = () => {
  return (
    <Block>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
      <GlobalStyles />
    </Block>
  );
};
