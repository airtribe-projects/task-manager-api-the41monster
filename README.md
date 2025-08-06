# Task Manager API

A simple RESTful API for managing tasks, built with Node.js and Express.

## Overview
This project provides a backend API for creating, reading, updating, and deleting tasks. It is designed for learning and demonstration purposes, and can be used as a starting point for more complex task management applications.

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd task-manager-api-the41monster
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory.
   - Add the following (optional, defaults to port 3000):
     ```
     PORT=3000
     ```

4. **Start the server**
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

All endpoints are prefixed with `/tasks`.

### 1. Get All Tasks
- **Endpoint:** `GET /tasks`
- **Description:** Retrieve a list of all tasks.
- **Test with curl:**
  ```sh
  curl http://localhost:3000/tasks
  ```

### 2. Get Task by ID
- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieve a single task by its ID.
- **Test with curl:**
  ```sh
  curl http://localhost:3000/tasks/<taskId>
  ```

### 3. Create a New Task
- **Endpoint:** `POST /tasks`
- **Description:** Create a new task.
- **Body:** JSON object with task details (e.g., `{ "title": "Sample Task", "description": "Details" }`)
- **Test with curl:**
  ```sh
  curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title":"Sample Task","description":"Details"}'
  ```

### 4. Update a Task
- **Endpoint:** `PUT /tasks/:id`
- **Description:** Update an existing task by ID.
- **Body:** JSON object with updated task details.
- **Test with curl:**
  ```sh
  curl -X PUT http://localhost:3000/tasks/<taskId> \
    -H "Content-Type: application/json" \
    -d '{"title":"Updated Task","description":"Updated details"}'
  ```

### 5. Delete a Task
- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Delete a task by its ID.
- **Test with curl:**
  ```sh
  curl -X DELETE http://localhost:3000/tasks/<taskId>
  ```
