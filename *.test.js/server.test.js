const request = require("supertest"); 
const app = require("../server/server.js");

describe("GET /", () => {
  it("should log Hello, World", async() => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, World")
  });
});

//testing route to signup user - post request to /signuproute - should return an id(string) 
//actually sends request to the database.. way to set up a mock instead? 
describe("post request to /signup route", ()=> {
    it('should return a 201 and a new user (with an id) if things go well and user is an adopter', async()=>{
        const newUser = {
            email: "test6@test.com",
            password: "test6",
            profileType: "cat",
          };
        //   console.log('app.locals before',app.locals.user)
          
        const response = await request(app).post('/signup').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        // console.log('app.locals after',app.locals.user)

    })
})

  // expect(response.body).toEqual({ id: 10});
        // expect(app.locals.pets.length).toBe(4);

// testing the route to login - should return a boolean value.  
// describe("POST /login", ()=> {
//     it("should return true or false", async() => {
//         const response = await request(app).post('/login')
//         // expect(response.status).toBe(200);
//         expect(response.body).toEqual()
//         // .expect('Content-Type', /json/)

//     });
// });



