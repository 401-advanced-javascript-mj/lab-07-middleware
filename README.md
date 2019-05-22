# LAB - 07  
  
## Middleware  
  
### Authors: Joé Jemmely, Morgana Spake  
  
### Links and Resources  
* [submission PR](https://github.com/401-advanced-javascript-mj/lab-07-middleware/pull/2)  
  
### Modules  
#### `server.js, errorHandler.js, logger.js, notFound.js, requestTime.js, squareNumber.js, routes.js`  
##### Exported Values and Methods  
  
###### `server -> express app`
Exported by server.js, contains the server.  
###### `start`
Exported by server.js, runs the server.  
  
###### `errorHandler`  
Exported by errorHandler.js, sends an error message to the front end.  
  
###### `logger`
Exported by logger.js, console logs the method, path, and date properties of the route.  

###### `notFound`  
Exported by notFound.js, sets a status of 404 and passes an error to the error handler.     
  
###### `requestTime`
Exported by requestTime.js, sets a date property on the request body.  
  
###### `squareNumber`
Exported by squareNumber.js, squares the number passed in as a parameter and sets a number property on the request body.  
  
###### `router -> express router instance`  
Exported by routes.js, contains the '/c' and '/d' routes.   
  
### Setup  
#### `.env` requirements  
* `PORT` - 8080  (or whatever port you want)  
  
#### Running the app  
* `npm start`  
* Endpoint: `/a`  
  * Returns a JSON object with the route name and the current date in it.    
* Endpoint: `/b/{number}`  
  * Returns a JSON object with the square of the input number in it.  
* Endpoint: `/c`  
  * Returns the string 'Route C'.  
* Endpoint: `/d`  
  * Errors with a status of 418. Returns the string 'Error: I am a teapot'.  
  
#### UML 
![uml](https://github.com/401-advanced-javascript-mj/lab-07-middleware/blob/readme/assets/20190521_214037.jpg)  
