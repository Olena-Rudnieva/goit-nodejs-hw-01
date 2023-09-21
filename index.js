const fs = require('fs');
const { program } = require('commander');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      return console.table(allContacts);
    case 'get':
      const contact = await getContactById(id);
      return console.table(contact);
    case 'add':
      const newContact = await addContact({ name, email, phone });
      return console.table(newContact);
    case 'remove':
      const deleteContact = await removeContact(id);
      return console.table(deleteContact);
    default:
      return console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();
invokeAction(options);
