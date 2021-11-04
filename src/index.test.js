//TODO :- Check that router functions return the correct pages

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('express-api', () => {
  it.only('Should return 200', async () => {
    const response = await chai.request('http://localhost:3000/').get('posts');
    expect(response.statusCode).to.equal(200);
  });
});
