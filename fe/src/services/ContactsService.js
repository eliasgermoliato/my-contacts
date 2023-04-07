import HttpClient from './utils/HttpClient';

const { REACT_APP_MY_CONTACTS_API } = process.env;

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient(REACT_APP_MY_CONTACTS_API);
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }
}

export default new ContactsService();
