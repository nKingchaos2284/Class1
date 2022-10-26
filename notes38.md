# Class 8 Reading Notes

## API Design Best Practices

- What does REST stand for?
Representational State Transfer (REST)
<br>

-REST APIs are designed around a ____.
resource
<br>

-What is an identifier of a resource? Give an example.
A resource has an identifier, which is a URI that uniquely identifies that resource. For example, the URI for a particular customer order might be:
https://adventure-works.com/orders/1
<br>

-What are the most common HTTP verbs?
GET, POST, PUT, PATCH, and DELETE
<br>

-What should the URIs be based on?
URIs should be based on nouns (the resource) and not verbs (the operations on the resource).
<br>

-Give an example of a good URI.
https://adventure-works.com/orders // Good
<br>
https://adventure-works.com/create-order // Avoid
<br>

-What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?
The more requests, the bigger the load. Therefore, try to avoid "chatty" web APIs that expose a large number of small resources. Such an API may require a client application to send multiple requests to find all of the data that it requires. Instead, you might want to denormalize the data and combine related information into bigger resources that can be retrieved with a single request.*
*However, you need to balance this approach against the overhead of fetching data that the client doesn't need. Retrieving large objects can increase the latency of a request and incur additional bandwidth costs. For more information about these performance antipatterns, see Chatty I/O and Extraneous Fetching.
<br>

-What status code does a successful GET request return?
A successful GET method typically returns HTTP status code 200 (OK).
<br>

-What status code does an unsuccessful GET request return?**
*If the resource cannot be found, the method should return 404 (Not Found).
<br>

-What status code does a successful POST request return?
POST method creates a new resource, it returns HTTP status code 201 (Created). The URI of the new resource is included in the Location header of the response. The response body contains a representation of the resource.*
<br>

-What status code does a successful DELETE request return?
If the delete operation is successful, the web server should respond with HTTP status code 204 (No Content), indicating that the process has been successfully handled, but that the response body contains no further information. If the resource doesn't exist, the web server can return HTTP 404 (Not Found).
<br>

//----source:https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design