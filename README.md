## Express User Management API

This repository contains an Express.js API for managing users. It provides endpoints to perform CRUD operations on a JSON file storing user data.

### Prerequisites

- Node.js installed on your machine

### Installation

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

- Start the server:

  ```bash
  npm start
  ```

### Endpoints

- **GET /**: Home page
- **GET /api/getusers**: Retrieve all users
- **GET /api/getusers/:id**: Retrieve user by ID
- **POST /api/adduser**: Add a new user
- **PATCH /api/users/:id**: Update user by ID
- **DELETE /api/users/:id**: Delete user by ID

### Example

To add a new user, send a POST request to `/api/adduser` with the following JSON body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### JSON Data

User data is stored in `MOCK_DATA.json`. Ensure it exists and has proper initial data structure.

### Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.
