Bug #1 in the routes.test.js
afterAll() should call and await before db.end() to ensure connection is closed. Should be an async function.

Bug #6 in Middleware/auth.js
Doesnt verify the token against the secret key only decodes the payload.