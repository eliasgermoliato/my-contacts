import delay from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL.concat(path)}`);

    await delay(500);

    return response.json();
  }
}

export default HttpClient;
