const express = require("express");
const {
    addBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook,
} = require("../controllers/bookController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

// Admin Routes
router.post("/add-book", authMiddleware, adminMiddleware, addBook);
router.put("/update-book/:id", authMiddleware, adminMiddleware, updateBook);
router.delete("/delete-book/:id", authMiddleware, adminMiddleware, deleteBook);

// User & Admin Routes
router.get("/all-books", authMiddleware, getAllBooks);
router.get("/book/:id", authMiddleware, getBookById);


module.exports = router;