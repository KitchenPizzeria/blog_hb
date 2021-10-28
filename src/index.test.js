// //TODO :- Check that router functions return the correct pages

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('Article API', () => {
  it.only('Should return 200', async () => {
    const response = await chai.request('http://localhost:3000/').get('posts');
    expect(response.statusCode).to.equal(200);
    expect(response['body'][0].id).to.equal(1);
    expect(response['body'][0].id).to.be.an('number');
  });
});

describe('posting an article ', () => {
  it('should return 201 ', async () => {
    const response = await chai
      .request('http://localhost:3000/')
      .post('articles')
      .type('form')
      .send({
        title: 'Test da best',
        author: 'Jimmy Cho',
        headline: 'This is a test article',
      });
    expect(response.statusCode).to.equal(201);
  });
});

describe('DELETE', () => {
  it('should ', async () => {
    const response = await chai
      .request('http://localhost:3000/')
      .delete('articles/10');
    expect(response.statusCode).to.equal(200);
  });
});
