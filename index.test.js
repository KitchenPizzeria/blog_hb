//TODO :- Check that router functions return the correct pages

const supertest = require("supertest");
const app = require("./index");
const request = supertest(app);

describe("GET '/' endpoint test", () => {
  it("should be that this endpoint connects and returns feed page ", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(500); // connection established
    expect(response.body);
  });
});
