### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token a kind of internet standard for creating data with signatures and/or encryption for its JSON payloads

- What is the signature portion of the JWT?  What does it do?
It is created by the server, and checked again by the server to verify that it is properly coming from a trusted source.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, they can see what is in the payload but they cannot send new or fake information back the server to be written as the signature check would fail.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
We can create a JWT with a scret-key that we sign the JWT with to create a kind of encoding. Then inside the payload we put information such as the username. We then have created a token that we can then use to give them access with that token to parts of the application they should have access to. 

- Compare and contrast unit, integration and end-to-end tests. Unit tests, test individual components of the application such as a single function. Integration tests, test the application with other working components such as a database, so you may run an integration test to make sure we are getting correct information from the database. End - to - end tests, tests the full working application, including UI clicks and information pulling from server and also the functions used in between. 

- What is a mock? What are some things you would mock?
A mock creates a example of data for a function, for example if we want to test our random number generator that mutiplies a number, it would be hard to pick the exact number it will pick for the test. So we can use a mock example to implement a static number to test to verify that the outgoing data is correct.

- What is continuous integration?
Contunous Integration is a way of building an application that you smaller portions of the application and test each one, once the tests are passed the code is pushed to the production build. This all happens automatically. So the new code is written, and the tests are submitted. Once the CI server has verfifed the code against the tests it will push the code to the production code.

- What is an environment variable and what are they used for?
The enviroment variable is used to set the enviroment we are currently working in, for example we may set the enviroment variable to a test enviroment so it does not affect the production application when we do our tests. Where the production enviroment would be the live application itself.

- What is TDD? What are some benefits and drawbacks?
TDD is short for Test Driven Development, its a way of coding where you write the tests first and then the code second, this can create more stable code along with reduce the amount of time it takes to debug later. The downside is it takes alot long initially to get the application runnning.

- What is the value of using JSONSchema for validation?
With JSONSchema we are able to quickly write schemas that put contraints on the structure of data. This ensures that the data we submit to the database is accurate and meets all the requirements, if it doesnt we can make it write specific errors to better understand where the issue is.

- What are some ways to decide which code to test?
Testing major functions or parts of the application that are crucial for the application to run properly. Also testing anything that can interface with the database to ensure that it is querying and inputting data correctly.

- What does `RETURNING` do in SQL? When would you use it?
This returns the data that was pulled from the query, allowing us to output the information to the user or other forms of visual representations.

- What are some differences between Web Sockets and HTTP?
HTTP sends data as a response when a request is recieved, a websocket recieves the data based on data availability.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I think FLask is easier to use, and create an application for. But I prefer Express simply because everything start to finish can then be written in Javascript.
