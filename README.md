# Todo App Backend

This is the backend for a full-stack Todo application built with **Node.js**, **Express.js**, and **TypeScript**. It provides a RESTful API for managing todos and categories.

---

## Features

- **CRUD Operations**: Create, read, update, and delete todos.
- **In-Memory Database**: Uses an in-memory array to store todos (for demonstration purposes).
- **RESTful API**: Follows REST conventions for API design.
- **TypeScript**: Written in TypeScript for type safety and better developer experience.
- **Error Handling**: Proper error handling and input validation.

---

## API Endpoints

### Todos
- **GET** `/api/todos` - Get all todos.
- **POST** `/api/todos` - Create a new todo.
- **PUT** `/api/todos/:id` - Update a todo by ID.
- **DELETE** `/api/todos/:id` - Delete a todo by ID.

### Categories
- **GET** `/api/categories` - Get all categories.
- **POST** `/api/categories` - Create a new category.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (v16 or higher).
- **npm**: npm is bundled with Node.js.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-app-backend.git
   cd todo-app-backend
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. The server will start at http://localhost:5000
