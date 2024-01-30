const request = require("supertest"); 
const app = require("../server/server.js");
const Profile = require('../server/models/models.js');
//Step2 incorporate testing - Nock?

beforeAll(async () => {
  const newUser = {
    email: "test1@test.com",
    password: "test1",
    profileType: "cat",
  };

  const response = await request(app).post('/signup').send(newUser);
  expect(response.status).toBe(201);
});

//clear database of all users in collection. Can we make this more dynamic to just 
//clear the ones that we are testing? 
afterAll(() => {
  // await Profile.User.collection.drop(); 
  const testUserArr = ["test1@test.com", "test2@test.com", "test3@test.com"];
  testUserArr.forEach(async element => {
    await Profile.User.deleteOne({email: element}); 
  })
})

describe("GET /", () => {
  it("should log Hello, World", async() => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World")
    expect({"content-type": "application/json"})

    //shows what the received value is if you are curious
    // expect(response).toThrow();
  });
});

//testing route to signup user - post request to /signuproute - should return an id(string) 
//actually sends request to the database.. way to set up a mock instead? 
describe("post request to /signup route", ()=> {
    it('should return a 201 and a new user (with an id) if things go well and user is an adopter', async()=>{
        const newUser = {
            email: "test2@test.com",
            password: "test2",
            profileType: "adopter",
          };
        const response = await request(app).post('/signup').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
    })

    it('should return a 201 and a new user (with an id) if things go well and user is placing for adoption', async()=>{
      const newUser = {
          email: "test3@test.com",
          password: "test3",
          profileType: "cat",
        };
      const response = await request(app).post('/signup').send(newUser);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
  })

    it('should throw an error if there are missing fields in an input area', async() => {
      const newUser = {
        email: "test4@test.com",
        password: "test4",
        profileType: "",
      };
      const response = await request(app).post('/signup').send(newUser);
      expect(response.status).toBe(400);
      // expect(response.body).toMatch('Missing required fields');
      expect(response.body).toStrictEqual('Missing required fields');
      // expect(response.body).toBeInstanceOf(Error); 
    }) 

    it('should throw error if user signs in with an existing email in the database', async()=> {
      const existingUser = {
        email: "test1@test.com",
        password: "test1",
        profileType: "adopter",
      };

      const response = await request(app).post('/signup').send(existingUser);
      expect(response.status).toBe(400); 

      //will fail if spelled incorrectly not if it is missing a character;
      // expect(response.body).toMatch("Email already registered");
      // expect(response.body).toContain("Email already registered");

      //will fail if spelled incorrectly and if it is missing a character 
      expect(response.body).toStrictEqual("Email already registered");
    })    
})






