import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import React, {useState} from 'react'
import ContactDetail from './components/ContactDetail';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    setContacts([...contacts, { id: contacts.length, ...contact }]);
  }

  console.log(contacts);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={() => <ContactList contacts={contacts} /> } />
          <Route path='/add' component={(props) => <AddContact {...props} addContactHandler={addContactHandler} /> } />
          <Route path="/contact/:id" component={() => <ContactDetail contacts={contacts} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
