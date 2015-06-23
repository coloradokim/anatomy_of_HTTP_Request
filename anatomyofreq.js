//Synchronous Request- the program is suspended as long as the browser and serve are communicating/
//No event handlers can fire while the program is suspended
var request = new XMLHttpRequest(); //"We create a request object with the XMLHttpRequest construtor and call its open and send methods.
request.open('GET', 'URL here', false); //I am opening a GET request for the URL with the open method
request.send(null); //I am sending the request with the send method

//Q. Why is the third argument of the open request false?
//A. Send will only return the information after the response to our request was received

//Asynchronous Request- pass true as the third argument to the open method
//When we call send, only the request is scheduled to be sent, but as long as the request is running, we can't access the response
//We add an eventlistener on 'load', and pass in an anonymous function as the second argument

var request = new XMLHttpRequest();
request.open('GET', 'URL here', true);
request.addEventListener('load', function (){
  console.log('Done:', request.status); //these things (request.status, request. send) will be completed after the page has loaded
});
request.send(null)

//
// From EQ:
// The server then decides what to do with the request and responds with a status code and a response body.
