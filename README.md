📚 Library Management System Backend

Project Overview

The Library Management System Backend is a RESTful API built using Node.js, Express.js, and MongoDB. It provides secure user authentication using JWT (JSON Web Token) and allows administrators to manage books through CRUD (Create, Read, Update, Delete) operations.
This project demonstrates backend development concepts such as authentication, authorization, routing, middleware, MongoDB integration, and API testing.

✨ Features

User Registration (Signup)

User Login with JWT Authentication

Role-Based Access Control (Admin/User)

Add New Books (Admin Only)

View All Books

View Book Details by ID

Update Book Information

Delete Books

Secure Password Encryption using bcrypt

MongoDB Database Integration

RESTful API Architecture

🛠 Technologies Used

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcrypt.js

dotenv

Nodemon

Thunder Client (API Testing)

📂 Project Structure

Library-Management-System │ ├── config │ └── db.js │ ├── controllers │ ├── authController.js │ └── bookController.js │ ├── middleware │ └── authMiddleware.js │ ├── models │ ├── User.js │ └── Book.js │ ├── routes │ ├── authRoutes.js │ └── bookRoutes.js │ ├── .env ├── package.json ├── server.js └── README.md 

⚙️ Installation

Step 1: Clone Repository

git clone <repository-link> 

Step 2: Navigate to Project Folder

cd Library-Management-System 

Step 3: Install Dependencies

npm install 

🔐 Environment Variables

Create a .env file in the project root and add:
PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key 

▶️ Running the Project

Start the server:
node server.js 
or
npm run dev 
Server URL:
http://localhost:5000 

📌 API Endpoints

Authentication

User Signup

POST
/api/signup 
Request Body
{ "username": "Pallavi", "email": "pallavi@gmail.com", "password": "1234", "role": "Admin" } 
Response
{ "message": "User Registered Successfully" } 

User Login

POST
/api/login 
Request Body
{ "username": "Pallavi", "password": "1234" } 
Response
{ "message": "Login Successful", "token": "JWT_TOKEN" } 

📚 Book APIs

All book APIs require a valid JWT token.
Header:
Authorization: Bearer <JWT_TOKEN> 

Add Book

POST
/api/books/add-book 
Request Body
{ "title": "Java", "author": "James", "category": "Programming", "isbn": "BK1001", "availableCopies": 5 } 

Get All Books

GET
/api/books/all-books 

Get Book By ID

GET
/api/books/book/:id 

Update Book

PUT
/api/books/update-book/:id 
Request Body
{ "title": "Advanced Java", "availableCopies": 10 } 

Delete Book

DELETE
/api/books/delete-book/:id 

🔒 Authentication

This project uses JWT (JSON Web Token) for secure authentication.

Users receive a token after successful login.

The token must be included in the Authorization header for protected routes.

Only users with the Admin role can add, update, or delete books.

🧪 API Testing

The APIs were tested successfully using Thunder Client.
Testing Sequence:

User Signup

User Login

Add Book

Get All Books

Get Book by ID

Update Book

Delete Book

📈 Future Enhancements

Borrow Book API

Return Book API

Search Books by Title or Author

Pagination and Filtering

Book Availability Tracking

User Borrow History

Fine Calculation

Swagger API Documentation

👩‍💻 Author

Pallavi Anand Naik
Course: Bachelor of Computer Applications (BCA)

Conclusion

The Library Management System Backend provides a secure and efficient REST API for managing users and books. It demonstrates modern backend development practices using Node.js, Express.js, MongoDB, JWT authentication, and role-based authorization. The project is scalable and can be extended with additional library management features in the future.
