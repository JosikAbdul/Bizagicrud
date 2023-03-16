Todo List API
-------------

This API provides a simple Todo List service with the following endpoints:

### GET /todos

Returns a list of all Todos.

#### Response

Status: `200 OK`

Content-Type: `application/json`

Body:

`[   {     "id": 1,     "title": "Buy milk",     "completed": false   },   {     "id": 2,     "title": "Call John",     "completed": true   },   {     "id": 3,     "title": "Finish report",     "completed": false   } ]`

### POST /todos

Adds a new Todo to the list.

#### Request

Content-Type: `application/json`

Body:


`{   "title": "Do laundry",   "completed": false }`

#### Response

Status: `201 Created`

Content-Type: `application/json`

Body:

`{   "id": 4,   "title": "Do laundry",   "completed": false }`

### PUT /todos/:id

Updates the completed status of a Todo with the specified ID.

#### Request

Content-Type: `application/json`

Body:

`{  title: "new Title", "completed": true }`

#### Response

Status: `200 OK`

Content-Type: `application/json`

Body:

`{   "id": 2,   "title": "Call John",   "completed": true }`

Status: `404 Not Found`

Body:

`Todo not found`

### DELETE /todos/:id

Deletes a Todo with the specified ID.

#### Response

Status: `204 No Content`

Status: `404 Not Found`

Body:


`Todo not found`

### Error Responses

Status: `400 Bad Request`

Body:

`Invalid request body`

Status: `500 Internal Server Error`

Body:

`Internal Server Error`

* * *
