Create a file named README.md in your project folder and paste this:
# 📚 Library Management System Backend A backend application for managing a library system. This project provides APIs for user authentication and book management with role-based access control. ## 🚀 Features - User Registration (Signup) - User Login with JWT Authentication - Role-based Authorization (Admin/User) - Add New Books (Admin only) - View All Books - View Book Details by ID - Update Book Details (Admin only) - Delete Books (Admin only) - MongoDB Database Integration --- ## 🛠️ Technologies Used - Node.js - Express.js - MongoDB - Mongoose - JWT (JSON Web Token) - bcrypt.js - dotenv - Thunder Client (API Testing) --- ## 📂 Project Structure 
Library-Management-System/ │ ├── controllers/ │ ├── authController.js │ └── bookController.js │ ├── models/ │ ├── User.js │ └── Book.js │ ├── routes/ │ ├── authRoutes.js │ └── bookRoutes.js │ ├── middleware/ │ └── authMiddleware.js │ ├── config/ │ └── db.js │ ├── .env ├── server.js ├── package.json └── README.md
--- ## ⚙️ Installation & Setup ### 1. Clone Repository ```bash git clone <your-github-repository-link> 

2. Go to Project Folder

cd Library-Management-System 

3. Install Dependencies

npm install 

4. Create .env File

Add the following:
PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_secret_key 

▶️ Run Project

For normal run:
node server.js 
For development:
npm run dev 
Server will start at:
http://localhost:5000 

🔐 API Endpoints

👤 Authentication APIs

Signup

POST
/api/signup 
Request Body:
{ "username":"Pallavi", "email":"pallavi@gmail.com", "password":"1234", "role":"Admin" } 
Response:
{ "message":"User Registered Successfully" } 

Login

POST
/api/login 
Request Body:
{ "username":"Pallavi", "password":"1234" } 
Response:
{ "message":"Login Successful", "token":"JWT_TOKEN" } 

📖 Book APIs

All book APIs require JWT token.
Header:
Authorization: Bearer <token> 

Add Book

POST
/api/books/add-book 
Body:
{ "title":"Java", "author":"James", "category":"Programming", "isbn":"BK1001", "availableCopies":5 } 

Get All Books

GET
/api/books/all-books 

Get Book By ID

GET
/api/books/book/:id 

Update Book

PUT
/api/books/update-book/:id 
Body:
{ "title":"Advanced Java", "availableCopies":10 } 

Delete Book

DELETE
/api/books/delete-book/:id 

🧪 API Testing

APIs were tested using Thunder Client.
Testing flow:

Register User

Login User

Copy JWT Token

Add Book

Get All Books

Get Book By ID

Update Book

Delete Book

🔒 Authentication

This project uses JWT authentication.

Users receive a token after successful login.

Token must be passed in the Authorization header.

Admin users can manage books.

👩‍💻 Author

Pallavi Anand Naik
BCA Student
⭐ If you find this project useful, give it a star!
After adding this: ```bash git add README.md git commit -m "Added project README" git push 
Your GitHub repository will look complete and professional.
