const fs = require('fs');

const { listContacts, getContactById, addContact } = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await listContacts();
      return console.log(allContacts);
    case 'getById':
      const contact = await getContactById(id);
      return console.log(contact);
    case 'add':
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
  }
};

// invokeAction({action: 'read'});
// invokeAction({ action: 'getById', id: 'AeHIrLTr6JkxGE6SN-0Rw' });
invokeAction({
  action: 'add',
  name: 'Paul Raymond',
  email: 'pulla.ante@vestibul.co.uk',
  phone: '(333) 914-3792',
});
