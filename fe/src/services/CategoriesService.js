import HttpClient from './utils/HttpClient';

const { REACT_APP_MY_CONTACTS_API } = process.env;

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient(REACT_APP_MY_CONTACTS_API);
  }

  async listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoriesService();
