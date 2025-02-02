# MindFlare

## Description
This project provides a REST API to manage users. You can add, retrieve, and delete users.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Satynaag/MindFlare.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

## API Endpoints

### **GET** `/users`
- **Description:** Retrieve all users.
- **Response:**
    ```json
    [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com"
      }
    ]
    ```

### **POST** `/users`
- **Description:** Add a new user.
- **Request Body:**
    ```json
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
    ```

- **Response:**
    ```json
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com"
    }
    ```

### **DELETE** `/users/:id`
- **Description:** Delete a user by ID.
- **Request Example:**
    ```bash
    curl -X DELETE http://localhost:4000/users/2
    ```
- **Response:**
    ```json
    {
      "message": "User with ID 2 deleted"
    }
    ```

## Running the Project

To start the server, run:
```bash
npm start
